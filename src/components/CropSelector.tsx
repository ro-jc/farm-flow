import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan, CropType } from '@/contexts/FarmPlanContext';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export const CropSelector = () => {
  const { t, language } = useLanguage();
  const { farmPlan, updateFarmPlan } = useFarmPlan();

  const crops: { id: CropType; image: string; color: string }[] = [
    { id: 'rice', image: '🌾', color: 'farm-wheat' },
    { id: 'maize', image: '🌽', color: 'farm-sun' },
    { id: 'cotton', image: '☁️', color: 'farm-sky' },
  ];

  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold text-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
        {t('selectCrop')}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {crops.map((crop) => {
          const isSelected = farmPlan.crop === crop.id;
          
          return (
            <button
              key={crop.id}
              onClick={() => updateFarmPlan({ crop: crop.id })}
              className={cn(
                "relative flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300",
                isSelected 
                  ? "border-farm-green bg-farm-green/5 shadow-lg scale-105" 
                  : "border-border hover:border-muted-foreground/30 hover:bg-muted/50"
              )}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-farm-green flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              
              <span className="text-5xl mb-4">{crop.image}</span>
              
              <h4 className={`text-lg font-semibold ${language === 'ta' ? 'font-tamil' : ''}`}>
                {t(crop.id)}
              </h4>
            </button>
          );
        })}
      </div>
    </div>
  );
};
