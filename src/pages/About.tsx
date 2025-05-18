
import { useTranslation } from "@/utils/translations";
import { Mail, Phone, Users, Globe } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container-custom py-12 md:py-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-display">{t('about.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('about.subtitle')}
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-card p-8 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{t('about.mission.title')}</h2>
          <p className="text-muted-foreground">
            {t('about.mission.description')}
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{t('about.vision.title')}</h2>
          <p className="text-muted-foreground">
            {t('about.vision.description')}
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 font-display">{t('about.team.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <Users size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-muted-foreground mb-2">{t('about.team.ceo')}</p>
            <p className="text-sm">{t('about.team.member1')}</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <Users size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-muted-foreground mb-2">{t('about.team.cto')}</p>
            <p className="text-sm">{t('about.team.member2')}</p>
          </div>
          
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <Users size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Robert Johnson</h3>
            <p className="text-muted-foreground mb-2">{t('about.team.coo')}</p>
            <p className="text-sm">{t('about.team.member3')}</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-6 font-display">{t('about.story.title')}</h2>
        <div className="bg-card p-8 rounded-lg border shadow-sm">
          <p className="mb-4">
            {t('about.story.p1')}
          </p>
          <p className="mb-4">
            {t('about.story.p2')}
          </p>
          <p>
            {t('about.story.p3')}
          </p>
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-10 font-display">{t('about.values.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.values.transparency')}</h3>
            <p className="text-muted-foreground">{t('about.values.transparency.desc')}</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Globe size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.values.innovation')}</h3>
            <p className="text-muted-foreground">{t('about.values.innovation.desc')}</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.values.integrity')}</h3>
            <p className="text-muted-foreground">{t('about.values.integrity.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
