/**
 * Portfolio Data Source: Projects & Publications
 * -------------------------------------------------------------
 * Edit this file to update your featured research, core project cards,
 * and publications list without having to touch HTML code.
 * 
 * Project Links:
 * Each project can optionally include a `links` array with 1 or 2 items:
 *   links: [
 *     { label: "Paper (JARO 2024)", url: "https://doi.org/..." },
 *     { label: "Code (GitHub)", url: "https://github.com/..." }
 *   ]
 * Icons are automatically assigned based on URL or label (GitHub, DOI/Paper,
 * PyPI, Code, or external link), or you can explicitly specify `icon: "github"`.
 */

const FEATURED_PROJECT = {
  badge: "Current Focus",
  title: "Individualizable Deep Neural Networks for Predicting Continuous EEG in Response to Audio",
  category: "Computational Neuroscience & Machine Learning",
  patent: "Patent Pending · U.S. Prov. App. 63/986,368 (2026)",
  description: "I am developing an end-to-end deep learning framework to predict continuous human electroencephalography (EEG) directly from acoustic waveforms. The model incorporates subject conditioning to capture individual variability in neural morphologies and simulate the effects of age, sex, and hearing impairment.",
  highlights: [
    "End-to-end neural regression from acoustic waveforms to continuous scalp voltages.",
    "Subject conditioning allowing for integration of relatively brief recordings across many subjects.",
    "Direct utility in personalized hearing aid algorithms, in silico experimentation, and auditory diagnostics."
  ],
  tags: [
    "PyTorch",
    "Deep Learning",
    "Biosignals",
    "Auditory Modeling"
  ],
  // Add links here when ready (e.g. preprint, repo):
  links: []
};

const CORE_PROJECTS = [
  {
    category: "Electrophysiology & Modeling",
    categoryTheme: "brand", // options: brand, emerald, purple, amber, slate
    title: "Enhanced Place Specificity of the pABR",
    description: "Using both computational modeling and human electrophysiological recordings, I demonstrated that the parallel auditory brainstem response (pABR), which reduces test times, also improves place specificity on the cochlea.",
    tags: [
      "EEG",
      "Computational Modeling",
      "Auditory Neuroscience"
    ],
    links: [
      {
        label: "Trends in Hearing 2023 (Modeling)",
        url: "https://doi.org/10.1177/23312165231205719"
      },
      {
        label: "JARO 2024 (EEG)",
        url: "https://doi.org/10.1007/s10162-024-00959-w"
      }
    ]
  },
  {
    category: "Sensory Systems",
    categoryTheme: "amber",
    title: "Exploring Attention in the Auditory Brainstem",
    description: "Through three experiments, I demonstrated that subcortical speech encoding is not affected by selective auditory attention. This work utilized novel deconvolution tools developed in our lab alongside custom-fabricated eardrum electrodes to reliably extract canonical auditory brainstem responses to continuous speech.",
    tags: [
      "Auditory Attention",
      "Speech Encoding",
      "Temporal Response Function (TRF)",
      "Cognitive Neuroscience"
    ],
    links: [
      {
        label: "PLoS Biology 2025",
        url: "https://doi.org/10.1371/journal.pbio.3003407"
      }
    ]
  },
  {
    category: "Hardware & Prototyping",
    categoryTheme: "emerald",
    title: "Custom Biosignal Hardware & Electrode Fabrication",
    description: "Designed custom laboratory tooling, 3D-printed fixtures, and fabricated specialized tympanic membrane electrodes (following Simpson et al.) to facilitate experiments and improve recording quality.",
    tags: [
      "Rapid Prototyping",
      "3D Printing",
      "Equipment Design & Fabrication",
      "Electronics"
    ],
    links: [
      {
        label: "Simpson et al., 2020 (Electrode Design)",
        url: "https://doi.org/10.3389/fnsys.2020.00018"
      }
    ]
  },
  {
    category: "Software",
    categoryTheme: "purple",
    title: "Custom Software for Experimentation",
    description: "Engineered software for real-time biosignal acquisition and analysis under the pABR paradigm (`rt_pABR`). Co-developed and published a Python port of the Zilany et al. (2014) auditory nerve model on PyPI (`pyzbc2014`), and built an open-source regressor package (`anmreg`) to deconvolve continuous speech ABRs.",
    tags: [
      "Python",
      "Real-Time DSP",
      "Open Source Software"
    ],
    links: [
      {
        label: "PyZBC2014",
        url: "https://pypi.org/project/pyzbc2014/"
      },
      {
        label: "Real-time pABR",
        url: "https://github.com/tomstoll/rt_pABR"
      },
      {
        label: "Auditory nerve model regressor (anmreg)",
        url: "https://github.com/tomstoll/anmreg"
      }
    ]
  }
];

const PUBLICATIONS = [
  {
    title: "The auditory brainstem response to natural speech is not affected by selective attention",
    authors: "Stoll, T. J., Vandjelovic, N. D., Polonenko, M. J., Li, N. R., Lee, A. K., & Maddox, R. K.",
    year: "2025",
    journal: "PLoS Biology",
    doi: "10.1371/journal.pbio.3003407",
    url: "https://doi.org/10.1371/journal.pbio.3003407"
  },
  {
    title: "Enhanced Place Specificity of the Parallel Auditory Brainstem Response: An Electrophysiological Study",
    authors: "Stoll, T. J., & Maddox, R. K.",
    year: "2024",
    journal: "JARO",
    doi: "10.1007/s10162-024-00959-w",
    url: "https://doi.org/10.1007/s10162-024-00959-w"
  },
  {
    title: "Enhanced Place Specificity of the Parallel Auditory Brainstem Response: A Modeling Study",
    authors: "Stoll, T. J., & Maddox, R. K.",
    year: "2023",
    journal: "Trends in Hearing",
    doi: "10.1177/23312165231205719",
    url: "https://doi.org/10.1177/23312165231205719"
  }
];
