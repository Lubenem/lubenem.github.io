import { Globe } from "lucide-react";

interface LanguageToggleProps {
  current: 'en' | 'ua';
  onChange: (lang: 'en' | 'ua') => void;
}

export function LanguageToggle({ current, onChange }: LanguageToggleProps) {
  return (
    <button
      onClick={() => onChange(current === 'en' ? 'ua' : 'en')}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 hover:bg-white text-primary text-sm font-medium transition-all shadow-sm border border-primary/10"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{current}</span>
    </button>
  );
}
