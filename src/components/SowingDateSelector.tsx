import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { crops } from '@/lib/cropData';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Info } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export const SowingDateSelector = () => {
  const { t, language } = useLanguage();
  const { farmPlan, updateFarmPlan } = useFarmPlan();

  const getRecommendedWindow = () => {
    if (!farmPlan.crop || !farmPlan.season) return null;
    const cropData = crops[farmPlan.crop];
    return cropData.sowingWindow[farmPlan.season];
  };

  const recommendedWindow = getRecommendedWindow();

  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold text-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
        {t('sowingDate')}
      </h3>

      {recommendedWindow && (
        <div className="p-4 rounded-xl bg-farm-green/5 border border-farm-green/20 flex items-start gap-3">
          <Info className="h-5 w-5 text-farm-green mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">
              {language === 'en' ? 'Recommended Sowing Window' : 'பரிந்துரைக்கப்பட்ட விதைப்பு காலம்'}
            </p>
            <p className="text-sm text-muted-foreground">
              {recommendedWindow.start} - {recommendedWindow.end}
            </p>
          </div>
        </div>
      )}
      
      <div className="space-y-2">
        <Label className={language === 'ta' ? 'font-tamil' : ''}>
          {language === 'en' ? 'Select Sowing Date' : 'விதைப்பு தேதியை தேர்வு செய்யவும்'}
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal h-12",
                !farmPlan.sowingDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {farmPlan.sowingDate ? (
                format(farmPlan.sowingDate, "PPP")
              ) : (
                <span>{language === 'en' ? 'Pick a date' : 'தேதியை தேர்வு செய்'}</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={farmPlan.sowingDate || undefined}
              onSelect={(date) => updateFarmPlan({ sowingDate: date || null })}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
