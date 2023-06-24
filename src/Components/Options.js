import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { ParticlesParams } from "../Schemas/Particles";
import JsPDF from 'jspdf';
import * as htmlToImage from "html-to-image";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export const Options = () => {
  var { lsTheme, lsIcon, lsSnow } = "";
  const { language, changeLanguage } = i18next
  try {
    lsTheme = localStorage.getItem("theme") || 'dark';
    lsIcon = localStorage.getItem("icon");
    lsSnow = JSON.parse(localStorage.getItem("snow")) || true;
  } catch (e) {
    console.error(`All Cookies blocked - Error: ${e.message}`);
  }

  const [theme, setTheme] = useState(lsTheme);
  const [icon, setIcon] = useState(lsIcon || "bx-moon");
  const [snow, setSnow] = useState(lsSnow);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("icon", icon);
    localStorage.setItem("snow", snow);
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-theme");
  }, [theme, snow, icon]);

  const SnowEffect = () =>
    snow && theme === "dark" && <Particles params={ParticlesParams} />;


  const changeLang = () => {
    changeLanguage(language === 'es' ? 'en' : 'es').then((t) => {
      console.log(t)
    })
  }

  const downloadResume = () => {
    htmlToImage.toJpeg(document.getElementById("area-cv")).then(function (dataUrl) {
      const pdf = new JsPDF('portrait','mm',[language === 'es' ? 2012 : 1796, 968]);
    
      // Calculate the aspect ratio to maintain the image's dimensions
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = document.getElementById("area-cv").offsetHeight * imgWidth / document.getElementById("area-cv").offsetWidth;

      pdf.addImage(dataUrl, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('CV_Iñigo_Aranguren.pdf');
    })
  }

  return (
    <div className="home__options">
      <i
        className="bx enable-snow"
        id="lang-button"
        onClick={changeLang}
      >
        {language === 'es' ? 'EN' : 'ES'}
      </i>
      <SnowEffect />
      <i
        className={`bx bxs-file-pdf change-theme`}
        title="Download PDF"
        id="download-pdf-button"
        onClick={downloadResume}
      />
    </div>
  );
};
