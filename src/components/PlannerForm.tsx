import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { PracticeSelector } from './PracticeSelector';
import { CropSelector } from './CropSelector';
import { RegionSelector } from './RegionSelector';
import { SeasonSelector } from './SeasonSelector';
import { SowingDateSelector } from './SowingDateSelector';
import { FarmAreaInput } from './FarmAreaInput';
import { SoilHealthCard } from './SoilHealthCard';
import { FertilizerSourceSelector } from './FertilizerSourceSelector';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlannerFormProps {
  onPlanGenerate: () => void;
}

export const PlannerForm = ({ onPlanGenerate }: PlannerFormProps) => {
  const { t, language } = useLanguage();
  const { farmPlan, currentStep, setCurrentStep } = useFarmPlan();
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    { id: 0, label: language === 'en' ? 'Practice' : 'முறை', component: <PracticeSelector /> },
    { id: 1, label: language === 'en' ? 'Crop' : 'பயிர்', component: <CropSelector /> },
    { id: 2, label: language === 'en' ? 'Region' : 'பகுதி', component: <RegionSelector /> },
    { id: 3, label: language === 'en' ? 'Season' : 'பருவம்', component: <SeasonSelector /> },
    { id: 4, label: language === 'en' ? 'Sowing' : 'விதைப்பு', component: <SowingDateSelector /> },
    { id: 5, label: language === 'en' ? 'Area' : 'பரப்பளவு', component: <FarmAreaInput /> },
    { id: 6, label: language === 'en' ? 'Soil' : 'மண்', component: <SoilHealthCard /> },
    { id: 7, label: language === 'en' ? 'Fertilizer' : 'உரம்', component: <FertilizerSourceSelector /> },
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 0: return true; // Practice always selected
      case 1: return !!farmPlan.crop && !!farmPlan.variety;
      case 2: return !!farmPlan.region;
      case 3: return !!farmPlan.season;
      case 4: return !!farmPlan.sowingDate;
      case 5: return farmPlan.farmArea > 0;
      case 6: return !!farmPlan.soilHealth.soilType && !!farmPlan.soilHealth.irrigationSystem;
      case 7: return true;
      default: return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate generation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsGenerating(false);
    onPlanGenerate();
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            {language === 'en' ? 'Step' : 'படி'} {currentStep + 1} / {steps.length}
          </span>
          <span className="text-sm font-medium text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => index <= currentStep && setCurrentStep(index)}
            className={cn(
              "flex flex-col items-center min-w-[60px] transition-all duration-300",
              index <= currentStep ? "cursor-pointer" : "cursor-default opacity-50"
            )}
          >
            <div className={cn(
              "h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium mb-1 transition-all duration-300",
              index < currentStep 
                ? "bg-farm-green text-white" 
                : index === currentStep 
                  ? "bg-farm-green/20 text-farm-green border-2 border-farm-green" 
                  : "bg-muted text-muted-foreground"
            )}>
              {index < currentStep ? <Check className="h-4 w-4" /> : index + 1}
            </div>
            <span className={cn(
              "text-xs whitespace-nowrap",
              language === 'ta' && 'font-tamil',
              index === currentStep ? "text-foreground font-medium" : "text-muted-foreground"
            )}>
              {step.label}
            </span>
          </button>
        ))}
      </div>

      {/* Current Step Content */}
      <div className="farm-card p-6 md:p-8 mb-6 animate-fade-in">
        {steps[currentStep].component}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 0}
          className={language === 'ta' ? 'font-tamil' : ''}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {t('previous')}
        </Button>

        {currentStep === steps.length - 1 ? (
          <Button
            variant="farm"
            size="lg"
            onClick={handleGenerate}
            disabled={!canProceed() || isGenerating}
            className={language === 'ta' ? 'font-tamil' : ''}
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                {language === 'en' ? 'Generating...' : 'உருவாக்குகிறது...'}
              </>
            ) : (
              t('generatePlan')
            )}
          </Button>
        ) : (
          <Button
            variant="farm"
            onClick={handleNext}
            disabled={!canProceed()}
            className={language === 'ta' ? 'font-tamil' : ''}
          >
            {t('next')}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
};
