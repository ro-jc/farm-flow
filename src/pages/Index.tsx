import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FarmPlanProvider, useFarmPlan } from '@/contexts/FarmPlanContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PlannerForm } from '@/components/PlannerForm';
import { GeneratedPlan } from '@/components/GeneratedPlan';
import { useLanguage } from '@/contexts/LanguageContext';

const AppContent = () => {
  const { language } = useLanguage();
  const { farmPlan, updateFarmPlan, resetFarmPlan, setCurrentStep } = useFarmPlan();
  const [showPlanner, setShowPlanner] = useState(false);

  const handleGetStarted = () => {
    setShowPlanner(true);
  };

  const handlePlanGenerate = () => {
    updateFarmPlan({ planGenerated: true });
  };

  const handleBackToForm = () => {
    updateFarmPlan({ planGenerated: false });
  };

  const handleBackToHome = () => {
    resetFarmPlan();
    setShowPlanner(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!showPlanner ? (
          <Hero onGetStarted={handleGetStarted} />
        ) : farmPlan.planGenerated ? (
          <GeneratedPlan onBack={handleBackToForm} />
        ) : (
          <div className="py-8">
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-2 ${language === 'ta' ? 'font-tamil' : ''}`}>
                {language === 'en' ? 'Crop Planner' : 'பயிர் திட்டமிடல்'}
              </h2>
              <p className={`text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
                {language === 'en' 
                  ? 'Fill in the details below to generate your personalized farm plan'
                  : 'உங்கள் தனிப்பயனாக்கப்பட்ட பண்ணை திட்டத்தை உருவாக்க கீழே உள்ள விவரங்களை நிரப்பவும்'
                }
              </p>
            </div>
            <PlannerForm onPlanGenerate={handlePlanGenerate} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
            {language === 'en' 
              ? '© 2025 Farm Flow. Data sourced from TNAU Agritech Portal & SPIC.'
              : '© 2025 பண்ணை ஓட்டம். தரவு TNAU வேளாண்மை போர்டல் & SPIC இலிருந்து பெறப்பட்டது.'
            }
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Made for IAC VIT Hackathon - SPIC Problem Statement
          </p>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <FarmPlanProvider>
        <AppContent />
      </FarmPlanProvider>
    </LanguageProvider>
  );
};

export default Index;
