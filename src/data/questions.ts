// questions/questions.ts

export type Question = {
  question: string;
  options: string[];
  answer: number; // index of correct option
};

export type WeekQuestions = {
  week: number;
  questions: Question[];
};

export const questionBank: WeekQuestions[] = [
  {
    week: 1,
    questions: [
      {
        question: "Tropical moist forests do not include",
        options: [
          "broadleaved forests",
          "wet evergreen forests",
          "semi-evergreen forests",
          "moist deciduous forests"
        ],
        answer: 0
      },
      {
        question: "Which of these is not a use value?",
        options: [
          "direct value",
          "indirect value",
          "option value",
          "existence value"
        ],
        answer: 3
      },
      {
        question: "The value derived from the knowledge of use of resources by others in the current generation is called",
        options: [
          "altruistic value",
          "bequest value",
          "existence value",
          "option value"
        ],
        answer: 0
      },
      {
        question: "Montane sub-tropical forests do not include",
        options: [
          "broadleaved forests",
          "pine forests",
          "semi-evergreen forests",
          "dry evergreen forests"
        ],
        answer: 2
      },
      {
        question: "\"Plant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy\" is",
        options: [
          "silvicultural definition of forests",
          "FAO definition of forests",
          "legal definition of forests",
          "ecological definition of forests"
        ],
        answer: 3
      },
      {
        question: "Which of these is not a consumptive value?",
        options: [
          "timber",
          "firewood",
          "non-timber forest products",
          "education"
        ],
        answer: 3
      },
      {
        question: "The term 'forest' originates from",
        options: [
          "Latin foris meaning outside",
          "Greek foris meaning outside",
          "Latin foris meaning trees",
          "Greek foris meaning trees"
        ],
        answer: 0
      },
      {
        question: "The value of leaving use and non-use values for offspring's or future generations is called",
        options: [
          "altruistic value",
          "bequest value",
          "existence value",
          "option value"
        ],
        answer: 1
      },
      {
        question: "Which of these is not a forest type found in India?",
        options: [
          "Mediterranean dry",
          "Tropical dry",
          "Montane temperate",
          "Alpine"
        ],
        answer: 0
      },
      {
        question: "According to the Supreme Court, the term forest land includes",
        options: [
          "some area recorded as forest in the Government record according to ownership",
          "any area recorded as forest in the Government record according to ownership",
          "some area recorded as forest in the Government record irrespective of ownership",
          "any area recorded as forest in the Government record irrespective of ownership"
        ],
        answer: 3
      }
    ]
  },
  {
    week: 2,
    questions: [
      {
        question: "In the context of plant nutrition, boron is",
        options: [
          "macronutrient",
          "micronutrient",
          "primary nutrient",
          "secondary nutrient"
        ],
        answer: 1
      },
      {
        question: "The art and science of cultivating forest crops is called",
        options: [
          "foresti-culture",
          "monoculture",
          "silviculture",
          "silvics"
        ],
        answer: 2
      },
      {
        question: "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
        options: [
          "climatic climax",
          "edaphic climax",
          "disclimax",
          "catastrophic climax"
        ],
        answer: 2
      },
      {
        question: "Which of these is not a characteristic of pioneer species",
        options: [
          "ability to grow on bare rocks",
          "ability to tolerate extreme temperatures",
          "large size",
          "short life span"
        ],
        answer: 2
      },
      {
        question: "Which of these depicts correctly the lithosere primary succession?",
        options: [
          "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
          "Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
          "Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax",
          "Rock → Crustose lichen → Foliose lichen → Shrub → Herbaceous stage → Moss → Woodland → Climax"
        ],
        answer: 0
      },
      {
        question: "The study of life history / general features of forest crops with respect to environmental factors is called",
        options: [
          "foresti-culture",
          "monoculture",
          "silviculture",
          "silvics"
        ],
        answer: 3
      },
      {
        question: "Net primary productivity is given by",
        options: [
          "APAR + LUE",
          "APAR X LUE",
          "APAR - LUE",
          "APAR ÷ LUE"
        ],
        answer: 1
      },
      {
        question: "A climax caused by wildfires is an example of",
        options: [
          "climatic climax",
          "edaphic climax",
          "disclimax",
          "catastrophic climax"
        ],
        answer: 2
      },
      {
        question: "Practical application of scientific, technical and economic principles of forestry comes under which branch of forestry?",
        options: [
          "forest management",
          "forest economics",
          "forest mensuration",
          "forest protection"
        ],
        answer: 0
      },
      {
        question: "Which of these is abiotic factor?",
        options: [
          "vines",
          "trees",
          "reptiles",
          "water"
        ],
        answer: 3
      }
    ]
  },
  {
    week: 3,
    questions: [
      {
        question: "Regur is a term for",
        options: [
          "black cotton soil",
          "alluvial soil",
          "saline soil",
          "red and yellow soil"
        ],
        answer: 0
      },
      {
        question: "Carbonation is an example of",
        options: [
          "chemical weathering",
          "physical weathering",
          "biological weathering",
          "none of the above"
        ],
        answer: 0
      },
      {
        question: "Bangar is a type of",
        options: [
          "black cotton soil",
          "alluvial soil",
          "saline soil",
          "red and yellow soil"
        ],
        answer: 1
      },
      {
        question: "Cryofracturing is an example of",
        options: [
          "chemical weathering",
          "physical weathering",
          "biological weathering",
          "none of the above"
        ],
        answer: 1
      },
      {
        question: "In soil profile, C refers to",
        options: [
          "organic surface layer",
          "topsoil layer",
          "subsoil layer",
          "substratum layer"
        ],
        answer: 3
      },
      {
        question: "Vertical arrangement of soil horizons is called",
        options: [
          "soil texture",
          "soil structure",
          "soil profile",
          "soil science"
        ],
        answer: 2
      },
      {
        question: "Thermal stresses lead to",
        options: [
          "chemical weathering",
          "physical weathering",
          "biological weathering",
          "none of the above"
        ],
        answer: 1
      },
      {
        question: "Khadar is a type of",
        options: [
          "black cotton soil",
          "alluvial soil",
          "saline soil",
          "red and yellow soil"
        ],
        answer: 1
      },
      {
        question: "Hydrolysis is an example of",
        options: [
          "chemical weathering",
          "physical weathering",
          "biological weathering",
          "none of the above"
        ],
        answer: 0
      },
      {
        question: "Which of these has the highest organic matter content?",
        options: [
          "peaty soil",
          "alluvial soil",
          "saline soil",
          "red and yellow soil"
        ],
        answer: 0
      }
    ]
  },
  {
    week: 4,
    questions: [
      {
        question: "Measurement of height based on similar triangles comes under:",
        options: [
          "similar measurement",
          "dissimilar measurement",
          "direct measurement",
          "indirect measurement"
        ],
        answer: 3
      },
      {
        question: "For normal form factor, the reference for the base of the cylinder is",
        options: [
          "base of the tree",
          "breast height",
          "10% of tree height",
          "20% of tree height"
        ],
        answer: 1
      },
      {
        question: "In a triangle, the angle between base and hypotenuse, θ=60° and the hypotenuse c=2 cm. Find the length of the base b.",
        options: [
          "0.33",
          "0.5",
          "0.75",
          "1"
        ],
        answer: 1
      },
      {
        question: "3 trees are located in a sample plot of 15 m x 15 m. Their dbh are as under: dbh=25 cm, 30 cm, 35 cm. Find the stand basal area in sq m per Ha.",
        options: [
          "9.6",
          "14.6",
          "21.6",
          "27.6"
        ],
        answer: 2
      },
      {
        question: "Consider a stand of eucalyptus trees that are on average 30 cm in diameter and spaced on a regular 3 m grid. Find the spacing factor.",
        options: [
          "5",
          "10",
          "15",
          "data insufficient"
        ],
        answer: 1
      },
      {
        question: "For a tree with dbh=45.6 cm, height=27 m and total stem volume of 1.78 cum, the artificial form factor for the tree is:",
        options: [
          "0.1",
          "0.2",
          "0.3",
          "0.4"
        ],
        answer: 1
      },
      {
        question: "For absolute form factor, the reference for the base of the cylinder is",
        options: [
          "base of the tree",
          "breast height",
          "10% of tree height",
          "20% of tree height"
        ],
        answer: 0
      },
      {
        question: "Diameter over bark (dob), diameter under bark (dub) and bark thickness (tb) are related as:",
        options: [
          "dob=dub+tb",
          "dob=dub-tb",
          "dob=dub+2×tb",
          "dob=dub-2×tb"
        ],
        answer: 2
      },
      {
        question: "Choose the correct statement:",
        options: [
          "For a non-circular cross-section, girth tape over-estimates the sectional area.",
          "For a non-circular cross-section, girth tape under-estimates the sectional area.",
          "For a non-circular cross-section, girth tape correctly estimates the sectional area.",
          "None of these is a correct statement."
        ],
        answer: 0
      },
      {
        question: "A tree has dbh of 25 cm. Find its basal area in sq m.",
        options: [
          ".049",
          ".096",
          ".149",
          ".195"
        ],
        answer: 1
      }
    ]
  },
  {
    week: 5,
    questions: [
      {
        question: "The frequency of flyovers is an indicator of",
        options: [
          "spatial resolution",
          "temporal resolution",
          "spectral resolution",
          "radiometric resolution"
        ],
        answer: 1
      },
      {
        question: "___ is how close the measured values are to the correct value.",
        options: [
          "Accuracy",
          "Precision",
          "Bias",
          "Variance"
        ],
        answer: 0
      },
      {
        question: "This sampling employs a simple rule of selecting every k-unit starting with a number chosen at random from 1 to k as the random start. We're talking about",
        options: [
          "Simple random sampling",
          "Systematic sampling",
          "Stratified sampling",
          "Multistage sampling"
        ],
        answer: 1
      },
      {
        question: "A list of sampling units is called a",
        options: [
          "frame",
          "window",
          "sample",
          "population"
        ],
        answer: 0
      },
      {
        question: "Which of these is correct?",
        options: [
          "Plane surveying takes into account the true shape of the Earth and is used for smaller areas (< 250 sq km)",
          "Plane surveying takes into account the true shape of the Earth and is used for larger areas (> 250 sq km)",
          "Geodetic surveying takes into account the true shape of the Earth and is used for smaller areas (<250 sq km)",
          "Geodetic surveying takes into account the true shape of the Earth and is used for larger areas (> 250 sq km)"
        ],
        answer: 3
      },
      {
        question: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
        options: [
          "Simple random sampling",
          "Systematic sampling",
          "Stratified sampling",
          "Multistage sampling"
        ],
        answer: 0
      },
      {
        question: "Bathymetric LiDAR uses",
        options: [
          "far infrared light",
          "near infrared light",
          "orange light",
          "green light"
        ],
        answer: 3
      },
      {
        question: "IMU stands for",
        options: [
          "Imperial metering unit",
          "Inertial metering unit",
          "Imperial measurement unit",
          "Inertial measurement unit"
        ],
        answer: 3
      },
      {
        question: "___ is how close the measured values are to each other.",
        options: [
          "Accuracy",
          "Precision",
          "Bias",
          "Variance"
        ],
        answer: 1
      },
      {
        question: "The time of flight for LiDAR is 0.00001 sec. Find the distance of the object from the instrument.",
        options: [
          "500 m",
          "1000 m",
          "1500 m",
          "2000 m"
        ],
        answer: 1
      }
    ]
  },
  {
    week: 6,
    questions: [
      {
        question: "A scientist uses a trap to capture a monkey. In the context of Wildlife Protection Act 1972,",
        options: [
          "the trap is a weapon and capturing is hunting.",
          "the trap is not a weapon and capturing is hunting.",
          "the trap is a weapon and capturing is not hunting.",
          "the trap is not a weapon and capturing is not hunting."
        ],
        answer: 0
      },
      {
        question: "In the formula I = PXAXT, P refers to",
        options: [
          "professional pressure",
          "pollution pressure",
          "population pressure",
          "none of the above"
        ],
        answer: 2
      },
      {
        question: "Which of these is a deterministic factor?",
        options: [
          "environmental variation",
          "forest fire",
          "death rate",
          "diseases"
        ],
        answer: 2
      },
      {
        question: "Which of these is a stochastic factor?",
        options: [
          "birth rate",
          "death rate",
          "population structure",
          "forest fire"
        ],
        answer: 3
      },
      {
        question: "In the formula I = PXAXT, T refers to",
        options: [
          "transference",
          "time",
          "technology",
          "none of the above"
        ],
        answer: 2
      },
      {
        question: "Which of these forms the fire triangle?",
        options: [
          "fire, air, heat",
          "fire, oxygen, wood",
          "fuel, air, wood",
          "fuel, oxygen, heat"
        ],
        answer: 3
      },
      {
        question: "A veterinarian uses an immobilising gun to capture a deer. In the context of Wildlife Protection Act 1972,",
        options: [
          "the immobilising gun is a weapon and capturing is hunting.",
          "the immobilising gun is not a weapon and capturing is hunting.",
          "the immobilising gun is a weapon and capturing is not hunting.",
          "the immobilising gun is not a weapon and capturing is not hunting."
        ],
        answer: 0
      },
      {
        question: "Invasive climbers increase the probability of which of these fire types?",
        options: [
          "ground fire",
          "surface fire",
          "ladder fire",
          "firestorm"
        ],
        answer: 2
      },
      {
        question: "The acronym HIPPO does not include",
        options: [
          "habitat loss",
          "habitat enhancement",
          "over-harvesting",
          "human over-population"
        ],
        answer: 1
      },
      {
        question: "The acronym HIPPO does not include",
        options: [
          "habitat loss",
          "invasive species",
          "pollination",
          "pollution"
        ],
        answer: 2
      }
    ]
  },
  {
    week: 7,
    questions: [
      {
        question: "A site was clear-cut. Which of these methods of regeneration cannot be used in a short timeframe?",
        options: [
          "natural regeneration",
          "artificial regeneration by direct sowing",
          "artificial regeneration by planting seedlings",
          "artificial regeneration by transplanting trees"
        ],
        answer: 0
      },
      {
        question: "Average age at which a tree is considered mature for felling is called as",
        options: [
          "crop age",
          "felling age",
          "rotation age",
          "maturity age"
        ],
        answer: 2
      },
      {
        question: "Which of these is not a feature of natural regeneration",
        options: [
          "low cost",
          "less requirement of heavy machinery and labour",
          "preservation of genetic variability",
          "good control over genetic improvement"
        ],
        answer: 3
      },
      {
        question: "Ring weeding is primarily a feature of",
        options: [
          "natural regeneration",
          "assisted natural regeneration",
          "artificial regeneration by direct sowing",
          "artificial regeneration by planting seedlings"
        ],
        answer: 1
      },
      {
        question: "The movement of seeds away from their place of seed production into a new area is called",
        options: [
          "translocation",
          "migration",
          "dispersal",
          "drifting"
        ],
        answer: 2
      },
      {
        question: "Which of these is not a feature of natural regeneration",
        options: [
          "seed consumption by insects and seed feeders",
          "little control over spacing and stand density",
          "long time needed to regenerate forest",
          "high requirement of heavy machinery and labour"
        ],
        answer: 3
      },
      {
        question: "Which of these is the correct sequence of a silvicultural system?",
        options: [
          "Stand tending -> Regeneration -> Harvesting",
          "Harvesting -> Stand tending -> Regeneration",
          "Harvesting -> Regeneration -> Stand tending",
          "Regeneration -> Harvesting -> Stand tending"
        ],
        answer: 2
      },
      {
        question: "Which of these is not advantage of clear felling system",
        options: [
          "Simple system, easy and efficient operations",
          "Allows for establishment of a more uniform crop",
          "Increases soil erosion and landslides in hilly areas",
          "Mimics natural processes of fire and large-scale insect attacks"
        ],
        answer: 2
      },
      {
        question: "Tending is done during",
        options: [
          "early stage of life",
          "middle stage of life",
          "late stage of life",
          "any stage of life"
        ],
        answer: 3
      },
      {
        question: "Taungya regeneration is",
        options: [
          "natural regeneration",
          "artificial regeneration with villagers",
          "artificial regeneration with nomadic tribes",
          "artificial regeneration with hunters and gatherers"
        ],
        answer: 1
      }
    ]
  },
  {
    week: 8,
    questions: [
      {
        question: "Trees not putting increment are removed during",
        options: [
          "preparatory felling",
          "seeding felling",
          "secondary felling",
          "final felling"
        ],
        answer: 2
      },
      {
        question: "For a crop with rotation age of 120 years, PB-III would have crop age",
        options: [
          "0-30 years",
          "30-60 years",
          "60-90 years",
          "90-120 years"
        ],
        answer: 1
      },
      {
        question: "Close to nature forestry is a feature of",
        options: [
          "clear felling system",
          "selection system",
          "uniform shelterwood system",
          "group shelterwood system"
        ],
        answer: 1
      },
      {
        question: "Shelterwood system results in",
        options: [
          "even aged stand with natural aesthetics",
          "even aged stand with artificial aesthetics",
          "uneven aged stand with natural aesthetics",
          "uneven aged stand with artificial aesthetics"
        ],
        answer: 0
      },
      {
        question: "Inverse-J shaped number-diameter curves are seen in",
        options: [
          "clear felling system",
          "selection system",
          "uniform shelterwood system",
          "group shelterwood system"
        ],
        answer: 1
      },
      {
        question: "Clear felling system is not used for",
        options: [
          "light demanding species",
          "shade bearer species",
          "plain areas",
          "plateau areas"
        ],
        answer: 1
      },
      {
        question: "Which of these is the correct sequence for shelterwood system?",
        options: [
          "Preparatory felling ->Secondary felling -> Seedling felling -> Final felling",
          "Preparatory felling -> Seedling felling -> Secondary felling -> Final felling",
          "Preparatory felling ->Secondary felling -> Seeding felling -> Final felling",
          "Preparatory felling -> Seeding felling -> Secondary felling -> Final felling"
        ],
        answer: 3
      },
      {
        question: "Felling made with the object of opening the canopy to remove shelter and allow more light for the regenerated crop is",
        options: [
          "preparatory felling",
          "seeding felling",
          "secondary felling",
          "final felling"
        ],
        answer: 2
      },
      {
        question: "In group shelterwood system, the regeneration area is increased",
        options: [
          "centrifugally around gaps",
          "centripetally around gaps",
          "parallel to gaps",
          "perpendicular to gaps"
        ],
        answer: 0
      },
      {
        question: "Catchment areas are best suited for",
        options: [
          "clear felling system",
          "selection system",
          "uniform shelterwood system",
          "group shelterwood system"
        ],
        answer: 1
      }
    ]
  },
  {
    week: 9,
    questions: [
      {
        question: "Moving of logs from forest to landing area is known as",
        options: [
          "marking",
          "bucking",
          "skidding",
          "delimbing"
        ],
        answer: 2
      },
      {
        question: "Research plots are shown in __ marking colour",
        options: [
          "yellow",
          "blue",
          "red",
          "white"
        ],
        answer: 3
      },
      {
        question: "Which of these gives the greatest accuracy in constructing face cuts",
        options: [
          "conventional face",
          "humboldt face",
          "open face",
          "all of these"
        ],
        answer: 2
      },
      {
        question: "Careful selection of trees for harvesting based on a forest management prescription is known as",
        options: [
          "surveying",
          "cruising",
          "marking",
          "logging"
        ],
        answer: 2
      },
      {
        question: "Surveying timberlands to locate and estimate the volumes and grades of standing timber meeting requirements is known as",
        options: [
          "surveying",
          "cruising",
          "marking",
          "logging"
        ],
        answer: 1
      },
      {
        question: "Trees on boundary are shown in ___ marking colour",
        options: [
          "yellow",
          "blue",
          "red",
          "white"
        ],
        answer: 1
      },
      {
        question: "Cutting of timber into logs is known as",
        options: [
          "marking",
          "bucking",
          "skidding",
          "delimbing"
        ],
        answer: 1
      },
      {
        question: "Which of these gives the greatest saving of lumber",
        options: [
          "conventional face",
          "humboldt face",
          "open face",
          "all of these"
        ],
        answer: 1
      },
      {
        question: "Trees to be retained are shown in __ marking colour",
        options: [
          "yellow",
          "blue",
          "red",
          "white"
        ],
        answer: 0
      },
      {
        question: "Net growth in initial volume is given by",
        options: [
          "V2-V1",
          "V2-V1+H-I",
          "V2-V1+H-I+M",
          "V2-V1+H-I-M"
        ],
        answer: 2
      }
    ]
  },
  {
    week: 10,
    questions: [
      {
        question: "Shell cracking of seeds is used for which species",
        options: [
          "amla",
          "mango",
          "ber",
          "teak"
        ],
        answer: 2
      },
      {
        question: "Wet and dry treatment of seeds is used for which species",
        options: [
          "amla",
          "mango",
          "ber",
          "teak"
        ],
        answer: 0
      },
      {
        question: "Agave is used for",
        options: [
          "barbed wire fencing",
          "live fencing",
          "chain link fencing",
          "stone wall fencing"
        ],
        answer: 1
      },
      {
        question: "Which of these is not a laboratory method to determine best days for seed collection?",
        options: [
          "maximum dry weight",
          "colour of fruits",
          "moisture content of fruits",
          "chemical analysis of fat and nitrogen content"
        ],
        answer: 1
      },
      {
        question: "Which of these characterises a refractory site",
        options: [
          "soil depth <10 cm",
          "soil depth 10-30 cm",
          "soil depth >30 cm",
          "none of these"
        ],
        answer: 0
      },
      {
        question: "Which of these is a good storage condition",
        options: [
          "high moisture, high temperature",
          "high moisture, low temperature",
          "low moisture, high temperature",
          "low moisture, low temperature"
        ],
        answer: 3
      },
      {
        question: "Which of these prevents water logging",
        options: [
          "sunken bed",
          "raised bed",
          "flat bed",
          "all of these"
        ],
        answer: 1
      },
      {
        question: "Choice of spacing is dependent upon",
        options: [
          "objective of plantation",
          "site-species matching",
          "growth rate",
          "all of these"
        ],
        answer: 3
      },
      {
        question: "Which of these conserves moisture",
        options: [
          "sunken bed",
          "raised bed",
          "flat bed",
          "all of these"
        ],
        answer: 0
      },
      {
        question: "Number of seeds in sample that germinate upto the peak germination period expressed as % is a definition of",
        options: [
          "germination number",
          "germination percentage",
          "germination energy",
          "germination power"
        ],
        answer: 2
      }
    ]
  },
  {
    week: 11,
    questions: [
      {
        question: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
        options: [
          "umbrella species",
          "keystone species",
          "flagship species",
          "all of the above"
        ],
        answer: 3
      },
      {
        question: "Zoo is an example of",
        options: [
          "in-situ conservation",
          "ex-situ conservation",
          "in-situ preservation",
          "ex-situ preservation"
        ],
        answer: 1
      },
      {
        question: "Sustainable harvest of resources falls under the category of:",
        options: [
          "conservation",
          "preservation",
          "environmentalism",
          "none of the above"
        ],
        answer: 0
      },
      {
        question: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
        options: [
          "very high",
          "medium",
          "very low",
          "non-existent"
        ],
        answer: 1
      },
      {
        question: "Captive breeding is an example of",
        options: [
          "in-situ conservation",
          "ex-situ conservation",
          "in-situ preservation",
          "ex-situ preservation"
        ],
        answer: 1
      },
      {
        question: "Which of these is not a forest classification as per the 1894 Forest Policy:",
        options: [
          "protection forest",
          "production forest",
          "minor forest",
          "major forest"
        ],
        answer: 3
      },
      {
        question: "In 1931, Van Panchayats were constituted in areas that are now in",
        options: [
          "Tamil Nadu",
          "Madhya Pradesh",
          "West Bengal",
          "Uttarakhand"
        ],
        answer: 3
      },
      {
        question: "Planting along canal banks is a part of",
        options: [
          "farm forestry",
          "community forestry",
          "extension forestry",
          "agroforestry"
        ],
        answer: 2
      },
      {
        question: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
        options: [
          "least concern species",
          "keystone species",
          "flagship species",
          "extinct species"
        ],
        answer: 1
      },
      {
        question: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
        options: [
          "umbrella species",
          "keystone species",
          "flagship species",
          "all of the above"
        ],
        answer: 3
      }
    ]
  },
  {
    week: 12,
    questions: [
      {
        question: "A tree has dbh of 35 cm. Find its basal area in sq m.",
        options: [
          ".049",
          ".096",
          ".149",
          ".195"
        ],
        answer: 2
      },
      {
        question: "In a triangle, the angle between base and hypotenuse, θ=60° and the hypotenuse c=4 cm. Find the length of the base b.",
        options: [
          "0.66",
          "1",
          "1.5",
          "2"
        ],
        answer: 2
      },
      {
        question: "\"allowing some places and some creatures to exist without significant human interference\" is a definition of",
        options: [
          "conservation",
          "preservation",
          "environmentalism",
          "all of these"
        ],
        answer: 1
      },
      {
        question: "In India, the breast height is considered to be",
        options: [
          "1.37 m",
          "1.47 m",
          "1.57 m",
          "2.47 m"
        ],
        answer: 0
      },
      {
        question: "The term laterite soil is derived from Latin later which means",
        options: [
          "red",
          "brick",
          "fertile",
          "infertile"
        ],
        answer: 1
      },
      {
        question: "Which of these is not a non-use value?",
        options: [
          "direct value",
          "existence value",
          "altruistic value",
          "bequest value"
        ],
        answer: 0
      },
      {
        question: "\"Science of relationships between organisms and their environments\" is the definition of:",
        options: [
          "conservation",
          "preservation",
          "environmentalism",
          "ecology"
        ],
        answer: 3
      },
      {
        question: "Self ploughing character is seen in",
        options: [
          "black cotton soil",
          "alluvial soil",
          "saline soil",
          "red and yellow soil"
        ],
        answer: 0
      },
      {
        question: "Mechanical action of ocean waves is an example of",
        options: [
          "chemical weathering",
          "physical weathering",
          "biological weathering",
          "none of the above"
        ],
        answer: 1
      },
      {
        question: "Lithosere is an example of",
        options: [
          "hydrosere",
          "xerosere",
          "psammosere",
          "halosere"
        ],
        answer: 1
      }
    ]
  }
];
