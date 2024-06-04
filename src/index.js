import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";

import "./App.css";

import { Resume } from "./Pages/Resume";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    resources: {
      en: common_en,
      es: common_es
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Resume />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
