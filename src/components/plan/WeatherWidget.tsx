import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFarmPlan } from '@/contexts/FarmPlanContext';
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer } from 'lucide-react';

export const WeatherWidget = () => {
  const { language } = useLanguage();
  const { farmPlan } = useFarmPlan();
  const [weather, setWeather] = useState({
    temp: 28,
    humidity: 65,
    windSpeed: 12,
    condition: 'Partly Cloudy',
    rainfall: 2.5,
  });

  // Simulate weather based on region and season
  useEffect(() => {
    if (farmPlan.region && farmPlan.season) {
      const seasonWeather = {
        kharif: { temp: 30, humidity: 80, windSpeed: 15, condition: 'Rainy', rainfall: 45 },
        rabi: { temp: 25, humidity: 55, windSpeed: 8, condition: 'Clear', rainfall: 5 },
        summer: { temp: 38, humidity: 40, windSpeed: 20, condition: 'Hot', rainfall: 0 },
      };
      setWeather(prev => ({
        ...prev,
        ...seasonWeather[farmPlan.season!],
      }));
    }
  }, [farmPlan.region, farmPlan.season]);

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'Rainy': return CloudRain;
      case 'Clear': return Sun;
      case 'Hot': return Thermometer;
      default: return Cloud;
    }
  };

  const WeatherIcon = getWeatherIcon();

  return (
    <div className="farm-card p-6">
      <h3 className={`text-lg font-semibold mb-4 ${language === 'ta' ? 'font-tamil' : ''}`}>
        {language === 'en' ? 'Live Weather' : 'நேரடி வானிலை'}
        {farmPlan.region && <span className="text-sm font-normal text-muted-foreground ml-2">- {farmPlan.region}</span>}
      </h3>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-farm-sky to-farm-sky/50 flex items-center justify-center">
            <WeatherIcon className="h-8 w-8 text-white" />
          </div>
          <div>
            <div className="text-4xl font-bold">{weather.temp}°C</div>
            <div className="text-sm text-muted-foreground">{weather.condition}</div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-xl bg-muted/50">
            <Droplets className="h-5 w-5 mx-auto mb-1 text-farm-water" />
            <div className="text-sm font-medium">{weather.humidity}%</div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Humidity' : 'ஈரப்பதம்'}
            </div>
          </div>
          
          <div className="text-center p-3 rounded-xl bg-muted/50">
            <Wind className="h-5 w-5 mx-auto mb-1 text-farm-green" />
            <div className="text-sm font-medium">{weather.windSpeed} km/h</div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Wind' : 'காற்று'}
            </div>
          </div>
          
          <div className="text-center p-3 rounded-xl bg-muted/50">
            <CloudRain className="h-5 w-5 mx-auto mb-1 text-farm-sky" />
            <div className="text-sm font-medium">{weather.rainfall} mm</div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Rainfall' : 'மழை'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
