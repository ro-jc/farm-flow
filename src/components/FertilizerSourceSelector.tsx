import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { fertilizerSources } from '@/lib/cropData';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Leaf, FlaskConical, Droplets } from 'lucide-react';

export const FertilizerSourceSelector = () => {
  const { t, language } = useLanguage();
  const { farmPlan, updateFarmPlan } = useFarmPlan();

  const updateFertilizerSource = (key: string, value: string) => {
    updateFarmPlan({
      fertilizerSources: {
        ...farmPlan.fertilizerSources,
        [key]: value,
      },
    });
  };

  const isOrganic = farmPlan.practice === 'organic';

  const getFilteredSources = (sources: typeof fertilizerSources.nitrogen) => {
    if (isOrganic) {
      return sources.filter(s => s.organic);
    }
    return sources;
  };

  return (
    <div className="space-y-6">
      <h3 className={`text-lg font-semibold text-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
        {t('fertilizerSource')}
      </h3>

      <div className="grid grid-cols-1 gap-6">
        {/* Nitrogen Source */}
        <div className="space-y-2">
          <Label className={`flex items-center gap-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
            <Leaf className="h-4 w-4 text-farm-green" />
            {t('nSource')}
          </Label>
          <Select
            value={farmPlan.fertilizerSources.nSource}
            onValueChange={(value) => updateFertilizerSource('nSource', value)}
          >
            <SelectTrigger className="h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {getFilteredSources(fertilizerSources.nitrogen).map((source) => (
                <SelectItem key={source.id} value={source.id}>
                  <div className="flex flex-col">
                    <span>{source.name}</span>
                    <span className="text-xs text-muted-foreground">{source.composition}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Phosphorus Source */}
        <div className="space-y-2">
          <Label className={`flex items-center gap-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
            <FlaskConical className="h-4 w-4 text-farm-wheat" />
            {t('pSource')}
          </Label>
          <Select
            value={farmPlan.fertilizerSources.pSource}
            onValueChange={(value) => updateFertilizerSource('pSource', value)}
          >
            <SelectTrigger className="h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {getFilteredSources(fertilizerSources.phosphorus).map((source) => (
                <SelectItem key={source.id} value={source.id}>
                  <div className="flex flex-col">
                    <span>{source.name}</span>
                    <span className="text-xs text-muted-foreground">{source.composition}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Warning: Rock Phosphate not recommended on alkaline soils */}
          {farmPlan.fertilizerSources.pSource === 'rockPhosphate' && farmPlan.soilHealth.soilPH > 7.2 && (
            <div className="mt-2 p-3 rounded-md bg-destructive/10 border border-destructive/20">
              <p className={`text-sm text-destructive ${language === 'ta' ? 'font-tamil' : ''}`}>
                {t('rockPhosphateAlkalineWarning')}
              </p>
            </div>
          )}
        </div>

        {/* Potassium Source */}
        <div className="space-y-2">
          <Label className={`flex items-center gap-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
            <Droplets className="h-4 w-4 text-farm-earth" />
            {t('kSource')}
          </Label>
          <Select
            value={farmPlan.fertilizerSources.kSource}
            onValueChange={(value) => updateFertilizerSource('kSource', value)}
          >
            <SelectTrigger className="h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {getFilteredSources(fertilizerSources.potassium).map((source) => (
                <SelectItem key={source.id} value={source.id}>
                  <div className="flex flex-col">
                    <span>{source.name}</span>
                    <span className="text-xs text-muted-foreground">{source.composition}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isOrganic && (
        <div className="p-4 rounded-xl bg-farm-organic/10 border border-farm-organic/20">
          <p className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
            {language === 'en' 
              ? '🌿 Only organic fertilizer sources are shown based on your selected farming practice.'
              : '🌿 உங்கள் தேர்ந்தெடுக்கப்பட்ட விவசாய முறையின் அடிப்படையில் இயற்கை உர மூலங்கள் மட்டுமே காட்டப்படும்.'
            }
          </p>
        </div>
      )}
    </div>
  );
};
