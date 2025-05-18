
import { useState } from "react";
import { useTranslation } from "@/utils/translations";
import { Mail, Phone, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.message')
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container-custom py-12 md:py-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-display">{t('contact.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Contact Information */}
        <div className="md:col-span-1 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{t('contact.email')}</h3>
                  <p className="text-muted-foreground">info@civiconnect.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{t('contact.phone')}</h3>
                  <p className="text-muted-foreground">+250 788 123 456</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{t('contact.address')}</h3>
                  <p className="text-muted-foreground">
                    KG 123 St, Kigali<br />
                    Rwanda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-3">{t('contact.hours.title')}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>{t('contact.hours.weekdays')}</span>
                <span>9:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t('contact.hours.saturday')}</span>
                <span>10:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t('contact.hours.sunday')}</span>
                <span>{t('contact.hours.closed')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-card p-8 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.form.name')}</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('contact.form.namePlaceholder')}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('contact.form.emailPlaceholder')}
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                <Input 
                  id="subject" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t('contact.form.subjectPlaceholder')}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.form.message')}</Label>
                <Textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={6}
                  required 
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('contact.location')}</h2>
        <div className="bg-card aspect-video rounded-lg border shadow-sm overflow-hidden">
          {/* Placeholder for an actual map */}
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Globe className="h-16 w-16 text-muted-foreground opacity-30" />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">{t('contact.faq.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-medium mb-2">{t('contact.faq.q1')}</h3>
            <p className="text-muted-foreground">{t('contact.faq.a1')}</p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-medium mb-2">{t('contact.faq.q2')}</h3>
            <p className="text-muted-foreground">{t('contact.faq.a2')}</p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-medium mb-2">{t('contact.faq.q3')}</h3>
            <p className="text-muted-foreground">{t('contact.faq.a3')}</p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-medium mb-2">{t('contact.faq.q4')}</h3>
            <p className="text-muted-foreground">{t('contact.faq.a4')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
