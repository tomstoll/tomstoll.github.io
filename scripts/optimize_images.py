import os
import shutil
from PIL import Image, ImageOps

WORKSPACE = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
BACKUP_DIR = os.path.join(WORKSPACE, "original_images_backup")

def optimize_image(src_path, max_dim=1920, backup_subdir="hobbies/images"):
    rel_name = os.path.basename(src_path)
    backup_folder = os.path.join(BACKUP_DIR, *backup_subdir.split("/"))
    os.makedirs(backup_folder, exist_ok=True)
    backup_path = os.path.join(backup_folder, rel_name)

    size_before = os.path.getsize(src_path)

    with Image.open(src_path) as img:
        img = ImageOps.exif_transpose(img)
        w, h = img.size

        # If already <= max_dim and file size is reasonably small (< 800 KB), skip
        if max(w, h) <= max_dim and size_before < 800 * 1024:
            return None

        # Backup the full-res original if not backed up yet
        if not os.path.exists(backup_path) or os.path.getsize(backup_path) < size_before:
            shutil.copy2(src_path, backup_path)
            backed_up = True
        else:
            backed_up = False

        if img.mode != "RGB":
            img = img.convert("RGB")

        # Downscale keeping aspect ratio
        if max(w, h) > max_dim:
            if w > h:
                new_w = max_dim
                new_h = int(round(h * (max_dim / w)))
            else:
                new_h = max_dim
                new_w = int(round(w * (max_dim / h)))
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        else:
            new_w, new_h = w, h

        img.save(src_path, "JPEG", quality=84, optimize=True, progressive=True)

    size_after = os.path.getsize(src_path)
    return {
        "file": rel_name,
        "before_kb": size_before / 1024,
        "after_kb": size_after / 1024,
        "dims_before": f"{w}x{h}",
        "dims_after": f"{new_w}x{new_h}",
        "backed_up": backed_up
    }

def main():
    print("=" * 65)
    print("  Tom's Website Image Optimizer")
    print("=" * 65)

    processed = []

    # Check hobbies images
    hobbies_dir = os.path.join(WORKSPACE, "hobbies", "images")
    if os.path.exists(hobbies_dir):
        for fname in sorted(os.listdir(hobbies_dir)):
            ext = os.path.splitext(fname)[1].lower()
            if ext in [".jpg", ".jpeg"]:
                full_path = os.path.join(hobbies_dir, fname)
                res = optimize_image(full_path, max_dim=1920, backup_subdir="hobbies/images")
                if res:
                    processed.append(res)

    # Check headshot
    headshot_path = os.path.join(WORKSPACE, "headshot.jpg")
    if os.path.exists(headshot_path):
        res = optimize_image(headshot_path, max_dim=1000, backup_subdir="")
        if res:
            processed.append(res)

    if not processed:
        print("\nAll images are already optimized! Nothing to do.")
    else:
        print(f"\nSuccessfully optimized {len(processed)} image(s):\n")
        for p in processed:
            saved_pct = (1 - p['after_kb'] / p['before_kb']) * 100
            backup_tag = " (original backed up)" if p['backed_up'] else ""
            print(f" • {p['file']:22s} : {p['before_kb']:6.1f} KB ({p['dims_before']}) -> {p['after_kb']:5.1f} KB ({p['dims_after']}) [-{saved_pct:4.1f}%]{backup_tag}")

    print("\n" + "=" * 65)

if __name__ == "__main__":
    main()
