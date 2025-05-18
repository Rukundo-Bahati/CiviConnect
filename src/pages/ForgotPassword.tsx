
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useTranslation } from "@/utils/translations";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: t('auth.resetEmailSent'),
        description: t('auth.resetInstructions'),
      });
    }, 1500);
  };

  return (
    <div className="container-custom max-w-md py-12">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">{t('auth.forgotPassword')}</CardTitle>
          <CardDescription>
            {t('auth.forgotPasswordDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="bg-green-50 text-green-700 p-4 rounded-md">
                {t('auth.resetEmailSent')}
              </div>
              <p className="text-muted-foreground text-sm">{t('auth.checkEmail')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('auth.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? t('auth.sending') : t('auth.resetPassword')}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter>
          <div className="text-sm text-center w-full">
            <Link to="/login" className="text-primary hover:underline">
              {t('auth.backToLogin')}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPassword;
