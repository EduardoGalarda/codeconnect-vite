import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const languages = [
    { code: 'en', label: t("english"), icon: 'EN' },
    { code: 'es', label: t("spanish"), icon: 'ES' },
    { code: 'pt', label: t("portuguese"), icon: 'PT' },
  ]

  return (
    <div className="flex flex-col gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className="flex items-center gap-3 w-full px-3 py-2 hover:bg-accent rounded-md transition-all text-sm font-medium group"
        >
          <div className="w-6 h-6 flex items-center justify-center bg-muted rounded text-[10px] font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {lang.icon}
          </div>
          {lang.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;

