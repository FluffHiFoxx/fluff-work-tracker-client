import { settings } from "@shared/settings";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import translationEN from "./commonEN.json";
import translationHU from "./commonHU.json";

const resources = {
	en: {
		translation: translationEN
	},
	hu: {
		translation: translationHU
	}
};

i18next.use(initReactI18next).init({
	resources,
	lng: settings.language,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false
	}
});

i18next.init({
	interpolation: { escapeValue: false } // React already does escaping
});

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<I18nextProvider i18n={i18next}>{children}</I18nextProvider>
		</>
	);
};

export default LanguageProvider;
