import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sprout, CloudRain, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  const { t, language } = useLanguage();

  const features = [
    { icon: Sprout, label: language === 'en' ? 'Crop Planning' : 'பயிர் திட்டமிடல்' },
    { icon: CloudRain, label: language === 'en' ? 'Weather Based' : 'வானிலை அடிப்படை' },
    { icon: TrendingUp, label: language === 'en' ? 'Yield Optimization' : 'மகசூல் மேம்பாடு' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-farm-green/5 via-transparent to-farm-wheat/10" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-farm-green/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-farm-wheat/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-farm-green/10 px-4 py-2 text-sm font-medium text-farm-green animate-fade-in">
            <Sprout className="h-4 w-4" />
            <span>TNAU & SPIC Certified Recommendations</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl animate-slide-up">
            <span className={language === 'ta' ? 'font-tamil' : ''}>
              {t('appName')}
            </span>
          </h1>

          {/* Slogan */}
          <p className={`mb-8 text-xl md:text-2xl text-muted-foreground animate-slide-up ${language === 'ta' ? 'font-tamil' : ''}`} style={{ animationDelay: '0.1s' }}>
            {t('slogan')}
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="farm" 
              size="xl" 
              onClick={onGetStarted}
              className="group"
            >
              {language === 'en' ? 'Start Planning' : 'திட்டமிடலை தொடங்கு'}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button> 
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm border border-border"
              >
                <feature.icon className="h-4 w-4 text-farm-green" />
                <span className={`text-sm font-medium ${language === 'ta' ? 'font-tamil' : ''}`}>
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '38', label: language === 'en' ? 'Districts' : 'மாவட்டங்கள்' },
            { value: '3', label: language === 'en' ? 'Major Crops' : 'முக்கிய பயிர்கள்' },
            { value: '2', label: language === 'en' ? 'Practice Modes' : 'முறைகள்' },
            { value: '100+', label: language === 'en' ? 'SPIC Products' : 'SPIC தயாரிப்புகள்' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
              <div className="text-3xl font-bold text-farm-green">{stat.value}</div>
              <div className={`text-sm text-muted-foreground ${language === 'ta' ? 'font-tamil' : ''}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
