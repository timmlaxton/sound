const products = [
  {
    _id: "1",
    name: "Audio-Technica AT4033a",
    image: "/images/mics/Audio Technica AT4033a.jpg",
    description:
      "Broadly useful cardiod condenser, which provides exceptional transient response and clean output signals",
    quantity: 1,
  },
  {
    _id: "2",
    name: "Audio-Technica ATM2500de",
    image: "/images/mics/audio-technica-atm250de-58973.jpg",
    description:
      "This two-in-one kick-drum mic aims to offer all the benefits of multi-miking techniques, but without the risk of phase problems.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "3",
    name: "Audix d6",
    image: "/images/mics/Audix D6.jpg",
    description:
      "The D6 dynamic instrument microphone is used for stage, studio, and broadcast application.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "4",
    name: "Beyerdynamic m201",
    image: "/images/mics/beyerdynamic-m201_697x697.jpg",
    description:
      "The microphone is particularly suited for picking up drumming, acoustic guitar and banjo sounds.",
    category: "mic",
    quantity: 2,
  },
  {
    _id: "5",
    name: "Beyerdynamic m130",
    image: "/images/mics/Beyerdynamic m130.jpg",
    description:
      "Classic ribbon microphone offering two stacked ribbons enusring pure, uncolored sound.",
    category: "mic",
    quantity: 2,
  },

  {
    _id: "7",
    name: "Beyerdynamic m160",
    image: "/images/mics/beyerdynamic-m160-de.jpg",
    description:
      "While most ribbon microphones rely on a figure 8 polar pattern, the M 160 distinguishes itself with hypercardioid.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "8",
    name: "Beyerdynamic m88",
    image: "/images/mics/beyerdynamic m88.jpg",
    description:
      " A moving coil microphone which reduces the risk of acoustic feedback in transmission systems of any kind to an absolute minimum",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "9",
    name: "EarthWorks PM40",
    image: "/images/mics/Earthworks PM40.jpg",
    description:
      "The PM40 “PianoMic” system is a unique solution for recording an acoustic piano.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "10",
    name: "Electrovoice RE20",
    image: "/images/mics/Electrovoice RE20 Golden Age Project.jpg",
    description:
      "The RE20 dynamic cardioid microphone is truly an industry standard, a firm favorite for broadcasting, podcasting, and sound engineering worldwide.",
    category: "mic",
    quantity: 2,
  },
  {
    _id: "11",
    name: "R1 Active Ribbon",
    image: "/images/mics/R1 Active Ribbon.jpg",
    description:
      "A clean and clear sound, yet warm and punchy is what the R1 Active will deliver in most cases.",
    category: "mic",
    quantity: 2,
  },
  {
    _id: "12",
    name: "Oktava mk-012",
    image: "/images/mics/Oktava mk-012.jpg",
    description:
      "A compact, high quality capacitor microphone with interchangeable capsules to provide a choice of cardioid, hypercardioid or omni-directional polar patterns.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "13",
    name: "Røde NT5",
    image: "/images/mics/Rode NT5.jpg",
    description:
      "Intended for recording acoustic instruments, drum overheads, cymbals and live performances, the compact externally polarized mic employs a 1/2 capsule, an active J-FET impedance converter with bipolar output buffer",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "14",
    name: "Shure KSM141",
    image: "/images/mics/Shure KSM141.jpg",
    description:
      "A dual-pattern end-addressed condenser microphone with a rotating collar, allowing easy switching between a consistent cardioid or true omnidirectional polar pattern",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "15",
    name: "Shure SM7B",
    image: "/images/mics/Shure SM7B.jpg",
    description:
      "This dynamic microphone has a smooth, flat, wide-range frequency response that's perfect for music and speech in all professional audio scenarios",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "16",
    name: "Shure SM57",
    image: "/images/mics/Shure SM57.jpg",
    description:
      "For every acoustic condition, the SM57 delivers the power of your playing to every fan in the house.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "17",
    name: "Shure Beta 57a",
    image: "/images/mics/Shure beta 57a.jpg",
    description:
      " A dynamic instrument microphone which features a steel mesh grille for durability, shock mount to minimize transmission of unwanted noise, and a neodymium magnet for high signal-to-noise ratio.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "18",
    name: "Shure Beta 98",
    image: "/images/mics/shure beta 98.jpg",
    description:
      "The Beta 98/S condenser microphone is precision-engineered for high-SPL instrument applications. Its supercardioid polar pattern provides maximum isolation from other onstage sounds.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "19",
    name: "Shure SM58",
    image: "/images/mics/shure sm58.jpg",
    description:
      "The Shure SM58 is a dynamic microphone for lead and backup vocals at live performances, professional audio amplification, and studio recordings.",
    category: "mic",
    quantity: 3,
  },
  {
    _id: "20",
    name: "Sennheiser e906",
    image: "/images/mics/sennheiser e906.jpg",
    description:
      "Professional super-cardioid, dynamic instrument mic with switchable presence filter. Versatile to handle drums, percussion, and guitar amplifiers.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "21",
    name: "Sennheiser e604",
    image: "/images/mics/sennheiser e604.jpg",
    category: "mic",
    description:
      "Compact dynamic cardioid instrument microphone that is compatible with toms, snares, and percussion. Clips-on quickly and easily wherever you choose.",
    quantity: 1,
  },
  {
    _id: "22",
    name: "Sennheiser Vintage MD 421",
    image: "/images/mics/sennheiser-md421-vintage-dynamic.jpg",
    description:
      "A robust, large diaphragm, cardioid, dynamic microphone that has excellent frequency response from 30 Hz to 17 kHz with a brightness boost at around 4-5 kHz making it perfect for speech and vocals.",
    category: "mic",
    quantity: 1,
  },
  {
    _id: "23",
    name: "Sennheiser MD 441-U",
    image: "/images/mics/Sennheiser MD 441-U.jpg",
    description:
      "The MD 441 U is a microphone of an exceptional quality: its acoustic properties correspond to those of a condenser microphone. Transient response and low distortion are ensured even at extremely high sound pressure",
    category: "mic",
    quantity: 1,
  },
];

export default products;
