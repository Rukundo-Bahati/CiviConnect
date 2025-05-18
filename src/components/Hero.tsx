
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/utils/translations";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 leading-tight">
              {t('app.name')}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              {t('app.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/login">
                  {t('nav.getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">
                  {t('nav.learnMore')}
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur"></div>
              <div className="relative bg-card rounded-lg shadow-xl overflow-hidden border">
                <img 
                  src="/com.avif" 
                  alt="Citizen engagement app on mobile device"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
