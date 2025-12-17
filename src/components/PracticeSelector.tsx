import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan, FarmingPractice } from '@/contexts/FarmPlanContext';
import { cn } from '@/lib/utils';
import { Leaf, Sprout, Check } from 'lucide-react';

export const PracticeSelector = () => {
  const { t, language } = useLanguage();
  const { farmPlan, updateFarmPlan } = useFarmPlan();

  const practices: { id: FarmingPractice; icon: typeof Leaf; color: string }[] = [
    { id: 'integrated', icon: Sprout, color: 'farm-green' },
    { id: 'organic', icon: Leaf, color: 'farm-organic' },
  ];

  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold text-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
        {t('selectPractice')}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {practices.map((practice) => {
          const isSelected = farmPlan.practice === practice.id;
          const Icon = practice.icon;
          
          return (
            <button
              key={practice.id}
              onClick={() => updateFarmPlan({ practice: practice.id })}
              className={cn(
                "relative flex flex-col items-start p-6 rounded-2xl border-2 transition-all duration-300 text-left",
                isSelected
                  ? `border-farm-green bg-farm-green/5 shadow-lg`
                  : "border-border hover:border-muted-foreground/30 hover:bg-muted/50"
              )}
            >
              {isSelected && (
                <div className={`absolute top-4 right-4 h-6 w-6 rounded-full bg-farm-green flex items-center justify-center`}>
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              
              <div className={cn(
                "h-12 w-12 rounded-xl flex items-center justify-center mb-4",
                isSelected
                  ? `bg-gradient-to-br from-farm-green to-farm-green-light`
                  : "bg-muted"
              )}>
                <Icon className={cn(
                  "h-6 w-6",
                  isSelected ? "text-primary-foreground" : "text-muted-foreground"
                )} />
              </div>
              
              <h4 className={`text-lg font-semibold mb-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
                {t(practice.id)}
              </h4>
              
              <p className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
                {t(`${practice.id}Desc` as any)}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
