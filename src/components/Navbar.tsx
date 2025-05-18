
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "@/utils/translations";
import { LanguageToggle } from "./LanguageToggle";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in when component mounts
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="bg-primary h-8 w-8 rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold">CC</span>
            </span>
            <span className="font-display font-semibold text-xl hidden sm:inline-block">CiviConnect</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary font-medium">
              {t('nav.about')}
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary font-medium">
              {t('nav.services')}
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary font-medium">
              {t('nav.contact')}
            </Link>
            <Link to="/learn-more" className="text-foreground hover:text-primary font-medium">
              {t('nav.learnMore')}
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            
            {isLoggedIn ? (
              <div className="hidden md:flex items-center space-x-3">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>{t('nav.dashboard')}</span>
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  {t('nav.logout')}
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">{t('nav.login')}</Link>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link to="/signup">{t('nav.signup')}</Link>
                </Button>
              </div>
            )}
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-foreground hover:text-primary font-medium px-2 py-1">
                    {t('nav.home')}
                  </Link>
                  <Link to="/about" className="text-foreground hover:text-primary font-medium px-2 py-1">
                    {t('nav.about')}
                  </Link>
                  <Link to="/services" className="text-foreground hover:text-primary font-medium px-2 py-1">
                    {t('nav.services')}
                  </Link>
                  <Link to="/contact" className="text-foreground hover:text-primary font-medium px-2 py-1">
                    {t('nav.contact')}
                  </Link>
                  <Link to="/learn-more" className="text-foreground hover:text-primary font-medium px-2 py-1">
                    {t('nav.learnMore')}
                  </Link>
                  
                  <div className="pt-4 border-t">
                    {isLoggedIn ? (
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start" size="sm" asChild>
                          <Link to="/dashboard">
                            <User className="mr-2 h-4 w-4" />
                            <span>{t('nav.dashboard')}</span>
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" size="sm" onClick={handleLogout}>
                          {t('nav.logout')}
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full" asChild>
                          <Link to="/login">{t('nav.login')}</Link>
                        </Button>
                        <Button variant="default" className="w-full" asChild>
                          <Link to="/signup">{t('nav.signup')}</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
