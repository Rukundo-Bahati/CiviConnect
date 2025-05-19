import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "@/utils/translations";
import { Label } from "@/components/ui/label"; // ✅ Correct

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Test credentials
  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";
  const userEmail = "user@example.com";
  const userPassword = "user123";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if admin credentials
    if (email === adminEmail && password === adminPassword) {
      // Simulate API call delay
      setTimeout(() => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: "admin1",
            name: "Admin User",
            email: adminEmail,
            role: "admin",
          })
        );

        setIsLoading(false);
        toast({
          title: t("auth.success"),
          description: t("auth.welcomeBack"),
        });
        navigate("/admin");
      }, 1500);
      return;
    }

    // Check if user credentials
    if (email === userEmail && password === userPassword) {
      // Simulate API call delay
      setTimeout(() => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: "user1",
            name: "Test User",
            email: userEmail,
            role: "user",
          })
        );

        setIsLoading(false);
        toast({
          title: t("auth.success"),
          description: t("auth.welcomeBack"),
        });
        navigate("/dashboard");
      }, 1500);
      return;
    }

    // Invalid credentials
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: t("auth.failed"),
        description: t("auth.invalidCredentials"),
        variant: "destructive",
      });
    }, 1500);
  };

  return (
    <div className="container-custom max-w-md py-12">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            {t("auth.loginTitle")}
          </CardTitle>
          <CardDescription>{t("auth.loginDesc")}</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t("auth.email")}</Label>
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t("auth.password")}</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  {t("auth.forgot")}
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? t("auth.loggingIn") : t("nav.login")}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              {t("auth.noAccount")}{" "}
              <Link to="/signup" className="text-primary hover:underline">
                {t("auth.createAccount")}
              </Link>
            </p>

            {/* Test credentials display */}
            <div className="flex flex-col md:flex-row justify-between gap-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex-1">
                <h2 className="text-base font-semibold text-gray-800 mb-1">
                  Admin Test Credentials
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  <i>admin@example.com</i>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Password:</span> <i>admin123</i>
                </p>
              </div>
              <div className="flex-1">
                <h2 className="text-base font-semibold text-gray-800 mb-1">
                  User Test Credentials
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  <i>user@example.com</i>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Password:</span> <i>user123</i>
                </p>
              </div>
            </div>
          </CardFooter>
          
        </form>
      </Card>
    </div>
  );
};

export default Login;
