import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { irrigationSystems, crops } from '@/lib/cropData';
import { Droplets, Clock, Calendar, Info } from 'lucide-react';

export const IrrigationSchedule = () => {
  const { language } = useLanguage();
  const { farmPlan } = useFarmPlan();

  if (!farmPlan.crop) return null;

  const cropData = crops[farmPlan.crop];
  const irrigationSystem = irrigationSystems.find(s => s.id === farmPlan.soilHealth.irrigationSystem);
  const efficiency = irrigationSystem?.efficiency || 60;

  // Calculate irrigation schedule based on crop and system
  const getIrrigationSchedule = () => {
    const baseWater = cropData.waterRequirement;
    const adjustedWater = baseWater / (efficiency / 100);
    
    const schedules = {
      rice: [
        { stage: language === 'en' ? 'Nursery' : 'நாற்றங்கால்', day: '1-25', frequency: 'Daily', depth: '2-3 cm' },
        { stage: language === 'en' ? 'Transplanting' : 'நடவு', day: '1', frequency: 'Flooding', depth: '5 cm' },
        { stage: language === 'en' ? 'Tillering' : 'கிளைப்பு', day: '25-50', frequency: '3-4 days', depth: '5 cm' },
        { stage: language === 'en' ? 'Flowering' : 'பூக்கும் பருவம்', day: '60-80', frequency: '2-3 days', depth: '5 cm' },
        { stage: language === 'en' ? 'Grain Filling' : 'தானிய நிரப்பல்', day: '80-100', frequency: '3-4 days', depth: '5 cm' },
        { stage: language === 'en' ? 'Ripening' : 'முதிர்வு', day: '100-120', frequency: 'Drain 10 days before harvest', depth: '-' },
      ],
      maize: [
        { stage: language === 'en' ? 'Germination' : 'முளைப்பு', day: '1-15', frequency: 'Light irrigation', depth: '3-4 cm' },
        { stage: language === 'en' ? 'Vegetative' : 'வளர்ச்சி', day: '15-45', frequency: '7-10 days', depth: '5 cm' },
        { stage: language === 'en' ? 'Tasseling' : 'பூத்தல்', day: '45-60', frequency: '5-7 days', depth: '5-6 cm' },
        { stage: language === 'en' ? 'Grain Filling' : 'தானிய நிரப்பல்', day: '60-85', frequency: '5-7 days', depth: '5 cm' },
        { stage: language === 'en' ? 'Maturity' : 'முதிர்வு', day: '85-100', frequency: '10-12 days', depth: '3-4 cm' },
      ],
      cotton: [
        { stage: language === 'en' ? 'Sowing' : 'விதைப்பு', day: '1', frequency: 'Pre-sowing', depth: '5-6 cm' },
        { stage: language === 'en' ? 'Germination' : 'முளைப்பு', day: '7-10', frequency: 'Light irrigation', depth: '3-4 cm' },
        { stage: language === 'en' ? 'Vegetative' : 'வளர்ச்சி', day: '20-60', frequency: '15-20 days', depth: '5-6 cm' },
        { stage: language === 'en' ? 'Flowering' : 'பூக்கும் பருவம்', day: '60-100', frequency: '10-12 days', depth: '6-7 cm' },
        { stage: language === 'en' ? 'Boll Development' : 'காய் வளர்ச்சி', day: '100-140', frequency: '12-15 days', depth: '5-6 cm' },
        { stage: language === 'en' ? 'Maturity' : 'முதிர்வு', day: '140-180', frequency: 'Reduce gradually', depth: '3-4 cm' },
      ],
    };

    return schedules[farmPlan.crop] || [];
  };

  const schedule = getIrrigationSchedule();

  return (
    <div className="farm-card p-6">
      <h3 className={`text-lg font-semibold mb-4 ${language === 'ta' ? 'font-tamil' : ''}`}>
        {language === 'en' ? 'Irrigation Schedule' : 'நீர்ப்பாசன அட்டவணை'}
      </h3>

      {/* Irrigation System Info */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-farm-water/10 border border-farm-water/20 mb-6">
        <Droplets className="h-8 w-8 text-farm-water" />
        <div>
          <div className="font-medium">
            {irrigationSystem ? (language === 'ta' ? irrigationSystem.name.ta : irrigationSystem.name.en) : 'Not selected'}
          </div>
          <div className="text-sm text-muted-foreground">
            {language === 'en' ? `Efficiency: ${efficiency}%` : `திறன்: ${efficiency}%`}
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className={`text-left p-3 text-sm font-medium text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
                {language === 'en' ? 'Growth Stage' : 'வளர்ச்சி நிலை'}
              </th>
              <th className={`text-left p-3 text-sm font-medium text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
                {language === 'en' ? 'Days' : 'நாட்கள்'}
              </th>
              <th className={`text-left p-3 text-sm font-medium text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
                {language === 'en' ? 'Frequency' : 'அதிர்வெண்'}
              </th>
              <th className={`text-left p-3 text-sm font-medium text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
                {language === 'en' ? 'Depth' : 'ஆழம்'}
              </th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, index) => (
              <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className={`p-3 font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>{row.stage}</td>
                <td className="p-3">
                  <span className="inline-flex items-center gap-1 text-sm">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    {row.day}
                  </span>
                </td>
                <td className="p-3">
                  <span className="inline-flex items-center gap-1 text-sm">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    {row.frequency}
                  </span>
                </td>
                <td className="p-3 text-sm">{row.depth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modern Tech Tip */}
      <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border flex items-start gap-3">
        <Info className="h-5 w-5 text-farm-green mt-0.5" />
        <div>
          <p className={`text-sm font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
            {language === 'en' ? 'Modern Technology Tip' : 'நவீன தொழில்நுட்ப குறிப்பு'}
          </p>
          <p className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
            {language === 'en' 
              ? 'Consider installing soil moisture sensors with IoT connectivity for precise irrigation scheduling. Drip irrigation with fertigation can save up to 40% water.'
              : 'துல்லியமான நீர்ப்பாசன திட்டமிடலுக்கு IoT இணைப்புடன் மண் ஈரப்பத உணரிகளை நிறுவுவதைக் கருத்தில் கொள்ளுங்கள். சொட்டு நீர்ப்பாசனம் 40% வரை நீரை சேமிக்கும்.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};
