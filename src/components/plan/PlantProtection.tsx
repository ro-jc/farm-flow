import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { cropPests, cropDiseases } from '@/lib/cropData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bug, AlertTriangle, Shield, Leaf, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const PlantProtection = () => {
  const { language } = useLanguage();
  const { farmPlan } = useFarmPlan();
  const [expandedPest, setExpandedPest] = useState<number | null>(null);
  const [expandedDisease, setExpandedDisease] = useState<number | null>(null);

  if (!farmPlan.crop) return null;

  const pests = cropPests[farmPlan.crop] || [];
  const diseases = cropDiseases[farmPlan.crop] || [];
  const isOrganic = farmPlan.practice === 'organic';

  return (
    <div className="farm-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Shield className="h-5 w-5 text-destructive" />
        </div>
        <h3 className={`text-lg font-semibold ${language === 'ta' ? 'font-tamil' : ''}`}>
          {language === 'en' ? 'Plant Protection' : 'தாவர பாதுகாப்பு'}
        </h3>
      </div>

      <Tabs defaultValue="pests" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="pests" className="gap-2">
            <Bug className="h-4 w-4" />
            <span className={language === 'ta' ? 'font-tamil' : ''}>
              {language === 'en' ? 'Pests' : 'பூச்சிகள்'}
            </span>
          </TabsTrigger>
          <TabsTrigger value="diseases" className="gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span className={language === 'ta' ? 'font-tamil' : ''}>
              {language === 'en' ? 'Diseases' : 'நோய்கள்'}
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pests" className="space-y-4">
          {pests.map((pest, index) => (
            <div key={index} className="border border-border rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
                onClick={() => setExpandedPest(expandedPest === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <Bug className="h-5 w-5 text-destructive" />
                  <span className={`font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                    {language === 'ta' ? pest.name.ta : pest.name.en}
                  </span>
                </div>
                {expandedPest === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {expandedPest === index && (
                <div className="p-4 pt-0 space-y-4 animate-slide-up">
                  {/* Symptoms */}
                  <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                    <div className={`text-xs font-medium text-destructive mb-1 ${language === 'ta' ? 'font-tamil' : ''}`}>
                      {language === 'en' ? 'Symptoms' : 'அறிகுறிகள்'}
                    </div>
                    <p className={`text-sm ${language === 'ta' ? 'font-tamil' : ''}`}>
                      {language === 'ta' ? pest.symptoms.ta : pest.symptoms.en}
                    </p>
                  </div>

                  {/* Management */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {!isOrganic && (
                      <div className="p-4 rounded-lg bg-farm-sky/5 border border-farm-sky/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Shield className="h-4 w-4 text-farm-sky" />
                          <span className={`text-sm font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                            {language === 'en' ? 'Chemical Management' : 'இரசாயன மேலாண்மை'}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-muted-foreground">SPIC Product:</span>
                            <div className="font-medium text-farm-green">{pest.chemical.product.brand}</div>
                            <div className="text-xs text-muted-foreground">{pest.chemical.product.composition}</div>
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground">Dosage:</span>
                            <div className="text-sm">{pest.chemical.product.dosage}</div>
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground">Timing:</span>
                            <div className={`text-sm ${language === 'ta' ? 'font-tamil' : ''}`}>{pest.chemical.timing}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className={cn(
                      "p-4 rounded-lg bg-farm-organic/5 border border-farm-organic/20",
                      isOrganic && "md:col-span-2"
                    )}>
                      <div className="flex items-center gap-2 mb-3">
                        <Leaf className="h-4 w-4 text-farm-organic" />
                        <span className={`text-sm font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                          {language === 'en' ? 'Organic Management' : 'இயற்கை மேலாண்மை'}
                        </span>
                      </div>
                      <p className={`text-sm mb-3 ${language === 'ta' ? 'font-tamil' : ''}`}>{pest.organic.method}</p>
                      <div className="p-2 rounded bg-muted/50">
                        <div className="text-xs text-muted-foreground">Recommended Product:</div>
                        <div className="font-medium text-farm-organic">{pest.organic.product.brand}</div>
                        <div className="text-xs">{pest.organic.product.dosage}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </TabsContent>

        <TabsContent value="diseases" className="space-y-4">
          {diseases.map((disease, index) => (
            <div key={index} className="border border-border rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
                onClick={() => setExpandedDisease(expandedDisease === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-farm-wheat" />
                  <span className={`font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                    {language === 'ta' ? disease.name.ta : disease.name.en}
                  </span>
                </div>
                {expandedDisease === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {expandedDisease === index && (
                <div className="p-4 pt-0 space-y-4 animate-slide-up">
                  {/* Symptoms */}
                  <div className="p-3 rounded-lg bg-farm-wheat/5 border border-farm-wheat/20">
                    <div className={`text-xs font-medium text-farm-wheat mb-1 ${language === 'ta' ? 'font-tamil' : ''}`}>
                      {language === 'en' ? 'Symptoms' : 'அறிகுறிகள்'}
                    </div>
                    <p className={`text-sm ${language === 'ta' ? 'font-tamil' : ''}`}>
                      {language === 'ta' ? disease.symptoms.ta : disease.symptoms.en}
                    </p>
                  </div>

                  {/* Management */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {!isOrganic && (
                      <div className="p-4 rounded-lg bg-farm-sky/5 border border-farm-sky/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Shield className="h-4 w-4 text-farm-sky" />
                          <span className={`text-sm font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                            {language === 'en' ? 'Chemical Management' : 'இரசாயன மேலாண்மை'}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-muted-foreground">SPIC Product:</span>
                            <div className="font-medium text-farm-green">{disease.chemical.product.brand}</div>
                            <div className="text-xs text-muted-foreground">{disease.chemical.product.composition}</div>
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground">Dosage:</span>
                            <div className="text-sm">{disease.chemical.product.dosage}</div>
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground">Timing:</span>
                            <div className={`text-sm ${language === 'ta' ? 'font-tamil' : ''}`}>{disease.chemical.timing}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className={cn(
                      "p-4 rounded-lg bg-farm-organic/5 border border-farm-organic/20",
                      isOrganic && "md:col-span-2"
                    )}>
                      <div className="flex items-center gap-2 mb-3">
                        <Leaf className="h-4 w-4 text-farm-organic" />
                        <span className={`text-sm font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                          {language === 'en' ? 'Organic Management' : 'இயற்கை மேலாண்மை'}
                        </span>
                      </div>
                      <p className={`text-sm mb-3 ${language === 'ta' ? 'font-tamil' : ''}`}>{disease.organic.method}</p>
                      <div className="p-2 rounded bg-muted/50">
                        <div className="text-xs text-muted-foreground">Recommended Product:</div>
                        <div className="font-medium text-farm-organic">{disease.organic.product.brand}</div>
                        <div className="text-xs">{disease.organic.product.dosage}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
