import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { WeatherWidget } from './plan/WeatherWidget';
import { EconomicsSection } from './plan/EconomicsSection';
import { IrrigationSchedule } from './plan/IrrigationSchedule';
import { FertilizerPlan } from './plan/FertilizerPlan';
import { CropCalendar } from './plan/CropCalendar';
import { PlantProtection } from './plan/PlantProtection';
import { NutrientDeficiency } from './plan/NutrientDeficiency';
import { Button } from '@/components/ui/button';
import { crops } from '@/lib/cropData';
import { ArrowLeft, Download, Share2, Printer, Leaf, Sprout, MapPin, Calendar, LandPlot } from 'lucide-react';
import { format } from 'date-fns';

interface GeneratedPlanProps {
  onBack: () => void;
}

export const GeneratedPlan = ({ onBack }: GeneratedPlanProps) => {
  const { language } = useLanguage();
  const { farmPlan } = useFarmPlan();

  if (!farmPlan.crop) return null;

  const cropData = crops[farmPlan.crop];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className={`text-2xl font-bold ${language === 'ta' ? 'font-tamil' : ''}`}>
              {language === 'en' ? 'Your Farm Plan' : 'உங்கள் பண்ணை திட்டம்'}
            </h2>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Generated based on TNAU & SPIC recommendations' : 'TNAU & SPIC பரிந்துரைகளின் அடிப்படையில் உருவாக்கப்பட்டது'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            {language === 'en' ? 'Download' : 'பதிவிறக்கு'}
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Printer className="h-4 w-4" />
            {language === 'en' ? 'Print' : 'அச்சிடு'}
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            {language === 'en' ? 'Share' : 'பகிர்'}
          </Button>
        </div>
      </div>

      {/* Plan Summary Card */}
      <div className="farm-card p-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-farm-green/10 flex items-center justify-center">
              <Sprout className="h-5 w-5 text-farm-green" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Crop' : 'பயிர்'}
              </div>
              <div className={`font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                {language === 'ta' ? cropData.name.ta : cropData.name.en}
              </div>
            </div>
          </div>

          {farmPlan.variety && (
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-farm-wheat/10 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-farm-wheat" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Variety' : 'விதை'}
                </div>
                <div className={`font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                  {farmPlan.variety}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-farm-organic/10 flex items-center justify-center">
              <Leaf className="h-5 w-5 text-farm-organic" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Practice' : 'முறை'}
              </div>
              <div className={`font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                {farmPlan.practice === 'integrated' 
                  ? (language === 'en' ? 'Integrated' : 'ஒருங்கிணைந்த')
                  : (language === 'en' ? 'Organic' : 'இயற்கை')
                }
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-farm-sky/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-farm-sky" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Region' : 'பகுதி'}
              </div>
              <div className="font-medium">{farmPlan.region}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-farm-wheat/10 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-farm-wheat" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Sowing Date' : 'விதைப்பு தேதி'}
              </div>
              <div className="font-medium">
                {farmPlan.sowingDate ? format(farmPlan.sowingDate, 'dd MMM yyyy') : '-'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-farm-earth/10 flex items-center justify-center">
              <LandPlot className="h-5 w-5 text-farm-earth" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Area' : 'பரப்பளவு'}
              </div>
              <div className="font-medium">
                {farmPlan.farmArea} {farmPlan.areaUnit === 'acres' ? 'acres' : 'ha'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <WeatherWidget />
          <EconomicsSection />
          <IrrigationSchedule />
          <NutrientDeficiency />
        </div>
        <div className="space-y-6">
          <FertilizerPlan />
          <CropCalendar />
          <PlantProtection />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border text-center">
        <p className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
          {language === 'en' 
            ? '📊 Data sourced from TNAU Agritech Portal & SPIC. Recommendations may vary based on local conditions.'
            : '📊 தரவு TNAU வேளாண்மை போர்டல் & SPIC இலிருந்து பெறப்பட்டது. உள்ளூர் நிலைமைகளின் அடிப்படையில் பரிந்துரைகள் மாறுபடலாம்.'
          }
        </p>
      </div>
    </div>
  );
};
