import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { tamilNaduDistricts } from '@/lib/cropData';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin } from 'lucide-react';

export const RegionSelector = () => {
  const { t, language } = useLanguage();
  const { farmPlan, updateFarmPlan } = useFarmPlan();

  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold text-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
        {t('selectRegion')}
      </h3>
      
      <div className="space-y-2">
        <Label className={`flex items-center gap-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
          <MapPin className="h-4 w-4 text-farm-green" />
          {t('district')}
        </Label>
        <Select
          value={farmPlan.region}
          onValueChange={(value) => updateFarmPlan({ region: value })}
        >
          <SelectTrigger className="w-full h-12 text-base">
            <SelectValue placeholder={language === 'en' ? 'Select District' : 'மாவட்டத்தை தேர்வு செய்யவும்'} />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            {tamilNaduDistricts.map((district) => (
              <SelectItem key={district} value={district}>
                {district}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {farmPlan.region && (
        <div className="p-4 rounded-xl bg-farm-green/5 border border-farm-green/20">
          <p className="text-sm text-muted-foreground">
            {language === 'en' 
              ? `Selected: ${farmPlan.region}, Tamil Nadu`
              : `தேர்வு: ${farmPlan.region}, தமிழ்நாடு`
            }
          </p>
        </div>
      )}
    </div>
  );
};
