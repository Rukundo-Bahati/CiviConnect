
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/ThemeProvider";
import { useTranslation } from "@/utils/translations";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 focus-visible:ring-0 focus-visible:ring-offset-0">
          {language === "en" ? "EN" : "RW"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("rw")}>
          Kinyarwanda
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
