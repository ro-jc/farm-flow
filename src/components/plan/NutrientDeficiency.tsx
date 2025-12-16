import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { nutrientDeficiencies } from '@/lib/cropData';
import { AlertCircle, ChevronDown, ChevronUp, Leaf, Beaker } from 'lucide-react';

export const NutrientDeficiency = () => {
  const { language } = useLanguage();
  const { farmPlan } = useFarmPlan();
  const [expandedNutrient, setExpandedNutrient] = useState<string | null>(null);

  const isOrganic = farmPlan.practice === 'organic';

  const nutrients = Object.entries(nutrientDeficiencies);

  return (
    <div className="farm-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-farm-wheat/10 flex items-center justify-center">
          <AlertCircle className="h-5 w-5 text-farm-wheat" />
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${language === 'ta' ? 'font-tamil' : ''}`}>
            {language === 'en' ? 'Nutrient Deficiency Guide' : 'ஊட்டச்சத்து குறைபாடு வழிகாட்டி'}
          </h3>
          <p className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
            {language === 'en' ? 'Identify symptoms and take corrective action' : 'அறிகுறிகளை கண்டறிந்து திருத்தும் நடவடிக்கை எடுக்கவும்'}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {nutrients.map(([key, nutrient]) => (
          <div key={key} className="border border-border rounded-xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
              onClick={() => setExpandedNutrient(expandedNutrient === key ? null : key)}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-farm-green/10 flex items-center justify-center">
                  <Beaker className="h-4 w-4 text-farm-green" />
                </div>
                <span className={`font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                  {language === 'ta' ? nutrient.name.ta : nutrient.name.en}
                </span>
              </div>
              {expandedNutrient === key ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {expandedNutrient === key && (
              <div className="p-4 pt-0 space-y-4 animate-slide-up">
                {/* Symptoms */}
                <div className="p-3 rounded-lg bg-farm-wheat/5 border border-farm-wheat/20">
                  <div className={`text-xs font-medium text-farm-wheat mb-1 ${language === 'ta' ? 'font-tamil' : ''}`}>
                    {language === 'en' ? 'Deficiency Symptoms' : 'குறைபாட்டு அறிகுறிகள்'}
                  </div>
                  <p className={`text-sm ${language === 'ta' ? 'font-tamil' : ''}`}>
                    {language === 'ta' ? nutrient.symptoms.ta : nutrient.symptoms.en}
                  </p>
                </div>

                {/* Management */}
                <div className="p-4 rounded-lg bg-farm-green/5 border border-farm-green/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf className="h-4 w-4 text-farm-green" />
                    <span className={`text-sm font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                      {language === 'en' ? 'Corrective Measures' : 'திருத்தும் நடவடிக்கைகள்'}
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${language === 'ta' ? 'font-tamil' : ''}`}>
                    {isOrganic ? nutrient.management.organic : nutrient.management.integrated}
                  </p>
                  
                  {nutrient.spicProduct && (
                    <div className="p-3 rounded bg-muted/50">
                      <div className="text-xs text-muted-foreground mb-1">SPIC Recommended Product:</div>
                      <div className="font-medium text-farm-green">{nutrient.spicProduct.brand}</div>
                      <div className="text-xs text-muted-foreground">{nutrient.spicProduct.composition}</div>
                      <div className="text-xs mt-1">Dosage: {nutrient.spicProduct.dosage}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
