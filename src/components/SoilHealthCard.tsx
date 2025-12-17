import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { soilTypes, irrigationSystems } from '@/lib/cropData';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Droplets, FlaskConical, Leaf } from 'lucide-react';

export const SoilHealthCard = () => {
  const { t, language } = useLanguage();
  const { farmPlan, updateFarmPlan } = useFarmPlan();

  const updateSoilHealth = (key: string, value: any) => {
    updateFarmPlan({
      soilHealth: {
        ...farmPlan.soilHealth,
        [key]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <h3 className={`text-lg font-semibold text-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
        {t('soilHealthCard')}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Soil Type */}
        <div className="space-y-2">
          <Label className={`flex items-center gap-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
            <Leaf className="h-4 w-4 text-farm-earth" />
            {t('soilType')}
          </Label>
          <Select
            value={farmPlan.soilHealth.soilType}
            onValueChange={(value) => updateSoilHealth('soilType', value)}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder={language === 'en' ? 'Select soil type' : 'மண் வகையை தேர்வு செய்'} />
            </SelectTrigger>
            <SelectContent>
              {soilTypes.map((soil) => (
                <SelectItem key={soil.id} value={soil.id}>
                  {language === 'ta' ? soil.name.ta : soil.name.en}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Irrigation System */}
        <div className="space-y-2">
          <Label className={`flex items-center gap-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
            <Droplets className="h-4 w-4 text-farm-water" />
            {t('irrigationSystem')}
          </Label>
          <Select
            value={farmPlan.soilHealth.irrigationSystem}
            onValueChange={(value) => updateSoilHealth('irrigationSystem', value)}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder={language === 'en' ? 'Select irrigation' : 'நீர்ப்பாசனத்தை தேர்வு செய்'} />
            </SelectTrigger>
            <SelectContent>
              {irrigationSystems.map((system) => (
                <SelectItem key={system.id} value={system.id}>
                  {language === 'ta' ? system.name.ta : system.name.en} ({system.efficiency}% efficiency)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Soil pH */}
        <div className="space-y-3 md:col-span-2">
          <Label className={`flex items-center gap-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
            <FlaskConical className="h-4 w-4 text-farm-green" />
            {t('soilPH')}: {farmPlan.soilHealth.soilPH.toFixed(1)}
          </Label>
          <Slider
            value={[farmPlan.soilHealth.soilPH]}
            onValueChange={(value) => updateSoilHealth('soilPH', value[0])}
            min={4}
            max={9}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Acidic (4.0)</span>
            <span>Neutral (7.0)</span>
            <span>Alkaline (9.0)</span>
          </div>
        </div>

        {/* NPK Values */}
        <div className="space-y-2">
          <Label className={language === 'ta' ? 'font-tamil' : ''}>
            {t('availableN')}
          </Label>
          <Input
            type="number"
            value={farmPlan.soilHealth.availableN}
            onChange={(e) => updateSoilHealth('availableN', parseFloat(e.target.value) || 0)}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label className={language === 'ta' ? 'font-tamil' : ''}>
            {t('availableP')}
          </Label>
          <Input
            type="number"
            value={farmPlan.soilHealth.availableP}
            onChange={(e) => updateSoilHealth('availableP', parseFloat(e.target.value) || 0)}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label className={language === 'ta' ? 'font-tamil' : ''}>
            {t('availableK')}
          </Label>
          <Input
            type="number"
            value={farmPlan.soilHealth.availableK}
            onChange={(e) => updateSoilHealth('availableK', parseFloat(e.target.value) || 0)}
            className="h-11"
          />
        </div>

        {/* Soil Organic Carbon */}
        <div className="space-y-2">
          <Label className={language === 'ta' ? 'font-tamil' : ''}>
            {t('soilOrganicCarbon')}
          </Label>
          <Input
            type="number"
            step={0.01}
            value={farmPlan.soilHealth.soilOrganicCarbon}
            onChange={(e) => updateSoilHealth('soilOrganicCarbon', parseFloat(e.target.value) || 0)}
            className="h-11"
          />
        </div>
      </div>

      {/* NPK Status Indicator */}
      <div className="grid grid-cols-4 gap-4 p-4 rounded-xl bg-muted/50 border border-border">
        {[
          { label: 'N', value: farmPlan.soilHealth.availableN, low: 200, high: 450, color: 'farm-green', unit: 'kg/ha' },
          { label: 'P', value: farmPlan.soilHealth.availableP, low: 10, high: 22, color: 'farm-wheat', unit: 'kg/ha' },
          { label: 'K', value: farmPlan.soilHealth.availableK, low: 100, high: 300, color: 'farm-earth', unit: 'kg/ha' },
          { label: 'C', value: farmPlan.soilHealth.soilOrganicCarbon, low: 0.5, high: 0.75, color: 'farm-wheat', unit: '%' },
        ].map((nutrient) => {
          const statusKey = nutrient.value < nutrient.low ? 'low' : nutrient.value > nutrient.high ? 'high' : 'medium';
          const statusColor = statusKey === 'low' ? 'text-destructive' : statusKey === 'high' ? 'text-farm-green' : 'text-farm-wheat';
          const statusLabel = t(statusKey as any);
          const displayValue = nutrient.unit === '%' ? Number(nutrient.value).toFixed(2) : nutrient.value;

          return (
            <div key={nutrient.label} className="text-center">
              <div className={`text-2xl font-bold text-${nutrient.color}`}>{nutrient.label}</div>
              <div className="text-sm text-muted-foreground">{displayValue} {nutrient.unit}</div>
              <div className={`text-xs font-medium ${statusColor}`}>{statusLabel}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
