import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { economicsData } from '@/lib/cropData';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, TrendingUp, Wallet, PiggyBank, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

export const EconomicsSection = () => {
  const { language } = useLanguage();
  const { farmPlan } = useFarmPlan();
  const [showDetails, setShowDetails] = useState(false);

  if (!farmPlan.crop) return null;

  const economics = economicsData[farmPlan.crop][farmPlan.practice];
  const area = farmPlan.areaUnit === 'hectares' ? farmPlan.farmArea * 2.471 : farmPlan.farmArea;

  const totalInvestment = (
    economics.seedCost +
    economics.fertilizerCost +
    economics.pesticideCost +
    economics.laborCost +
    economics.irrigationCost +
    economics.miscCost
  ) * area;

  const totalYield = economics.yieldPerAcre * area;
  const grossIncome = totalYield * economics.pricePerQuintal;
  const netIncome = grossIncome - totalInvestment;
  const bcRatio = (grossIncome / totalInvestment).toFixed(2);

  const investmentBreakdown = [
    { label: language === 'en' ? 'Seed Cost' : 'விதை செலவு', value: economics.seedCost * area, icon: '🌱' },
    { label: language === 'en' ? 'Fertilizer Cost' : 'உர செலவு', value: economics.fertilizerCost * area, icon: '🧪' },
    { label: language === 'en' ? 'Pesticide Cost' : 'பூச்சிக்கொல்லி செலவு', value: economics.pesticideCost * area, icon: '🛡️' },
    { label: language === 'en' ? 'Labor Cost' : 'கூலி செலவு', value: economics.laborCost * area, icon: '👷' },
    { label: language === 'en' ? 'Irrigation Cost' : 'நீர்ப்பாசன செலவு', value: economics.irrigationCost * area, icon: '💧' },
    { label: language === 'en' ? 'Miscellaneous' : 'இதர செலவுகள்', value: economics.miscCost * area, icon: '📦' },
  ];

  return (
    <div className="farm-card p-6">
      <h3 className={`text-lg font-semibold mb-6 ${language === 'ta' ? 'font-tamil' : ''}`}>
        {language === 'en' ? 'Economics & Yield' : 'பொருளாதாரம் & மகசூல்'}
      </h3>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-farm-green/10 to-farm-green/5 border border-farm-green/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-farm-green" />
            <span className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
              {language === 'en' ? 'Expected Yield' : 'எதிர்பார்க்கப்படும் மகசூல்'}
            </span>
          </div>
          <div className="text-2xl font-bold text-farm-green">{totalYield.toFixed(1)} qtl</div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-farm-wheat/10 to-farm-wheat/5 border border-farm-wheat/20">
          <div className="flex items-center gap-2 mb-2">
            <Wallet className="h-5 w-5 text-farm-wheat" />
            <span className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
              {language === 'en' ? 'Gross Income' : 'மொத்த வருமானம்'}
            </span>
          </div>
          <div className="text-2xl font-bold text-farm-wheat">₹{grossIncome.toLocaleString()}</div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20">
          <div className="flex items-center gap-2 mb-2">
            <PiggyBank className="h-5 w-5 text-destructive" />
            <span className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
              {language === 'en' ? 'Total Investment' : 'மொத்த முதலீடு'}
            </span>
          </div>
          <div className="text-2xl font-bold text-destructive">₹{totalInvestment.toLocaleString()}</div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-farm-sky/10 to-farm-sky/5 border border-farm-sky/20">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="h-5 w-5 text-farm-sky" />
            <span className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
              {language === 'en' ? 'B:C Ratio' : 'B:C விகிதம்'}
            </span>
          </div>
          <div className="text-2xl font-bold text-farm-sky">{bcRatio}</div>
        </div>
      </div>

      {/* Net Income */}
      <div className={cn(
        "p-4 rounded-xl mb-4",
        netIncome > 0 ? "bg-farm-green/10 border border-farm-green/20" : "bg-destructive/10 border border-destructive/20"
      )}>
        <div className="flex items-center justify-between">
          <span className={`font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
            {language === 'en' ? 'Net Profit' : 'நிகர லாபம்'}
          </span>
          <span className={cn(
            "text-2xl font-bold",
            netIncome > 0 ? "text-farm-green" : "text-destructive"
          )}>
            ₹{netIncome.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Investment Breakdown Toggle */}
      <Button
        variant="ghost"
        className="w-full justify-between"
        onClick={() => setShowDetails(!showDetails)}
      >
        <span className={language === 'ta' ? 'font-tamil' : ''}>
          {language === 'en' ? 'Investment Breakdown' : 'முதலீட்டு விவரங்கள்'}
        </span>
        {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      {/* Investment Details */}
      {showDetails && (
        <div className="mt-4 space-y-3 animate-slide-up">
          {investmentBreakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className={`text-sm ${language === 'ta' ? 'font-tamil' : ''}`}>{item.label}</span>
              </div>
              <span className="font-medium">₹{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
