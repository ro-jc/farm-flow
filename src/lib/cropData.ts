// Crop data sourced from TNAU Agritech Portal and SPIC
export const crops = {
  rice: {
    name: { en: 'Rice', ta: 'நெல்' },
    seasons: ['kharif', 'rabi'],
    sowingWindow: {
      kharif: { start: 'June 15', end: 'July 31' },
      rabi: { start: 'September 15', end: 'October 31' },
      summer: { start: 'January 15', end: 'February 28' },
    },
    duration: 120, // days
    waterRequirement: 1200, // mm
    spacing: { row: 20, plant: 15 }, // cm
    seedRate: { integrated: 30, organic: 35 }, // kg/acre
  },
  maize: {
    name: { en: 'Maize', ta: 'மக்காச்சோளம்' },
    seasons: ['kharif', 'rabi', 'summer'],
    sowingWindow: {
      kharif: { start: 'June 15', end: 'July 15' },
      rabi: { start: 'October 1', end: 'November 15' },
      summer: { start: 'January 15', end: 'February 15' },
    },
    duration: 100,
    waterRequirement: 500,
    spacing: { row: 60, plant: 25 },
    seedRate: { integrated: 8, organic: 10 },
  },
  cotton: {
    name: { en: 'Cotton', ta: 'பருத்தி' },
    seasons: ['kharif'],
    sowingWindow: {
      kharif: { start: 'June 1', end: 'July 31' },
      rabi: { start: 'September 15', end: 'October 15' },
      summer: null,
    },
    duration: 180,
    waterRequirement: 700,
    spacing: { row: 90, plant: 60 },
    seedRate: { integrated: 1.5, organic: 2 },
  },
};

export const tamilNaduDistricts = [
  'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore',
  'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram',
  'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai',
  'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai',
  'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi',
  'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli',
  'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur',
  'Vellore', 'Viluppuram', 'Virudhunagar',
];

export const soilTypes = [
  { id: 'clay', name: { en: 'Clay', ta: 'களிமண்' } },
  { id: 'sandy', name: { en: 'Sandy', ta: 'மணல் மண்' } },
  { id: 'loamy', name: { en: 'Loamy', ta: 'வண்டல் மண்' } },
  { id: 'clayLoam', name: { en: 'Clay Loam', ta: 'களி வண்டல்' } },
  { id: 'sandyLoam', name: { en: 'Sandy Loam', ta: 'மணல் வண்டல்' } },
  { id: 'black', name: { en: 'Black Cotton Soil', ta: 'கருப்பு பருத்தி மண்' } },
  { id: 'red', name: { en: 'Red Soil', ta: 'சிவப்பு மண்' } },
  { id: 'alluvial', name: { en: 'Alluvial', ta: 'படிவு மண்' } },
];

export const irrigationSystems = [
  { id: 'drip', name: { en: 'Drip Irrigation', ta: 'சொட்டு நீர்ப்பாசனம்' }, efficiency: 90 },
  { id: 'sprinkler', name: { en: 'Sprinkler', ta: 'தெளிப்பான்' }, efficiency: 75 },
  { id: 'flood', name: { en: 'Flood/Basin', ta: 'வெள்ளப்பாசனம்' }, efficiency: 50 },
  { id: 'furrow', name: { en: 'Furrow', ta: 'வாய்க்கால் பாசனம்' }, efficiency: 60 },
  { id: 'rainfed', name: { en: 'Rainfed', ta: 'மழை சார்ந்த' }, efficiency: 0 },
];

export const fertilizerSources = {
  nitrogen: [
    { id: 'urea', name: 'Urea (SPIC Urea)', composition: '46% N', organic: false },
    { id: 'ammoniumSulphate', name: 'Ammonium Sulphate', composition: '20.6% N, 24% S', organic: false },
    { id: 'neem', name: 'Neem Cake', composition: '5% N', organic: true },
    { id: 'vermicompost', name: 'Vermicompost', composition: '1.5-2% N', organic: true },
    { id: 'fym', name: 'Farm Yard Manure', composition: '0.5% N', organic: true },
  ],
  phosphorus: [
    { id: 'ssp', name: 'Single Super Phosphate (SPIC SSP)', composition: '16% P₂O₅', organic: false },
    { id: 'dap', name: 'DAP (SPIC DAP)', composition: '46% P₂O₅, 18% N', organic: false },
    { id: 'rockPhosphate', name: 'Rock Phosphite', composition: '20-35% P₂O₅', organic: true },
    { id: 'bonereal', name: 'Bone Meal', composition: '20-25% P₂O₅', organic: true },
  ],
  potassium: [
    { id: 'mop', name: 'Muriate of Potash (SPIC MOP)', composition: '60% K₂O', organic: false },
    { id: 'sop', name: 'Sulphate of Potash', composition: '50% K₂O, 17% S', organic: false },
    { id: 'woodAsh', name: 'Wood Ash', composition: '5-10% K₂O', organic: true },
  ],
};

// SPIC Products Database
export const spicProducts = {
  fertilizers: {
    urea: { brand: 'SPIC Urea', composition: '46% N', dosage: '50 kg/bag' },
    dap: { brand: 'SPIC DAP', composition: '18% N + 46% P₂O₅', dosage: '50 kg/bag' },
    mop: { brand: 'SPIC MOP', composition: '60% K₂O', dosage: '50 kg/bag' },
    ssp: { brand: 'SPIC SSP', composition: '16% P₂O₅ + 11% S', dosage: '50 kg/bag' },
    complex: { brand: 'SPIC Complex 17:17:17', composition: '17% N + 17% P₂O₅ + 17% K₂O', dosage: '50 kg/bag' },
    complex20: { brand: 'SPIC Complex 20:20:0:13', composition: '20% N + 20% P₂O₅ + 13% S', dosage: '50 kg/bag' },
  },
  micronutrients: {
    zinc: { brand: 'SPIC Zinc Sulphate', composition: 'ZnSO₄ 21%', dosage: '25 kg/acre' },
    ferrous: { brand: 'SPIC Ferrous Sulphate', composition: 'FeSO₄ 19%', dosage: '10 kg/acre' },
    boron: { brand: 'SPIC Boron', composition: 'Borax 11%', dosage: '5 kg/acre' },
  },
  organic: {
    cytozyme: { brand: 'SPIC Cytozyme', composition: 'Seaweed extract', dosage: '500 ml/acre' },
    humic: { brand: 'SPIC Humic', composition: 'Humic acid 12%', dosage: '1 kg/acre' },
  },
  nano: {
    nanoUrea: { brand: '  SPIC Sakthi Nano Urea', composition: '4% N', dosage: '500 ml/acre (foliar)' },
  },
  bioFertilizers: {
    azospirillum: { brand: 'SPIC Azospirillum', composition: 'Azospirillum brasilense', dosage: '200 g/acre' },
    phosphobacteria: { brand: 'SPIC Phosphobacteria', composition: 'Bacillus megaterium', dosage: '200 g/acre' },
    rhizobium: { brand: 'SPIC Rhizobium', composition: 'Rhizobium sp.', dosage: '200 g/acre' },
    psb: { brand: 'SPIC PSB', composition: 'Phosphate Solubilizing Bacteria', dosage: '200 g/acre' },
  },
  pesticides: {
    chlorpyrifos: { brand: 'SPIC Chlor 20 EC', composition: 'Chlorpyrifos 20% EC', dosage: '400 ml/acre' },
    imidacloprid: { brand: 'SPIC Imida 17.8 SL', composition: 'Imidacloprid 17.8% SL', dosage: '100 ml/acre' },
    thiamethoxam: { brand: 'SPIC Thio 25 WG', composition: 'Thiamethoxam 25% WG', dosage: '100 g/acre' },
    neem: { brand: 'SPIC Neem Gold', composition: 'Azadirachtin 1500 ppm', dosage: '1 L/acre' },
  },
  fungicides: {
    mancozeb: { brand: 'SPIC Manco 75 WP', composition: 'Mancozeb 75% WP', dosage: '1 kg/acre' },
    carbendazim: { brand: 'SPIC Carben 50 WP', composition: 'Carbendazim 50% WP', dosage: '500 g/acre' },
    copper: { brand: 'SPIC Copper Oxy', composition: 'Copper Oxychloride 50% WP', dosage: '1 kg/acre' },
    trichoderma: { brand: 'SPIC Tricho', composition: 'Trichoderma viride', dosage: '1 kg/acre' },
  },
};

// Pest and Disease Data by Crop
export const cropPests = {
  rice: [
    {
      name: { en: 'Stem Borer', ta: 'தண்டு துளைப்பான்' },
      symptoms: { 
        en: 'Dead hearts in vegetative stage, white ears at reproductive stage',
        ta: 'வளர்ச்சி நிலையில் இறந்த இதயங்கள், இனப்பெருக்க நிலையில் வெள்ளை காதுகள்'
      },
      chemical: {
        product: spicProducts.pesticides.chlorpyrifos,
        timing: 'At 30, 50 days after transplanting',
      },
      organic: {
        method: 'Release Trichogramma japonicum @ 5 cards/acre at 30, 37, 44 DAT. Install pheromone traps @ 5/acre',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Brown Plant Hopper (BPH)', ta: 'பழுப்பு இலைத் தத்துப்பூச்சி' },
      symptoms: { 
        en: 'Hopper burn - circular patches of dried plants, honey dew secretion',
        ta: 'ஹாப்பர் எரிப்பு - உலர்ந்த தாவரங்களின் வட்ட திட்டுகள், தேன் பனி சுரப்பு'
      },
      chemical: {
        product: spicProducts.pesticides.imidacloprid,
        timing: 'When ETL exceeds 10 hoppers/hill',
      },
      organic: {
        method: 'Drain water, apply neem oil 3% emulsion. Conserve spiders and mirid bugs.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Leaf Folder', ta: 'இலை சுருட்டுப்புழு' },
      symptoms: { 
        en: 'Longitudinal folding of leaves with silken threads, scraping of green tissue',
        ta: 'பட்டு நூல்களுடன் இலைகளின் நீளவாக்கில் மடிப்பு, பச்சை திசுக்களை சுரண்டுதல்'
      },
      chemical: {
        product: spicProducts.pesticides.chlorpyrifos,
        timing: 'When 2 damaged leaves/hill observed',
      },
      organic: {
        method: 'Release Trichogramma chilonis @ 5 cards/acre. Spray NSKE 5%',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Gall Midge', ta: 'முடிச்சு ஈ' },
      symptoms: { 
        en: 'Silver shoot or onion leaf symptom, tubular gall formation',
        ta: 'வெள்ளி தண்டு அல்லது வெங்காய இலை அறிகுறி, குழாய் வகை கட்டி உருவாக்கம்'
      },
      chemical: {
        product: spicProducts.pesticides.thiamethoxam,
        timing: 'Within 30 days of transplanting when 5% silver shoots observed',
      },
      organic: {
        method: 'Pull out and destroy affected tillers. Apply neem cake @ 60 kg/acre in main field.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Rice Hispa', ta: 'இஸ்பா வண்டு' },
      symptoms: { 
        en: 'White parallel streaks on leaves, tunneling by grubs',
        ta: 'இலைகளில் வெள்ளை இணை கோடுகள், புழுக்களால் சுரங்கம்'
      },
      chemical: {
        product: spicProducts.pesticides.chlorpyrifos,
        timing: 'When damage exceeds 25% leaf area',
      },
      organic: {
        method: 'Clip and destroy affected leaf tips. Avoid excess nitrogen. Spray NSKE 5%',
        product: spicProducts.pesticides.neem,
      },
    },
  ],
  maize: [
    {
      name: { en: 'Fall Armyworm', ta: 'இராணுவப் புழு' },
      symptoms: { 
        en: 'Irregular holes in leaves, windowing, whorl damage with frass',
        ta: 'இலைகளில் ஒழுங்கற்ற துளைகள், சாளரம், கழிவுகளுடன் சுருள் சேதம்'
      },
      chemical: {
        product: spicProducts.pesticides.thiamethoxam,
        timing: 'At 5% plant infestation, direct spray into whorl',
      },
      organic: {
        method: 'Release Trichogramma pretiosum @ 50,000/acre. Apply sand + lime (9:1) in whorl.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Stem Borer', ta: 'தண்டு துளைப்பான்' },
      symptoms: { 
        en: 'Dead heart, shot hole on leaves, stem breakage',
        ta: 'இறந்த இதயம், இலைகளில் துப்பாக்கி துளை, தண்டு உடைவு'
      },
      chemical: {
        product: spicProducts.pesticides.chlorpyrifos,
        timing: 'At 10% dead heart incidence',
      },
      organic: {
        method: 'Release Cotesia flavipes @ 2000/acre. Install pheromone traps @ 5/acre.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Aphids', ta: 'அசுவினி' },
      symptoms: { 
        en: 'Curling and yellowing of leaves, honey dew and sooty mold',
        ta: 'இலைகள் சுருளுதல் மற்றும் மஞ்சள் நிறமாதல், தேன் பனி மற்றும் சூட்டி பூஞ்சை'
      },
      chemical: {
        product: spicProducts.pesticides.imidacloprid,
        timing: 'When colonies are noticed on tender parts',
      },
      organic: {
        method: 'Spray neem oil 2% or NSKE 5%. Conserve coccinellids and syrphids.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Cob Borer', ta: 'கதிர் துளைப்பான்' },
      symptoms: { 
        en: 'Boring into developing cobs, frass at entry hole',
        ta: 'வளரும் கதிர்களில் துளைத்தல், நுழைவு துளையில் கழிவு'
      },
      chemical: {
        product: spicProducts.pesticides.chlorpyrifos,
        timing: 'At silking stage when pest noticed',
      },
      organic: {
        method: 'Apply Bacillus thuringiensis @ 400 g/acre. Use Trichogramma releases.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Pink Borer', ta: 'இளஞ்சிவப்பு துளைப்பான்' },
      symptoms: { 
        en: 'Dead heart, tunneling in stem with pink colored larva',
        ta: 'இறந்த இதயம், இளஞ்சிவப்பு நிற புழுவுடன் தண்டில் சுரங்கம்'
      },
      chemical: {
        product: spicProducts.pesticides.chlorpyrifos,
        timing: 'When 5% dead hearts observed',
      },
      organic: {
        method: 'Install light traps @ 1/acre. Release egg parasitoid Trichogramma chilonis.',
        product: spicProducts.pesticides.neem,
      },
    },
  ],
  cotton: [
    {
      name: { en: 'American Bollworm', ta: 'அமெரிக்க காய்ப்புழு' },
      symptoms: { 
        en: 'Circular bore holes in bolls, damaged bolls with frass',
        ta: 'காய்களில் வட்ட துளைகள், கழிவுகளுடன் சேதமடைந்த காய்கள்'
      },
      chemical: {
        product: spicProducts.pesticides.chlorpyrifos,
        timing: 'At 5% boll damage or 1 larva/plant',
      },
      organic: {
        method: 'Release Trichogramma chilonis @ 1.5 lakh/acre. Install pheromone traps @ 5/acre.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Pink Bollworm', ta: 'இளஞ்சிவப்பு காய்ப்புழு' },
      symptoms: { 
        en: 'Rosetted flowers, inter-locular burrowing in bolls',
        ta: 'ரோஜா போன்ற பூக்கள், காய்களில் அறைகளுக்கிடையே சுரங்கம்'
      },
      chemical: {
        product: spicProducts.pesticides.chlorpyrifos,
        timing: 'At ETL of 8% rosette flowers',
      },
      organic: {
        method: 'Mass trapping with pheromone traps @ 20/acre. Release Bracon hebetor.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Whitefly', ta: 'வெள்ளை ஈ' },
      symptoms: { 
        en: 'Yellowing, sticky leaves with sooty mold, leaf curl virus transmission',
        ta: 'மஞ்சள் நிறமாதல், சூட்டி பூஞ்சையுடன் ஒட்டும் இலைகள், இலை சுருள் வைரஸ் பரவல்'
      },
      chemical: {
        product: spicProducts.pesticides.imidacloprid,
        timing: 'When 5-10 adults/leaf observed',
      },
      organic: {
        method: 'Install yellow sticky traps @ 12/acre. Spray neem oil 2%.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Jassids', ta: 'தத்துப்பூச்சி' },
      symptoms: { 
        en: 'Leaf margin yellowing, hopper burn, downward curling',
        ta: 'இலை விளிம்பு மஞ்சள், ஹாப்பர் எரிப்பு, கீழ்நோக்கி சுருளுதல்'
      },
      chemical: {
        product: spicProducts.pesticides.imidacloprid,
        timing: 'At 2 jassids/leaf on average',
      },
      organic: {
        method: 'Spray neem seed kernel extract 5%. Conserve natural enemies.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Thrips', ta: 'இலைப்பேன்' },
      symptoms: { 
        en: 'Silvery patches on leaves, upward curling, stunted growth',
        ta: 'இலைகளில் வெள்ளித் திட்டுகள், மேல்நோக்கி சுருளுதல், குன்றிய வளர்ச்சி'
      },
      chemical: {
        product: spicProducts.pesticides.thiamethoxam,
        timing: 'At 10 thrips/leaf in seedling stage',
      },
      organic: {
        method: 'Spray neem oil 2%. Use blue sticky traps @ 12/acre.',
        product: spicProducts.pesticides.neem,
      },
    },
  ],
};

export const cropDiseases = {
  rice: [
    {
      name: { en: 'Blast', ta: 'நெல் கருகல்' },
      symptoms: { 
        en: 'Diamond shaped lesions on leaves with grey center and brown margin',
        ta: 'சாம்பல் மையம் மற்றும் பழுப்பு விளிம்புடன் இலைகளில் வைர வடிவ புண்கள்'
      },
      chemical: {
        product: spicProducts.fungicides.carbendazim,
        timing: 'At first appearance of symptoms, repeat after 10 days',
      },
      organic: {
        method: 'Seed treatment with Pseudomonas fluorescens @ 10 g/kg seed. Spray Trichoderma @ 4 g/L.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Sheath Blight', ta: 'உறை அழுகல்' },
      symptoms: { 
        en: 'Oval to irregular greenish grey lesions on leaf sheath near water level',
        ta: 'நீர் மட்டத்திற்கு அருகில் இலை உறையில் நீள்வட்ட முதல் ஒழுங்கற்ற பச்சை சாம்பல் புண்கள்'
      },
      chemical: {
        product: spicProducts.fungicides.carbendazim,
        timing: 'At boot leaf stage when symptoms appear',
      },
      organic: {
        method: 'Apply Trichoderma viride @ 2.5 kg/ha. Avoid excess nitrogen.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Brown Spot', ta: 'பழுப்பு புள்ளி' },
      symptoms: { 
        en: 'Oval brown spots with grey center on leaves, seed discoloration',
        ta: 'இலைகளில் சாம்பல் மையத்துடன் நீள்வட்ட பழுப்பு புள்ளிகள், விதை நிறமாற்றம்'
      },
      chemical: {
        product: spicProducts.fungicides.mancozeb,
        timing: 'Spray at tillering and panicle emergence',
      },
      organic: {
        method: 'Seed treatment with Trichoderma @ 4 g/kg. Apply potash fertilizer.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Bacterial Leaf Blight', ta: 'பாக்டீரிய இலை எரிப்பு' },
      symptoms: { 
        en: 'Water-soaked lesions on leaf margins turning yellow then white',
        ta: 'இலை விளிம்புகளில் நீர் தோய்ந்த புண்கள் மஞ்சள் பின் வெள்ளையாக மாறுதல்'
      },
      chemical: {
        product: spicProducts.fungicides.copper,
        timing: 'At first appearance, avoid nitrogen top dressing',
      },
      organic: {
        method: 'Drain fields, avoid movement between fields. Spray neem oil 2%.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'False Smut', ta: 'போலி கரிப்பூட்டை' },
      symptoms: { 
        en: 'Individual rice grains transformed into greenish spore balls',
        ta: 'தனிப்பட்ட நெல் தானியங்கள் பச்சை நிற வித்து பந்துகளாக மாற்றம்'
      },
      chemical: {
        product: spicProducts.fungicides.copper,
        timing: 'Spray at boot leaf stage (5-7 days before flowering)',
      },
      organic: {
        method: 'Remove and destroy affected panicles. Use disease-free seeds.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
  ],
  maize: [
    {
      name: { en: 'Turcicum Leaf Blight', ta: 'டர்சிக்கம் இலை எரிப்பு' },
      symptoms: { 
        en: 'Long elliptical greyish-green lesions on leaves',
        ta: 'இலைகளில் நீண்ட நீள்வட்ட சாம்பல்-பச்சை புண்கள்'
      },
      chemical: {
        product: spicProducts.fungicides.mancozeb,
        timing: 'At first appearance, repeat at 10-day intervals',
      },
      organic: {
        method: 'Crop rotation with non-host crops. Spray Trichoderma @ 4 g/L.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Maydis Leaf Blight', ta: 'மேடிஸ் இலை எரிப்பு' },
      symptoms: { 
        en: 'Small diamond shaped lesions parallel to leaf veins',
        ta: 'இலை நரம்புகளுக்கு இணையாக சிறிய வைர வடிவ புண்கள்'
      },
      chemical: {
        product: spicProducts.fungicides.mancozeb,
        timing: 'Spray when disease appears, repeat after 10 days',
      },
      organic: {
        method: 'Use resistant varieties. Apply compost to improve soil health.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Rust', ta: 'துரு' },
      symptoms: { 
        en: 'Reddish-brown pustules on leaves and stalks',
        ta: 'இலைகள் மற்றும் தண்டுகளில் செம்பழுப்பு கொப்புளங்கள்'
      },
      chemical: {
        product: spicProducts.fungicides.mancozeb,
        timing: 'At first appearance of pustules',
      },
      organic: {
        method: 'Remove affected plant parts. Spray neem oil 2%.',
        product: spicProducts.pesticides.neem,
      },
    },
    {
      name: { en: 'Charcoal Rot', ta: 'கரி அழுகல்' },
      symptoms: { 
        en: 'Shredded pith with charcoal colored sclerotia, premature drying',
        ta: 'கரி நிற ஸ்க்லீரோஷியாவுடன் துண்டாக்கப்பட்ட சூல், முன்கூட்டிய உலர்வு'
      },
      chemical: {
        product: spicProducts.fungicides.carbendazim,
        timing: 'Seed treatment + soil drenching at disease onset',
      },
      organic: {
        method: 'Apply Trichoderma to soil @ 2.5 kg/acre. Maintain proper irrigation.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Downy Mildew', ta: 'பஞ்சு பூஞ்சை' },
      symptoms: { 
        en: 'Yellow streaks on leaves, white cottony growth on underside',
        ta: 'இலைகளில் மஞ்சள் கோடுகள், கீழ் பக்கத்தில் வெள்ளை பஞ்சு வளர்ச்சி'
      },
      chemical: {
        product: spicProducts.fungicides.mancozeb,
        timing: 'Seed treatment + foliar spray at early stage',
      },
      organic: {
        method: 'Use disease-free seeds. Rogue out infected plants early.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
  ],
  cotton: [
    {
      name: { en: 'Bacterial Blight', ta: 'பாக்டீரிய எரிப்பு' },
      symptoms: { 
        en: 'Water-soaked angular lesions on leaves, black arm on stems',
        ta: 'இலைகளில் நீர் தோய்ந்த கோண புண்கள், தண்டுகளில் கருப்பு கை'
      },
      chemical: {
        product: spicProducts.fungicides.copper,
        timing: 'Spray at first appearance, repeat at 10-day intervals',
      },
      organic: {
        method: 'Use disease-free seeds. Apply Pseudomonas fluorescens @ 10 g/L.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Alternaria Leaf Spot', ta: 'ஆல்டர்னேரியா இலைப்புள்ளி' },
      symptoms: { 
        en: 'Circular brown spots with concentric rings on leaves',
        ta: 'இலைகளில் செறிவான வளையங்களுடன் வட்ட பழுப்பு புள்ளிகள்'
      },
      chemical: {
        product: spicProducts.fungicides.mancozeb,
        timing: 'At first appearance, repeat after 10 days',
      },
      organic: {
        method: 'Remove infected plant debris. Spray Trichoderma @ 4 g/L.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Root Rot', ta: 'வேர் அழுகல்' },
      symptoms: { 
        en: 'Wilting, yellowing, cortical root decay with brick red discoloration',
        ta: 'வாடுதல், மஞ்சள், செங்கல் சிவப்பு நிறமாற்றத்துடன் வேர் அழுகல்'
      },
      chemical: {
        product: spicProducts.fungicides.carbendazim,
        timing: 'Seed treatment + soil drenching at 30-45 DAS',
      },
      organic: {
        method: 'Apply Trichoderma @ 2.5 kg/acre in soil. Use neem cake @ 100 kg/acre.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Grey Mildew', ta: 'சாம்பல் பூஞ்சை' },
      symptoms: { 
        en: 'Angular whitish patches on lower leaf surface',
        ta: 'கீழ் இலை மேற்பரப்பில் கோண வெண்மையான திட்டுகள்'
      },
      chemical: {
        product: spicProducts.fungicides.carbendazim,
        timing: 'At disease onset, repeat after 15 days',
      },
      organic: {
        method: 'Provide adequate spacing. Spray wettable sulphur @ 2 g/L.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
    {
      name: { en: 'Fusarium Wilt', ta: 'பூசாரியம் வாடல்' },
      symptoms: { 
        en: 'Yellowing and wilting from lower leaves, vascular browning',
        ta: 'கீழ் இலைகளிலிருந்து மஞ்சள் மற்றும் வாடல், நாளக் பழுப்பு'
      },
      chemical: {
        product: spicProducts.fungicides.carbendazim,
        timing: 'Seed treatment + soil drenching',
      },
      organic: {
        method: 'Use resistant varieties. Deep ploughing in summer. Apply Trichoderma.',
        product: spicProducts.fungicides.trichoderma,
      },
    },
  ],
};

// Nutrient Deficiency Symptoms
export const nutrientDeficiencies = {
  nitrogen: {
    name: { en: 'Nitrogen (N)', ta: 'நைட்ரஜன்' },
    symptoms: { 
      en: 'Yellowing of older leaves (chlorosis), stunted growth, reduced tillering',
      ta: 'பழைய இலைகள் மஞ்சள் (குளோரோசிஸ்), குன்றிய வளர்ச்சி, குறைந்த கிளைப்பு'
    },
    management: {
      integrated: 'Apply Urea @ 2-3 kg/acre as foliar spray or top dressing',
      organic: 'Apply vermicompost @ 2 ton/acre, spray panchagavya 3%',
    },
    spicProduct: spicProducts.fertilizers.urea,
  },
  phosphorus: {
    name: { en: 'Phosphorus (P)', ta: 'பாஸ்பரஸ்' },
    symptoms: { 
      en: 'Purple/reddish coloration on leaves, delayed maturity, poor root development',
      ta: 'இலைகளில் ஊதா/சிவப்பு நிறம், தாமதமான முதிர்ச்சி, மோசமான வேர் வளர்ச்சி'
    },
    management: {
      integrated: 'Foliar spray of DAP @ 2% or SSP soil application',
      organic: 'Apply bone meal @ 100 kg/acre, PSB @ 2 kg/acre',
    },
    spicProduct: spicProducts.fertilizers.dap,
  },
  potassium: {
    name: { en: 'Potassium (K)', ta: 'பொட்டாசியம்' },
    symptoms: { 
      en: 'Marginal leaf scorch, weak stems, reduced disease resistance',
      ta: 'இலை விளிம்பு கருகல், பலவீனமான தண்டுகள், குறைந்த நோய் எதிர்ப்பு'
    },
    management: {
      integrated: 'Apply MOP @ 1% foliar spray or soil application',
      organic: 'Apply wood ash @ 100 kg/acre, banana pseudostem extract',
    },
    spicProduct: spicProducts.fertilizers.mop,
  },
  zinc: {
    name: { en: 'Zinc (Zn)', ta: 'துத்தநாகம்' },
    symptoms: { 
      en: 'Interveinal chlorosis, bronzing of leaves, khaira disease in rice',
      ta: 'இடை நரம்பு மஞ்சள், இலைகளின் வெண்கல நிறம், நெல்லில் கைரா நோய்'
    },
    management: {
      integrated: 'Foliar spray of ZnSO4 @ 0.5% or soil application @ 25 kg/acre',
      organic: 'Apply zinc enriched compost, spray zinc solubilizing bacteria',
    },
    spicProduct: spicProducts.micronutrients.zinc,
  },
  iron: {
    name: { en: 'Iron (Fe)', ta: 'இரும்பு' },
    symptoms: { 
      en: 'Interveinal chlorosis in young leaves, whitish-yellow leaves',
      ta: 'இளம் இலைகளில் இடை நரம்பு மஞ்சள், வெண்மை-மஞ்சள் இலைகள்'
    },
    management: {
      integrated: 'Foliar spray of FeSO4 @ 0.5% with lime',
      organic: 'Apply iron enriched FYM, cow dung slurry spray',
    },
    spicProduct: spicProducts.micronutrients.ferrous,
  },
  boron: {
    name: { en: 'Boron (B)', ta: 'போரான்' },
    symptoms: { 
      en: 'Hollow stem, thick and brittle leaves, poor grain setting',
      ta: 'உள்ளீடற்ற தண்டு, தடிமனான மற்றும் உடையக்கூடிய இலைகள், மோசமான தானிய அமைப்பு'
    },
    management: {
      integrated: 'Foliar spray of borax @ 0.2% or soil application @ 5 kg/acre',
      organic: 'Apply borax with organic manure',
    },
    spicProduct: spicProducts.micronutrients.boron,
  },
  calcium: {
    name: { en: 'Calcium (Ca)', ta: 'கால்சியம்' },
    symptoms: { 
      en: 'Distorted young leaves, tip burn, blossom end rot in fruits',
      ta: 'சிதைந்த இளம் இலைகள், நுனி எரிப்பு, பழங்களில் பூ முடிவு அழுகல்'
    },
    management: {
      integrated: 'Apply gypsum @ 200 kg/acre, calcium nitrate foliar spray',
      organic: 'Apply lime @ 100 kg/acre based on soil pH',
    },
    spicProduct: spicProducts.fertilizers.ssp,
  },
  magnesium: {
    name: { en: 'Magnesium (Mg)', ta: 'மெக்னீசியம்' },
    symptoms: { 
      en: 'Interveinal chlorosis starting from older leaves, reddish-purple tints',
      ta: 'பழைய இலைகளில் தொடங்கும் இடை நரம்பு மஞ்சள், சிவப்பு-ஊதா நிறம்'
    },
    management: {
      integrated: 'Foliar spray of MgSO4 @ 1%',
      organic: 'Apply dolomite @ 200 kg/acre',
    },
    spicProduct: spicProducts.fertilizers.complex,
  },
  sulphur: {
    name: { en: 'Sulphur (S)', ta: 'கந்தகம்' },
    symptoms: { 
      en: 'Uniform yellowing of young leaves, stunted growth',
      ta: 'இளம் இலைகளின் சீரான மஞ்சள், குன்றிய வளர்ச்சி'
    },
    management: {
      integrated: 'Apply gypsum @ 200 kg/acre or ammonium sulphate',
      organic: 'Apply sulphur enriched compost',
    },
    spicProduct: spicProducts.fertilizers.complex20,
  },
};

// STCR Based Fertilizer Recommendations (kg/acre for target yield)
export const stcrRecommendations = {
  rice: {
    targetYield: 25, // quintals/acre
    integrated: {
      nitrogen: { total: 50, basal: 20, firstTop: 15, secondTop: 15 },
      phosphorus: { total: 25, basal: 25 },
      potassium: { total: 25, basal: 12.5, firstTop: 12.5 },
    },
    organic: {
      fym: 5000, // kg/acre
      vermicompost: 2000,
      neemCake: 100,
      greenManure: 2500,
    },
  },
  maize: {
    targetYield: 30,
    integrated: {
      nitrogen: { total: 60, basal: 20, firstTop: 20, secondTop: 20 },
      phosphorus: { total: 30, basal: 30 },
      potassium: { total: 20, basal: 10, firstTop: 10 },
    },
    organic: {
      fym: 5000,
      vermicompost: 2000,
      neemCake: 80,
      greenManure: 2000,
    },
  },
  cotton: {
    targetYield: 12, // quintals lint/acre
    integrated: {
      nitrogen: { total: 40, basal: 10, firstTop: 15, secondTop: 15 },
      phosphorus: { total: 20, basal: 20 },
      potassium: { total: 20, basal: 10, firstTop: 10 },
    },
    organic: {
      fym: 4000,
      vermicompost: 1500,
      neemCake: 100,
      greenManure: 2000,
    },
  },
};

// Economics Data
export const economicsData = {
  rice: {
    integrated: {
      seedCost: 1500,
      fertilizerCost: 6000,
      pesticideCost: 3000,
      laborCost: 15000,
      irrigationCost: 3500,
      miscCost: 2000,
      yieldPerAcre: 25, // quintals
      pricePerQuintal: 2200,
    },
    organic: {
      seedCost: 1800,
      fertilizerCost: 4000,
      pesticideCost: 2000,
      laborCost: 18000,
      irrigationCost: 3500,
      miscCost: 2500,
      yieldPerAcre: 22,
      pricePerQuintal: 2800, // Premium price
    },
  },
  maize: {
    integrated: {
      seedCost: 2500,
      fertilizerCost: 5000,
      pesticideCost: 2500,
      laborCost: 10000,
      irrigationCost: 2500,
      miscCost: 1500,
      yieldPerAcre: 30,
      pricePerQuintal: 1800,
    },
    organic: {
      seedCost: 3000,
      fertilizerCost: 3500,
      pesticideCost: 1500,
      laborCost: 12000,
      irrigationCost: 2500,
      miscCost: 2000,
      yieldPerAcre: 25,
      pricePerQuintal: 2300,
    },
  },
  cotton: {
    integrated: {
      seedCost: 3000,
      fertilizerCost: 7000,
      pesticideCost: 5000,
      laborCost: 18000,
      irrigationCost: 4000,
      miscCost: 3000,
      yieldPerAcre: 12,
      pricePerQuintal: 6000,
    },
    organic: {
      seedCost: 3500,
      fertilizerCost: 5000,
      pesticideCost: 3500,
      laborCost: 22000,
      irrigationCost: 4000,
      miscCost: 3500,
      yieldPerAcre: 10,
      pricePerQuintal: 8000,
    },
  },
};
