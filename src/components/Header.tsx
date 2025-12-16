import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Leaf, Globe } from 'lucide-react';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-farm-green to-farm-green-light shadow-md">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              {t('appName')}
            </h1>
            <p className="text-xs text-muted-foreground font-tamil">
              {language === 'ta' ? 'பண்ணை ஓட்டம்' : 'Farm Flow'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
            className="gap-2"
          >
            <Globe className="h-4 w-4" />
            <span className={language === 'ta' ? 'font-tamil' : ''}>
              {language === 'en' ? 'தமிழ்' : 'English'}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
