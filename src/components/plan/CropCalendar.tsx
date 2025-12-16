import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { crops } from '@/lib/cropData';
import { Calendar, Leaf, Droplets, Scissors, Package, Bug, Sun } from 'lucide-react';

export const CropCalendar = () => {
  const { language } = useLanguage();
  const { farmPlan } = useFarmPlan();

  if (!farmPlan.crop) return null;

  const cropData = crops[farmPlan.crop];
  const duration = cropData.duration;

  // Generate detailed crop calendar
  const getCalendarData = () => {
    const calendars = {
      rice: [
        { week: '1', activity: language === 'en' ? 'Nursery preparation & seed treatment' : 'நாற்றங்கால் தயாரிப்பு & விதை நேர்த்தி', icon: Leaf, color:  'farm-green' },
        { week: '2-3', activity: language === 'en' ? 'Nursery sowing & management' : 'நாற்றங்கால் விதைப்பு & மேலாண்மை', icon: Droplets, color:  'farm-water' },
        { week: '4', activity: language === 'en' ? 'Main field preparation, puddling' : 'முதன்மை வயல் தயாரிப்பு, சேறு கலக்குதல்', icon: Leaf, color:  'farm-earth' },
        { week: '5', activity: language === 'en' ? 'Transplanting, basal fertilizer' : 'நடவு, அடி உர இடுதல்', icon: Package, color: 'farm-green' },
        { week: '6-7', activity: language === 'en' ? 'Gap filling, weed management' : 'இடைவெளி நிரப்புதல், களை மேலாண்மை', icon: Scissors, color:  'farm-wheat' },
        { week: '8', activity: language === 'en' ? '1st top dressing (N), tillering stage' : '1வது மேல் உரம், கிளைப்பு நிலை', icon: Package, color:  'farm-green' },
        { week: '9-10', activity: language === 'en' ? 'Pest surveillance, need-based spray' : 'பூச்சி கண்காணிப்பு, தேவையான தெளிப்பு', icon: Bug, color:  'destructive' },
        { week: '11', activity: language === 'en' ? '2nd top dressing (N), panicle initiation' : '2வது மேல் உரம், கதிர் தொடக்கம்', icon: Package, color:  'farm-green' },
        { week: '12-13', activity: language === 'en' ? 'Flowering, disease management' : 'பூக்கும் பருவம், நோய் மேலாண்மை', icon: Sun, color:  'farm-sun' },
        { week: '14-15', activity: language === 'en' ? 'Grain filling, maintain water level' : 'தானிய நிரப்பல், நீர் மட்டம் பராமரிப்பு', icon: Droplets, color:  'farm-water' },
        { week: '16', activity: language === 'en' ? 'Drain water 10 days before harvest' : 'அறுவடைக்கு 10 நாட்கள் முன் நீர் வடிகட்டு', icon: Droplets, color:  'farm-water' },
        { week: '17', activity: language === 'en' ? 'Harvesting at 80% maturity' : '80% முதிர்ச்சியில் அறுவடை', icon: Scissors, color:  'farm-wheat' },
      ],
      maize: [
        { week: '1', activity: language === 'en' ? 'Field preparation, seed treatment' : 'வயல் தயாரிப்பு, விதை நேர்த்தி', icon: Leaf, color: 'farm-green' },
        { week: '2', activity: language === 'en' ? 'Sowing, basal fertilizer application' : 'விதைப்பு, அடி உர இடுதல்', icon: Package, color: 'farm-green' },
        { week: '3', activity: language === 'en' ? 'Germination, gap filling' : 'முளைப்பு, இடைவெளி நிரப்புதல்', icon: Leaf, color: 'farm-organic' },
        { week: '4', activity: language === 'en' ? 'Thinning, 1st weeding' : 'மெலிதாக்குதல், 1வது களை எடுப்பு', icon: Scissors, color: 'farm-wheat' },
        { week: '5', activity: language === 'en' ? '1st top dressing with earthing up' : '1வது மேல் உரம் மண் அணைத்தல்', icon: Package, color: 'farm-earth' },
        { week: '6-7', activity: language === 'en' ? 'Knee-high stage, pest monitoring' : 'முழங்கால் உயர நிலை, பூச்சி கண்காணிப்பு', icon: Bug, color: 'destructive' },
        { week: '8', activity: language === 'en' ? '2nd top dressing, 2nd earthing up' : '2வது மேல் உரம், 2வது மண் அணைத்தல்', icon: Package, color: 'farm-green' },
        { week: '9-10', activity: language === 'en' ? 'Tasseling, silking - critical irrigation' : 'பூத்தல், பட்டு - முக்கிய நீர்ப்பாசனம்', icon: Droplets, color: 'farm-water' },
        { week: '11-12', activity: language === 'en' ? 'Cob formation, pest & disease check' : 'கதிர் உருவாக்கம், பூச்சி நோய் சோதனை', icon: Bug, color: 'destructive' },
        { week: '13-14', activity: language === 'en' ? 'Grain filling, reduced irrigation' : 'தானிய நிரப்பல், குறைந்த நீர்ப்பாசனம்', icon: Sun, color: 'farm-sun' },
        { week: '15', activity: language === 'en' ? 'Harvesting at black layer formation' : 'கருப்பு அடுக்கு உருவாக்கத்தில் அறுவடை', icon: Scissors, color: 'farm-wheat' },
      ],
      cotton: [
        { week: '1', activity: language === 'en' ? 'Field preparation, pre-sowing irrigation' : 'வயல் தயாரிப்பு, விதைப்புக்கு முந்தைய நீர்ப்பாசனம்', icon: Droplets, color: 'farm-water' },
        { week: '2', activity: language === 'en' ? 'Sowing, basal fertilizer, seed treatment' : 'விதைப்பு, அடி உரம், விதை நேர்த்தி', icon: Package, color: 'farm-green' },
        { week: '3-4', activity: language === 'en' ? 'Germination, gap filling' : 'முளைப்பு, இடைவெளி நிரப்புதல்', icon: Leaf, color: 'farm-organic' },
        { week: '5', activity: language === 'en' ? 'Thinning, 1st weeding & hoeing' : 'மெலிதாக்குதல், 1வது களை எடுப்பு', icon: Scissors, color: 'farm-wheat' },
        { week: '6', activity: language === 'en' ? '1st top dressing (N), earthing up' : '1வது மேல் உரம், மண் அணைத்தல்', icon: Package, color: 'farm-green' },
        { week: '7-8', activity: language === 'en' ? 'Square formation, pest surveillance' : 'சதுர உருவாக்கம், பூச்சி கண்காணிப்பு', icon: Bug, color: 'destructive' },
        { week: '9-10', activity: language === 'en' ? '2nd top dressing, 2nd weeding' : '2வது மேல் உரம், 2வது களை எடுப்பு', icon: Package, color: 'farm-earth' },
        { week: '11-12', activity: language === 'en' ? 'Flowering, need-based pest control' : 'பூக்கும் பருவம், தேவை அடிப்படையில் பூச்சி கட்டுப்பாடு', icon: Sun, color: 'farm-sun' },
        { week: '13-16', activity: language === 'en' ? 'Boll formation, critical irrigation' : 'காய் உருவாக்கம், முக்கிய நீர்ப்பாசனம்', icon: Droplets, color: 'farm-water' },
        { week: '17-20', activity: language === 'en' ? 'Boll development, bollworm monitoring' : 'காய் வளர்ச்சி, காய்ப்புழு கண்காணிப்பு', icon: Bug, color: 'destructive' },
        { week: '21-24', activity: language === 'en' ? 'Boll opening, 1st & 2nd picking' : 'காய் திறப்பு, 1வது & 2வது பறிப்பு', icon: Scissors, color: 'farm-wheat' },
        { week: '25-26', activity: language === 'en' ? '3rd picking, stalk destruction' : '3வது பறிப்பு, தண்டு அழிப்பு', icon: Scissors, color: 'farm-wheat' },
      ],
    };

    return calendars[farmPlan.crop] || [];
  };

  const calendarData = getCalendarData();

  return (
    <div className="farm-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-farm-green/10 flex items-center justify-center">
          <Calendar className="h-5 w-5 text-farm-green" />
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${language === 'ta' ? 'font-tamil' : ''}`}>
            {language === 'en' ? 'Detailed Crop Calendar' : 'விரிவான பயிர் நாட்காட்டி'}
          </h3>
          <p className="text-sm text-muted-foreground">
            {language === 'en' ? `Duration: ${duration} days` : `காலம்: ${duration} நாட்கள்`}
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-farm-green via-farm-wheat to-farm-earth" />

        <div className="space-y-4">
          {calendarData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative flex gap-4 pl-2">
                {/* Timeline dot */}
                <div className={`relative z-10 h-8 w-8 rounded-full bg-${item.color}/20 flex items-center justify-center flex-shrink-0 border-2 border-${item.color}`}>
                  <Icon className={`h-4 w-4 text-${item.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-muted-foreground">
                      {language === 'en' ? 'Week' : 'வாரம்'} {item.week}
                    </span>
                  </div>
                  <p className={`text-sm ${language === 'ta' ? 'font-tamil' : ''}`}>
                    {item.activity}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
