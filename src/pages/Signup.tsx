
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/utils/translations";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock signup process - in a real app, this would connect to a backend
    setTimeout(() => {
      toast({
        title: t('auth.accountCreated'),
        description: t('auth.welcomeNew'),
      });
      
      // For demo purposes, automatically log in after signup
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify({ email, name }));
      
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="container-custom flex items-center justify-center min-h-[80vh] py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">{t('auth.signupTitle')}</CardTitle>
          <CardDescription>{t('auth.signupDesc')}</CardDescription>
        </CardHeader>
        <form onSubmit={handleSignup}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('auth.name')}</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder={t('auth.fullName')} 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('auth.email')}</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t('auth.password')}</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">{t('auth.passwordReq')}</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full mb-4" disabled={isLoading}>
              {isLoading ? t('auth.creating') : t('nav.signup')}
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              {t('auth.haveAccount')}{' '}
              <Link to="/login" className="text-primary hover:underline">
                {t('nav.login')}
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
