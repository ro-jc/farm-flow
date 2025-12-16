import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { stcrRecommendations, spicProducts, fertilizerSources } from '@/lib/cropData';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Package, Beaker, Leaf, Sparkles, Bug } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FertilizerPlan = () => {
  const { language } = useLanguage();
  const { farmPlan } = useFarmPlan();
  const [expandedSections, setExpandedSections] = useState<string[]>(['primary']);

  if (!farmPlan.crop) return null;

  const stcr = stcrRecommendations[farmPlan.crop];
  const area = farmPlan.areaUnit === 'hectares' ? farmPlan.farmArea * 2.471 : farmPlan.farmArea;
  const isOrganic = farmPlan.practice === 'organic';

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  // Calculate fertilizer quantities in kg and bags
  const calculateFertilizer = (nutrientKg: number, composition: number) => {
    const totalKg = (nutrientKg / (composition / 100)) * area;
    const bags = totalKg / 50; // Standard 50kg bag
    return { kg: totalKg.toFixed(1), bags: bags.toFixed(1) };
  };

  const sections = isOrganic ? [
    {
      id: 'organic',
      title: language === 'en' ? 'Organic Fertilizers' : 'இயற்கை உரங்கள்',
      icon: Leaf,
      color: 'farm-organic',
      items: [
        { name: 'Farm Yard Manure (FYM)', qty: `${stcr.organic.fym * area} kg`, application: language === 'en' ? 'Basal application during land preparation' : 'நிலத்தை தயாரிக்கும் போது அடி உரமாக' },
        { name: 'Vermicompost', qty: `${stcr.organic.vermicompost * area} kg`, application: language === 'en' ? 'Basal + 30 DAS top dressing' : 'அடி உரம் + 30 நாள் மேல் உரம்' },
        { name: 'Neem Cake', qty: `${stcr.organic.neemCake * area} kg`, application: language === 'en' ? 'Mix with soil before sowing' : 'விதைப்பதற்கு முன் மண்ணுடன் கலக்கவும்' },
        { name: 'Green Manure', qty: `${stcr.organic.greenManure * area} kg`, application: language === 'en' ? 'Incorporate 15 days before sowing' : 'விதைப்பதற்கு 15 நாட்களுக்கு முன் இணைக்கவும்' },
      ]
    },
    {
      id: 'bio',
      title: language === 'en' ? 'Bio-fertilizers' : 'உயிர் உரங்கள்',
      icon: Bug,
      color: 'farm-green',
      items: [
        { name: spicProducts.bioFertilizers.azospirillum.brand, composition: spicProducts.bioFertilizers.azospirillum.composition, qty: `${(200 * area / 1000).toFixed(1)} kg`, application: language === 'en' ? 'Seed treatment + soil application' : 'விதை நேர்த்தி + மண் பயன்பாடு' },
        { name: spicProducts.bioFertilizers.phosphobacteria.brand, composition: spicProducts.bioFertilizers.phosphobacteria.composition, qty: `${(200 * area / 1000).toFixed(1)} kg`, application: language === 'en' ? 'Soil application at sowing' : 'விதைப்பின் போது மண் பயன்பாடு' },
        { name: spicProducts.bioFertilizers.psb.brand, composition: spicProducts.bioFertilizers.psb.composition, qty: `${(200 * area / 1000).toFixed(1)} kg`, application: language === 'en' ? 'Seedling root dip' : 'நாற்று வேர் நனைப்பு' },
      ]
    },
  ] : [
    {
      id: 'primary',
      title: language === 'en' ? 'Primary Nutrients (N, P, K)' : 'முதன்மை ஊட்டச்சத்துக்கள் (N, P, K)',
      icon: Package,
      color: 'farm-green',
      items: [
        { 
          name: spicProducts.fertilizers.urea.brand, 
          composition: spicProducts.fertilizers.urea.composition,
          ...calculateFertilizer(stcr.integrated.nitrogen.total, 46),
          schedule: [
            { time: language === 'en' ? 'Basal' : 'அடி உரம்', qty: `${calculateFertilizer(stcr.integrated.nitrogen.basal, 46).kg} kg (${calculateFertilizer(stcr.integrated.nitrogen.basal, 46).bags} bags)` },
            { time: language === 'en' ? '1st Top (25 DAS)' : '1வது மேல் உரம்', qty: `${calculateFertilizer(stcr.integrated.nitrogen.firstTop, 46).kg} kg (${calculateFertilizer(stcr.integrated.nitrogen.firstTop, 46).bags} bags)` },
            { time: language === 'en' ? '2nd Top (45 DAS)' : '2வது மேல் உரம்', qty: `${calculateFertilizer(stcr.integrated.nitrogen.secondTop, 46).kg} kg (${calculateFertilizer(stcr.integrated.nitrogen.secondTop, 46).bags} bags)` },
          ],
          method: language === 'en' ? 'Broadcasting' : 'தூவுதல்'
        },
        { 
          name: spicProducts.fertilizers.dap.brand, 
          composition: spicProducts.fertilizers.dap.composition,
          ...calculateFertilizer(stcr.integrated.phosphorus.total, 46),
          schedule: [
            { time: language === 'en' ? 'Basal' : 'அடி உரம்', qty: `${calculateFertilizer(stcr.integrated.phosphorus.basal, 46).kg} kg (${calculateFertilizer(stcr.integrated.phosphorus.basal, 46).bags} bags)` },
          ],
          method: language === 'en' ? 'Band Placement' : 'வரிசை இடுதல்'
        },
        { 
          name: spicProducts.fertilizers.mop.brand, 
          composition: spicProducts.fertilizers.mop.composition,
          ...calculateFertilizer(stcr.integrated.potassium.total, 60),
          schedule: [
            { time: language === 'en' ? 'Basal' : 'அடி உரம்', qty: `${calculateFertilizer(stcr.integrated.potassium.basal, 60).kg} kg (${calculateFertilizer(stcr.integrated.potassium.basal, 60).bags} bags)` },
            { time: language === 'en' ? '1st Top (25 DAS)' : '1வது மேல் உரம்', qty: `${calculateFertilizer(stcr.integrated.potassium.firstTop, 60).kg} kg (${calculateFertilizer(stcr.integrated.potassium.firstTop, 60).bags} bags)` },
          ],
          method: language === 'en' ? 'Broadcasting' : 'தூவுதல்'
        },
      ]
    },
    {
      id: 'secondary',
      title: language === 'en' ? 'Secondary Nutrients (Ca, Mg, S)' : 'இரண்டாம் நிலை ஊட்டச்சத்துக்கள்',
      icon: Beaker,
      color: 'farm-wheat',
      items: [
        { name: spicProducts.fertilizers.ssp.brand, composition: spicProducts.fertilizers.ssp.composition, qty: `${(50 * area).toFixed(0)} kg`, application: language === 'en' ? 'Basal application' : 'அடி உரமாக' },
        { name: 'Gypsum (CaSO₄)', composition: '23% Ca, 18% S', qty: `${(100 * area).toFixed(0)} kg`, application: language === 'en' ? 'For acidic soils' : 'அமில மண்ணுக்கு' },
      ]
    },
    {
      id: 'micro',
      title: language === 'en' ? 'Micronutrients' : 'நுண் ஊட்டச்சத்துக்கள்',
      icon: Sparkles,
      color: 'farm-sky',
      items: [
        { name: spicProducts.micronutrients.zinc.brand, composition: spicProducts.micronutrients.zinc.composition, qty: `${(25 * area).toFixed(0)} kg`, application: language === 'en' ? 'Soil application or 0.5% foliar spray' : 'மண் பயன்பாடு அல்லது 0.5% இலை தெளிப்பு' },
        { name: spicProducts.micronutrients.ferrous.brand, composition: spicProducts.micronutrients.ferrous.composition, qty: `${(10 * area).toFixed(0)} kg`, application: language === 'en' ? '0.5% foliar spray with lime' : '0.5% இலை தெளிப்பு சுண்ணாம்புடன்' },
        { name: spicProducts.micronutrients.boron.brand, composition: spicProducts.micronutrients.boron.composition, qty: `${(5 * area).toFixed(0)} kg`, application: language === 'en' ? '0.2% foliar spray at flowering' : '0.2% இலை தெளிப்பு பூக்கும் நேரத்தில்' },
      ]
    },
    {
      id: 'nano',
      title: language === 'en' ? 'Nano Fertilizers' : 'நானோ உரங்கள்',
      icon: Sparkles,
      color: 'farm-organic',
      items: [
        { name: spicProducts.nano.nanoUrea.brand, composition: spicProducts.nano.nanoUrea.composition, qty: `${(500 * area / 1000).toFixed(1)} L`, application: language === 'en' ? 'Foliar spray at tillering & flowering' : 'கிளைப்பு & பூக்கும் நேரத்தில் இலை தெளிப்பு' },
        { name: spicProducts.nano.nanoDap.brand, composition: spicProducts.nano.nanoDap.composition, qty: `${(500 * area / 1000).toFixed(1)} L`, application: language === 'en' ? 'Foliar spray at vegetative stage' : 'வளர்ச்சி நிலையில் இலை தெளிப்பு' },
      ]
    },
    {
      id: 'bio',
      title: language === 'en' ? 'Bio-fertilizers' : 'உயிர் உரங்கள்',
      icon: Bug,
      color: 'farm-earth',
      items: [
        { name: spicProducts.bioFertilizers.azospirillum.brand, composition: spicProducts.bioFertilizers.azospirillum.composition, qty: `${(200 * area / 1000).toFixed(1)} kg`, application: language === 'en' ? 'Seed treatment @ 25g/kg seed' : 'விதை நேர்த்தி @ 25g/kg விதை' },
        { name: spicProducts.bioFertilizers.phosphobacteria.brand, composition: spicProducts.bioFertilizers.phosphobacteria.composition, qty: `${(200 * area / 1000).toFixed(1)} kg`, application: language === 'en' ? 'Soil application before sowing' : 'விதைப்பதற்கு முன் மண் பயன்பாடு' },
      ]
    },
  ];

  return (
    <div className="farm-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${language === 'ta' ? 'font-tamil' : ''}`}>
          {language === 'en' ? 'STCR Based Fertilizer Plan' : 'STCR அடிப்படையிலான உர திட்டம்'}
        </h3>
        <span className="text-sm px-3 py-1 rounded-full bg-farm-green/10 text-farm-green font-medium">
          {isOrganic ? (language === 'en' ? 'Organic' : 'இயற்கை') : (language === 'en' ? 'Integrated' : 'ஒருங்கிணைந்த')}
        </span>
      </div>

      <div className="space-y-4">
        {sections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          const Icon = section.icon;
          
          return (
            <div key={section.id} className="border border-border rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-lg bg-${section.color}/10 flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 text-${section.color}`} />
                  </div>
                  <span className={`font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>{section.title}</span>
                </div>
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {isExpanded && (
                <div className="p-4 pt-0 space-y-4 animate-slide-up">
                  {section.items.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/30 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium text-farm-green">{item.name}</div>
                          {'composition' in item && (
                            <div className="text-xs text-muted-foreground">{item.composition}</div>
                          )}
                        </div>
                        <div className="text-right">
                          {'kg' in item ? (
                            <>
                              <div className="font-bold">{item.kg} kg</div>
                              <div className="text-sm text-muted-foreground">{item.bags} {language === 'en' ? 'bags' : 'மூட்டைகள்'}</div>
                            </>
                          ) : (
                            <div className="font-bold">{item.qty}</div>
                          )}
                        </div>
                      </div>

                      {'schedule' in item && item.schedule && (
                        <div className="space-y-2 mt-3 pt-3 border-t border-border/50">
                          <div className={`text-xs font-medium text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
                            {language === 'en' ? 'Application Schedule:' : 'பயன்பாட்டு அட்டவணை:'}
                          </div>
                          {item.schedule.map((s, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                              <span className={language === 'ta' ? 'font-tamil' : ''}>{s.time}</span>
                              <span className="font-medium">{s.qty}</span>
                            </div>
                          ))}
                          {'method' in item && (
                            <div className={`text-xs text-muted-foreground mt-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
                              {language === 'en' ? 'Method:' : 'முறை:'} {item.method}
                            </div>
                          )}
                        </div>
                      )}

                      {'application' in item && (
                        <div className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
                          {item.application}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
