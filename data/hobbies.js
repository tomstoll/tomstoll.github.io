/**
 * Side Projects & Hobbies Data Source
 * -------------------------------------------------------------
 * Edit this file to add, edit, or reorganize your side projects gallery
 * without having to touch any HTML code.
 * 
 * Note: Projects are automatically displayed in reverse order of `id`
 * (highest / newest id first). To add a new project, simply append it
 * to the bottom of HOBBY_PROJECTS with the next incrementing id (e.g. id: 16).
 * 
 * Fields for each item:
 * - id: Unique number or identifier
 * - title: Name of the project or piece
 * - category: Category name for filtering ("Blacksmithing", "Woodworking", "3D Printing", "Maker / Electronics", "Painting")
 * - year: Year made or period (e.g. "2026", "2025", "2022")
 * - description: A brief summary or story of how it was made and what it does
 * - image: Relative path to the photo from hobbies/ (e.g. "images/knives.jpg")
 */

var HOBBY_PAGE_CONFIG = {
  pageTitle: "Beyond the Lab",
  pageSubtitle: "A showcase of things I've built, forged, crafted, and actually remembered to photograph!",
  backLinkText: "Back to Research"
};

var HOBBY_PROJECTS = [
  {
    id: 1,
    title: "Wearable Eye-Tracking Glasses",
    category: "Maker / Electronics",
    year: "2018",
    description: "Biomedical engineering capstone project: designed, printed, and assembled a low-cost, wearable, lensless-glasses system with integrated camera and LED for real-time pupillometry to assess locked-in syndrome.",
    image: "images/senior_design.jpeg"
  },
  {
    id: 2,
    title: "Acoustic Alignment & Speaker Mount",
    category: "3D Printing",
    year: "2019",
    description: "Rotation project: Custom-modeled and 3D printed fixture designed to align KEF coaxial speakers using integrated laser pointers.",
    image: "images/speaker_aligner.jpg"
  },
  {
    id: 3,
    title: "Forged Double Wall Hook",
    category: "Blacksmithing",
    year: "2021",
    description: "Simple hand-forged double wall hook featuring scrolled tips, punched countersunk mounting holes, and a traditional boiled linseed oil finish.",
    image: "images/hook.jpg"
  },
  {
    id: 4,
    title: "Forged Tooling & Cross-Peen Hammer",
    category: "Blacksmithing",
    year: "2022",
    description: "Blacksmithing shop tooling made at a workshop at the Rochester Arc and Flame Center including a punched-eye cross-peen hammer head, hardy holdfast clamp, tapered drift, scribe, and center punch.",
    image: "images/hammer_and_tools.jpg"
  },
  {
    id: 5,
    title: "Custom Propane Gas Forge",
    category: "Blacksmithing",
    year: "2022",
    description: "Custom propane gas forge built for blacksmithing. Insulated with rigidized ceramic wool lining coated with high-temperature refractory mortar and uses a Venturi burner assembly.",
    image: "images/forge.jpg"
  },
  {
    id: 6,
    title: "Engraved Wooden Stovetop Cover",
    category: "Woodworking",
    year: "2022",
    description: "Custom fitted wooden stovetop cover with a laser-engraved design and side carry handles.",
    image: "images/stove_cover.jpg"
  },
  {
    id: 7,
    title: "LightSound Eclipse Sonification Device",
    category: "Maker / Electronics",
    year: "2022",
    description: "LightSound box that translates light intensity into tones, enabling blind and low-vision individuals to experience the event. Built as part of the LightSound workshop at the Rochester Museum of Science.",
    image: "images/eclipse_device.jpg"
  },
  {
    id: 8,
    title: "Hand-Forged Steel Rose Sculpture",
    category: "Blacksmithing",
    year: "2023",
    description: "Floral centerpiece with textured and shaped rose petals mounted on an organic stem with leaves, a candle holder, and a scrolled tripod base. Made at the Rochester Arc and Flame Center.",
    image: "images/flower_centerpiece.jpg"
  },
  {
    id: 9,
    title: "Treble Clef Wall Hook",
    category: "Blacksmithing",
    year: "2023",
    description: "Hand-forged decorative wall hook in the shape of a treble clef.",
    image: "images/music_hook.jpg"
  },
  {
    id: 10,
    title: "Laser-Cut Food Bag Dispenser",
    category: "Woodworking",
    year: "2023",
    description: "Laser cut and engraved kitchen organizer with dedicated slotted dispenser compartments for various kitchen storage bags.",
    image: "images/bag_holder.jpg"
  },
  {
    id: 11,
    title: "Custom-Built PC",
    category: "Maker / Electronics",
    year: "2023",
    description: "Custom-built PC for hobbies including coding projects, machine learning, and gaming.",
    image: "images/pc.jpg"
  },
  {
    id: 12,
    title: "Hand-Forged Knives",
    category: "Blacksmithing",
    year: "2025",
    description: "Shaped at the anvil, refined and sharpened on belt grinders, and heat-treated using a coal forge. Made during a blacksmithing workshop at the Michigan Folk School.",
    image: "images/knives.jpg"
  },
  {
    id: 13,
    title: "Candle Lantern Centerpiece",
    category: "3D Printing",
    year: "2025",
    description: "Decorative lantern designed and printed for use as a table centerpiece at my sister's wedding.",
    image: "images/lantern.jpg"
  },
  {
    id: 14,
    title: "Forged Steel Bottle Opener",
    category: "Blacksmithing",
    year: "2026",
    description: "Bottle opener with drawn tapered handle, punched and drifted eye ring, and my maker's touchmark stamp.",
    image: "images/bottle_opener.jpg"
  },
  {
    id: 15,
    title: "Winter Landscape",
    category: "Painting",
    year: "2026",
    description: "Wet-on-wet mountain landscape painting. Made in a Bob Ross painting class.",
    image: "images/winter_painting.jpg"
  }
];

// Attach explicitly to window for universal browser availability
if (typeof window !== "undefined") {
  window.HOBBY_PAGE_CONFIG = HOBBY_PAGE_CONFIG;
  window.HOBBY_PROJECTS = HOBBY_PROJECTS;
}
