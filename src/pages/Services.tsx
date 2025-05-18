
import { useTranslation } from "@/utils/translations";
import { Mail, Globe, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="container-custom py-12 md:py-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-display">{t('services.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('services.subtitle')}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Service 1 */}
        <div className="bg-card p-6 rounded-lg border shadow-sm flex flex-col">
          <div className="bg-primary/10 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
            <Mail size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t('services.complaint.title')}</h3>
          <p className="text-muted-foreground mb-6 flex-grow">
            {t('services.complaint.description')}
          </p>
          <Button asChild size="sm" className="self-start">
            <Link to="/submit">{t('services.learn')}</Link>
          </Button>
        </div>

        {/* Service 2 */}
        <div className="bg-card p-6 rounded-lg border shadow-sm flex flex-col">
          <div className="bg-primary/10 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
            <Globe size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t('services.tracking.title')}</h3>
          <p className="text-muted-foreground mb-6 flex-grow">
            {t('services.tracking.description')}
          </p>
          <Button asChild size="sm" className="self-start">
            <Link to="/dashboard">{t('services.learn')}</Link>
          </Button>
        </div>

        {/* Service 3 */}
        <div className="bg-card p-6 rounded-lg border shadow-sm flex flex-col">
          <div className="bg-primary/10 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
            <Phone size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t('services.communication.title')}</h3>
          <p className="text-muted-foreground mb-6 flex-grow">
            {t('services.communication.description')}
          </p>
          <Button asChild size="sm" className="self-start">
            <Link to="/learn-more">{t('services.learn')}</Link>
          </Button>
        </div>

        {/* Service 4 */}
        <div className="bg-card p-6 rounded-lg border shadow-sm flex flex-col">
          <div className="bg-primary/10 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
            <Users size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t('services.analytics.title')}</h3>
          <p className="text-muted-foreground mb-6 flex-grow">
            {t('services.analytics.description')}
          </p>
          <Button asChild size="sm" className="self-start">
            <Link to="/learn-more">{t('services.learn')}</Link>
          </Button>
        </div>

        {/* Service 5 */}
        <div className="bg-card p-6 rounded-lg border shadow-sm flex flex-col">
          <div className="bg-primary/10 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
            <Mail size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t('services.notifications.title')}</h3>
          <p className="text-muted-foreground mb-6 flex-grow">
            {t('services.notifications.description')}
          </p>
          <Button asChild size="sm" className="self-start">
            <Link to="/learn-more">{t('services.learn')}</Link>
          </Button>
        </div>

        {/* Service 6 */}
        <div className="bg-card p-6 rounded-lg border shadow-sm flex flex-col">
          <div className="bg-primary/10 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
            <Globe size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t('services.reporting.title')}</h3>
          <p className="text-muted-foreground mb-6 flex-grow">
            {t('services.reporting.description')}
          </p>
          <Button asChild size="sm" className="self-start">
            <Link to="/learn-more">{t('services.learn')}</Link>
          </Button>
        </div>
      </div>

      {/* Service Plans */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 font-display">{t('services.plans.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-card p-8 rounded-lg border shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{t('services.plans.basic.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('services.plans.basic.description')}</p>
            <ul className="space-y-2 mb-6 flex-grow">
              <li className="flex items-center">
                <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.basic.feature1')}
              </li>
              <li className="flex items-center">
                <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.basic.feature2')}
              </li>
              <li className="flex items-center">
                <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.basic.feature3')}
              </li>
            </ul>
            <Button size="sm" className="self-start">{t('services.plans.get')}</Button>
          </div>

          {/* Standard Plan */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg shadow-lg flex flex-col relative">
            <div className="absolute -top-3 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
              {t('services.plans.popular')}
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('services.plans.standard.title')}</h3>
            <p className="opacity-90 mb-6">{t('services.plans.standard.description')}</p>
            <ul className="space-y-2 mb-6 flex-grow">
              <li className="flex items-center">
                <span className="bg-primary-foreground/20 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.standard.feature1')}
              </li>
              <li className="flex items-center">
                <span className="bg-primary-foreground/20 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.standard.feature2')}
              </li>
              <li className="flex items-center">
                <span className="bg-primary-foreground/20 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.standard.feature3')}
              </li>
              <li className="flex items-center">
                <span className="bg-primary-foreground/20 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.standard.feature4')}
              </li>
            </ul>
            <Button variant="secondary" size="sm" className="self-start">{t('services.plans.get')}</Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-card p-8 rounded-lg border shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{t('services.plans.premium.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('services.plans.premium.description')}</p>
            <ul className="space-y-2 mb-6 flex-grow">
              <li className="flex items-center">
                <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.premium.feature1')}
              </li>
              <li className="flex items-center">
                <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.premium.feature2')}
              </li>
              <li className="flex items-center">
                <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.premium.feature3')}
              </li>
              <li className="flex items-center">
                <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.premium.feature4')}
              </li>
              <li className="flex items-center">
                <span className="bg-primary/10 w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs">✓</span>
                {t('services.plans.premium.feature5')}
              </li>
            </ul>
            <Button size="sm" className="self-start">{t('services.plans.get')}</Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/10 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">{t('services.cta.title')}</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t('services.cta.description')}
        </p>
        <Button asChild size="lg">
          <Link to="/contact">{t('services.cta.button')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default Services;
