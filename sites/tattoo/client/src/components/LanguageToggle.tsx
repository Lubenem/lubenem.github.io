import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-md p-1" data-testid="language-toggle">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        className="h-7 px-3 text-xs font-semibold"
        onClick={() => setLanguage("en")}
        data-testid="button-lang-en"
      >
        EN
      </Button>
      <Button
        variant={language === "ua" ? "default" : "ghost"}
        size="sm"
        className="h-7 px-3 text-xs font-semibold"
        onClick={() => setLanguage("ua")}
        data-testid="button-lang-ua"
      >
        UA
      </Button>
    </div>
  );
}
