
import { useTranslation } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Globe, Phone, Users } from "lucide-react";

const LearnMore = () => {
  const { t } = useTranslation();

  return (
    <div className="container-custom py-12 md:py-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-display">{t('learnMore.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('learnMore.subtitle')}
        </p>
      </div>

      {/* Platform Overview */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">{t('learnMore.overview.title')}</h2>
          <p className="text-muted-foreground mb-4">
            {t('learnMore.overview.p1')}
          </p>
          <p className="text-muted-foreground mb-6">
            {t('learnMore.overview.p2')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/signup">{t('learnMore.overview.getStarted')}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">{t('learnMore.overview.services')}</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border shadow-lg">
          <div className="aspect-video bg-muted flex items-center justify-center">
            {/* Placeholder for an actual image/video */}
            <div className="text-6xl font-bold opacity-10">CiviConnect</div>
          </div>
        </div>
      </div>

      {/* How It Works (Detailed) */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">{t('learnMore.howItWorks.title')}</h2>
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">{t('learnMore.howItWorks.step1.title')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('learnMore.howItWorks.step1.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>{t('learnMore.howItWorks.step1.point1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>{t('learnMore.howItWorks.step1.point2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>{t('learnMore.howItWorks.step1.point3')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-4 rounded-lg border shadow-sm order-1 md:order-2">
              <div className="bg-primary/10 aspect-video rounded-lg flex items-center justify-center">
                <Mail className="h-16 w-16 text-primary opacity-50" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card p-4 rounded-lg border shadow-sm">
              <div className="bg-primary/10 aspect-video rounded-lg flex items-center justify-center">
                <Users className="h-16 w-16 text-primary opacity-50" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('learnMore.howItWorks.step2.title')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('learnMore.howItWorks.step2.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>{t('learnMore.howItWorks.step2.point1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>{t('learnMore.howItWorks.step2.point2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>{t('learnMore.howItWorks.step2.point3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">{t('learnMore.howItWorks.step3.title')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('learnMore.howItWorks.step3.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>{t('learnMore.howItWorks.step3.point1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>{t('learnMore.howItWorks.step3.point2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>{t('learnMore.howItWorks.step3.point3')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-4 rounded-lg border shadow-sm order-1 md:order-2">
              <div className="bg-primary/10 aspect-video rounded-lg flex items-center justify-center">
                <Globe className="h-16 w-16 text-primary opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">{t('learnMore.benefits.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="bg-primary/10 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('learnMore.benefits.benefit1.title')}</h3>
            <p className="text-muted-foreground">{t('learnMore.benefits.benefit1.description')}</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="bg-primary/10 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('learnMore.benefits.benefit2.title')}</h3>
            <p className="text-muted-foreground">{t('learnMore.benefits.benefit2.description')}</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="bg-primary/10 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('learnMore.benefits.benefit3.title')}</h3>
            <p className="text-muted-foreground">{t('learnMore.benefits.benefit3.description')}</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary/10 p-10 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">{t('learnMore.cta.title')}</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('learnMore.cta.description')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/signup">{t('learnMore.cta.signup')}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">{t('learnMore.cta.contact')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
