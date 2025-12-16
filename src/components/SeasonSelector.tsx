import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan, Season } from '@/contexts/FarmPlanContext';
import { crops } from '@/lib/cropData';
import { cn } from '@/lib/utils';
import { Calendar, AlertTriangle, Check, Sun, CloudRain, Thermometer } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const SeasonSelector = () => {
  const { t, language } = useLanguage();
  const { farmPlan, updateFarmPlan } = useFarmPlan();

  const seasons: { id: Season; icon: typeof Sun; months: string }[] = [
    { id: 'kharif', icon: CloudRain, months: 'Jun - Oct' },
    { id: 'rabi', icon: Sun, months: 'Oct - Mar' },
    { id: 'zaid', icon: Thermometer, months: 'Mar - Jun' },
  ];

  const checkIfOffSeason = (season: Season) => {
    if (!farmPlan.crop) return false;
    const cropData = crops[farmPlan.crop];
    return !cropData.seasons.includes(season);
  };

  const handleSeasonSelect = (season: Season) => {
    const isOffSeason = checkIfOffSeason(season);
    updateFarmPlan({ 
      season, 
      isOffSeason,
      sowingDate: null // Reset sowing date when season changes
    });
  };

  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold text-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
        {t('selectSeason')}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {seasons.map((season) => {
          const isSelected = farmPlan.season === season.id;
          const isOffSeason = farmPlan.crop ? checkIfOffSeason(season.id) : false;
          const Icon = season.icon;
          
          return (
            <button
              key={season.id}
              onClick={() => handleSeasonSelect(season.id)}
              className={cn(
                "relative flex flex-col items-center p-5 rounded-2xl border-2 transition-all duration-300",
                isSelected 
                  ? isOffSeason 
                    ? "border-farm-wheat bg-farm-wheat/10 shadow-lg"
                    : "border-farm-green bg-farm-green/5 shadow-lg"
                  : "border-border hover:border-muted-foreground/30 hover:bg-muted/50",
                isOffSeason && !isSelected && "opacity-70"
              )}
            >
              {isSelected && (
                <div className={cn(
                  "absolute top-3 right-3 h-6 w-6 rounded-full flex items-center justify-center",
                  isOffSeason ? "bg-farm-wheat" : "bg-farm-green"
                )}>
                  {isOffSeason ? (
                    <AlertTriangle className="h-4 w-4 text-foreground" />
                  ) : (
                    <Check className="h-4 w-4 text-primary-foreground" />
                  )}
                </div>
              )}
              
              <Icon className={cn(
                "h-8 w-8 mb-3",
                isSelected 
                  ? isOffSeason ? "text-farm-wheat" : "text-farm-green"
                  : "text-muted-foreground"
              )} />
              
              <h4 className={`text-base font-semibold mb-1 ${language === 'ta' ? 'font-tamil' : ''}`}>
                {t(season.id)}
              </h4>
              
              <span className="text-xs text-muted-foreground">{season.months}</span>
            </button>
          );
        })}
      </div>

      {farmPlan.isOffSeason && farmPlan.season && (
        <Alert className="border-farm-wheat bg-farm-wheat/10">
          <AlertTriangle className="h-4 w-4 text-farm-wheat" />
          <AlertDescription className={language === 'ta' ? 'font-tamil' : ''}>
            {t('offSeasonWarning')}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
