export type Language = 'en' | 'ta';

export const translations = {
  en: {
    // Header
    appName: 'Farm Flow',
    slogan: 'Plan the Season. Own the Harvest.',
    
    // Navigation
    home: 'Home',
    planner: 'Crop Planner',
    about: 'About',
    
    // Practice Selection
    selectPractice: 'Select Farming Practice',
    integrated: 'Integrated Farming',
    organic: 'Organic Farming',
    integratedDesc: 'Balanced approach combining modern and traditional methods',
    organicDesc: 'Natural farming without synthetic chemicals',
    
    // Crop Selection
    selectCrop: 'Select Crop',
    rice: 'Rice (நெல்)',
    maize: 'Maize (மக்காச்சோளம்)',
    cotton: 'Cotton (பருத்தி)',
    selectVariety: 'Select Variety',
    chooseVariety: 'Choose variety',
    variety: 'Variety',
    
    // Region
    selectRegion: 'Select Region',
    district: 'District',
    
    // Season
    selectSeason: 'Select Season',
    kharif: 'Kharif (June - October)',
    rabi: 'Rabi (October - March)',
    summer: 'Summer (March - June)',
    
    // Sowing Date
    sowingDate: 'Sowing Date',
    offSeasonWarning: 'Off-season crop selected! See management recommendations below.',
    
    // Farm Area
    farmArea: 'Farm Area',
    acres: 'Acres',
    hectares: 'Hectares',
    
    // Soil Health Card
    soilHealthCard: 'Soil Health Card',
    soilType: 'Soil Type',
    soilGroup: 'Soil Group',
    irrigationSystem: 'Irrigation System',
    soilPH: 'Soil pH',
    soilOrganicCarbon: 'Soil Organic Carbon (%)',
    availableN: 'Available Nitrogen (kg/ha)',
    availableP: 'Available Phosphorus (kg/ha)',
    availableK: 'Available Potassium (kg/ha)',
    
    // Soil Types
    clay: 'Clay',
    sandy: 'Sandy',
    loamy: 'Loamy',
    clayLoam: 'Clay Loam',
    sandyLoam: 'Sandy Loam',
    black: 'Black Cotton Soil',
    red: 'Red Soil',
    alluvial: 'Alluvial',
    
    // Irrigation Systems
    drip: 'Drip Irrigation',
    sprinkler: 'Sprinkler',
    flood: 'Flood/Basin',
    furrow: 'Furrow',
    rainfed: 'Rainfed',
    
    // Fertilizer Sources
    fertilizerSource: 'Fertilizer Sources',
    nSource: 'Nitrogen Source',
    pSource: 'Phosphorus Source',
    kSource: 'Potassium Source',
    
    // Generate Plan
    generatePlan: 'Generate Farm Plan',
    regenerate: 'Regenerate Plan',
    
    // Plan Sections
    farmPlan: 'Your Farm Plan',
    weather: 'Live Weather',
    irrigationSchedule: 'Irrigation Schedule',
    economics: 'Economics & Yield',
    cropCalendar: 'Crop Calendar',
    fertilizerPlan: 'Fertilizer Plan',
    pestManagement: 'Pest Management',
    diseaseManagement: 'Disease Management',
    nutrientDeficiency: 'Nutrient Deficiency',
    
    // Economics
    expectedYield: 'Expected Yield',
    expectedIncome: 'Expected Income',
    totalInvestment: 'Total Investment',
    bcRatio: 'B:C Ratio',
    seedCost: 'Seed Cost',
    fertilizerCost: 'Fertilizer Cost',
    pesticideCost: 'Pesticide Cost',
    laborCost: 'Labor Cost',
    irrigationCost: 'Irrigation Cost',
    miscCost: 'Miscellaneous',
    
    // Fertilizer Plan
    stcrApproach: 'STCR Based Recommendation',
    applicationMethod: 'Application Method',
    broadcast: 'Broadcasting',
    bandPlacement: 'Band Placement',
    foliar: 'Foliar Spray',
    fertigation: 'Fertigation',
    bags: 'bags',
    kg: 'kg',
    
    // Nutrients
    primaryNutrients: 'Primary Nutrients (N, P, K)',
    secondaryNutrients: 'Secondary Nutrients (Ca, Mg, S)',
    microNutrients: 'Micronutrients (Zn, Fe, Mn, Cu, B)',
    organicFertilizer: 'Organic Fertilizers',
    bioFertilizer: 'Bio-fertilizers',
    nanoFertilizer: 'Nano Fertilizers',
    
    // Calendar
    week: 'Week',
    activity: 'Activity',
    
    // Management
    chemicalManagement: 'Chemical Management',
    organicManagement: 'Organic Management',
    symptoms: 'Symptoms',
    control: 'Control Measures',
    
    // SPIC Products
    spicProduct: 'SPIC Product',
    composition: 'Composition',
    dosage: 'Dosage',
    applicationTime: 'Application Time',
    
    // Footer
    dataSource: 'Data sourced from TNAU Agritech Portal & SPIC',
    
    // Units
    qtlPerAcre: 'qtl/acre',
    kgPerAcre: 'kg/acre',
    rsPerAcre: '₹/acre',
    low: 'Low',
    medium: 'Good',
    high: 'High',
    rockPhosphateAlkalineWarning: 'Rock Phosphate is not recommended for alkaline soils (pH > 7.2).',
    
    // Buttons
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    viewDetails: 'View Details',
    hideDetails: 'Hide Details',
  },
  ta: {
    // Header
    appName: 'பண்ணை ஓட்டம்',
    slogan: 'பருவத்தை திட்டமிடு. அறுவடையை சொந்தமாக்கு.',
    
    // Navigation
    home: 'முகப்பு',
    planner: 'பயிர் திட்டமிடல்',
    about: 'பற்றி',
    
    // Practice Selection
    selectPractice: 'விவசாய முறையை தேர்வு செய்யவும்',
    integrated: 'ஒருங்கிணைந்த விவசாயம்',
    organic: 'இயற்கை விவசாயம்',
    integratedDesc: 'நவீன மற்றும் பாரம்பரிய முறைகளை இணைக்கும் சமநிலை அணுகுமுறை',
    organicDesc: 'செயற்கை இரசாயனங்கள் இல்லாத இயற்கை விவசாயம்',
    
    // Crop Selection
    selectCrop: 'பயிரை தேர்வு செய்யவும்',
    rice: 'நெல்',
    maize: 'மக்காச்சோளம்',
    cotton: 'பருத்தி',
    selectVariety: 'விதையை தேர்வு செய்யவும்',
    chooseVariety: 'விதையை தேர்ந்தெடுக்கவும்',
    variety: 'விதை',
    
    // Region
    selectRegion: 'பகுதியை தேர்வு செய்யவும்',
    district: 'மாவட்டம்',
    
    // Season
    selectSeason: 'பருவத்தை தேர்வு செய்யவும்',
    kharif: 'காரிஃப் (ஜூன் - அக்டோபர்)',
    rabi: 'ரபி (அக்டோபர் - மார்ச்)',
    summer: 'கோடை (மார்ச் - ஜூன்)',
    
    // Sowing Date
    sowingDate: 'விதைப்பு தேதி',
    offSeasonWarning: 'பருவத்திற்கு புறம்பான பயிர் தேர்வு! கீழே மேலாண்மை பரிந்துரைகளைப் பார்க்கவும்.',
    
    // Farm Area
    farmArea: 'பண்ணை பரப்பளவு',
    acres: 'ஏக்கர்',
    hectares: 'ஹெக்டேர்',
    
    // Soil Health Card
    soilHealthCard: 'மண் ஆரோக்கிய அட்டை',
    soilType: 'மண் வகை',
    soilGroup: 'மண் குழு',
    irrigationSystem: 'நீர்ப்பாசன முறை',
    soilPH: 'மண் pH',
    soilOrganicCarbon: 'மண் கார்பன் (%)',
    availableN: 'கிடைக்கும் நைட்ரஜன் (கிகி/ஹெ)',
    availableP: 'கிடைக்கும் பாஸ்பரஸ் (கிகி/ஹெ)',
    availableK: 'கிடைக்கும் பொட்டாசியம் (கிகி/ஹெ)',
    
    // Soil Types
    clay: 'களிமண்',
    sandy: 'மணல் மண்',
    loamy: 'வண்டல் மண்',
    clayLoam: 'களி வண்டல்',
    sandyLoam: 'மணல் வண்டல்',
    black: 'கருப்பு பருத்தி மண்',
    red: 'சிவப்பு மண்',
    alluvial: 'படிவு மண்',
    
    // Irrigation Systems
    drip: 'சொட்டு நீர்ப்பாசனம்',
    sprinkler: 'தெளிப்பான்',
    flood: 'வெள்ளப்பாசனம்',
    furrow: 'வாய்க்கால் பாசனம்',
    rainfed: 'மழை சார்ந்த',
    
    // Fertilizer Sources
    fertilizerSource: 'உர மூலங்கள்',
    nSource: 'நைட்ரஜன் மூலம்',
    pSource: 'பாஸ்பரஸ் மூலம்',
    kSource: 'பொட்டாசியம் மூலம்',
    
    // Generate Plan
    generatePlan: 'பண்ணை திட்டத்தை உருவாக்கு',
    regenerate: 'மீண்டும் உருவாக்கு',
    
    // Plan Sections
    farmPlan: 'உங்கள் பண்ணை திட்டம்',
    weather: 'நேரடி வானிலை',
    irrigationSchedule: 'நீர்ப்பாசன அட்டவணை',
    economics: 'பொருளாதாரம் & மகசூல்',
    cropCalendar: 'பயிர் நாட்காட்டி',
    fertilizerPlan: 'உர திட்டம்',
    pestManagement: 'பூச்சி மேலாண்மை',
    diseaseManagement: 'நோய் மேலாண்மை',
    nutrientDeficiency: 'ஊட்டச்சத்து குறைபாடு',
    
    // Economics
    expectedYield: 'எதிர்பார்க்கப்படும் மகசூல்',
    expectedIncome: 'எதிர்பார்க்கப்படும் வருமானம்',
    totalInvestment: 'மொத்த முதலீடு',
    bcRatio: 'B:C விகிதம்',
    seedCost: 'விதை செலவு',
    fertilizerCost: 'உர செலவு',
    pesticideCost: 'பூச்சிக்கொல்லி செலவு',
    laborCost: 'கூலி செலவு',
    irrigationCost: 'நீர்ப்பாசன செலவு',
    miscCost: 'இதர செலவுகள்',
    
    // Fertilizer Plan
    stcrApproach: 'STCR அடிப்படையிலான பரிந்துரை',
    applicationMethod: 'பயன்படுத்தும் முறை',
    broadcast: 'தூவுதல்',
    bandPlacement: 'வரிசை இடுதல்',
    foliar: 'இலை வழி தெளிப்பு',
    fertigation: 'நீர்ப்பாசன உரமிடல்',
    bags: 'மூட்டைகள்',
    kg: 'கிகி',
    
    // Nutrients
    primaryNutrients: 'முதன்மை ஊட்டச்சத்துக்கள் (N, P, K)',
    secondaryNutrients: 'இரண்டாம் நிலை ஊட்டச்சத்துக்கள் (Ca, Mg, S)',
    microNutrients: 'நுண் ஊட்டச்சத்துக்கள் (Zn, Fe, Mn, Cu, B)',
    organicFertilizer: 'இயற்கை உரங்கள்',
    bioFertilizer: 'உயிர் உரங்கள்',
    nanoFertilizer: 'நானோ உரங்கள்',
    
    // Calendar
    week: 'வாரம்',
    activity: 'செயல்பாடு',
    
    // Management
    chemicalManagement: 'இரசாயன மேலாண்மை',
    organicManagement: 'இயற்கை மேலாண்மை',
    symptoms: 'அறிகுறிகள்',
    control: 'கட்டுப்பாட்டு நடவடிக்கைகள்',
    
    // SPIC Products
    spicProduct: 'SPIC தயாரிப்பு',
    composition: 'கலவை',
    dosage: 'அளவு',
    applicationTime: 'பயன்படுத்தும் நேரம்',
    
    // Footer
    dataSource: 'தரவு TNAU வேளாண்மை போர்டல் & SPIC இலிருந்து பெறப்பட்டது',
    
    // Units
    qtlPerAcre: 'குவிண்டால்/ஏக்கர்',
    kgPerAcre: 'கிகி/ஏக்கர்',
    rsPerAcre: '₹/ஏக்கர்',
    low: 'குறைவு',
    medium: 'நன்று',
    high: 'அதிகம்',
    rockPhosphateAlkalineWarning: 'மண் ஏற்கனவே ஆல்கைலின் (pH > 7.2) என்பதால் Rock Phosphate பரிந்துரைக்கப்படவில்லை.',
    
    // Buttons
    next: 'அடுத்து',
    previous: 'முந்தைய',
    submit: 'சமர்ப்பி',
    viewDetails: 'விவரங்களைக் காண்க',
    hideDetails: 'விவரங்களை மறை',
  },
};

export const t = (key: keyof typeof translations.en, lang: Language): string => {
  return translations[lang][key] || translations.en[key] || key;
};
