import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LandPlot } from 'lucide-react';

export const FarmAreaInput = () => {
  const { t, language } = useLanguage();
  const { farmPlan, updateFarmPlan } = useFarmPlan();

  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold text-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
        {t('farmArea')}
      </h3>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            variant={farmPlan.areaUnit === 'acres' ? 'farm' : 'outline'}
            size="sm"
            onClick={() => updateFarmPlan({ areaUnit: 'acres' })}
            className={language === 'ta' ? 'font-tamil' : ''}
          >
            {t('acres')}
          </Button>
          <Button
            variant={farmPlan.areaUnit === 'hectares' ? 'farm' : 'outline'}
            size="sm"
            onClick={() => updateFarmPlan({ areaUnit: 'hectares' })}
            className={language === 'ta' ? 'font-tamil' : ''}
          >
            {t('hectares')}
          </Button>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <LandPlot className="h-4 w-4 text-farm-green" />
            {language === 'en' ? 'Area' : 'பரப்பளவு'}
          </Label>
          <Input
            type="number"
            min="0.1"
            step="0.1"
            value={farmPlan.farmArea}
            onChange={(e) => updateFarmPlan({ farmArea: parseFloat(e.target.value) || 0 })}
            className="h-12 text-lg"
          />
        </div>

        <div className="p-4 rounded-xl bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground">
            {language === 'en' 
              ? `Total Area: ${farmPlan.farmArea} ${farmPlan.areaUnit}`
              : `மொத்த பரப்பளவு: ${farmPlan.farmArea} ${farmPlan.areaUnit === 'acres' ? 'ஏக்கர்' : 'ஹெக்டேர்'}`
            }
          </p>
          {farmPlan.areaUnit === 'hectares' && (
            <p className="text-xs text-muted-foreground mt-1">
              ≈ {(farmPlan.farmArea * 2.471).toFixed(2)} acres
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
