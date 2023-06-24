import React from "react";
import { useTranslation } from 'react-i18next';

export const Academic = ({ academic }) => {
  const { t } = useTranslation();

  return (
    <section className="academic-experience section" id="education">
      <h2 className="section-title">{t('header.academic')}</h2>
      <div className="education__container bd-grid">
        {academic.map((academy) => (
          <Academy key={academy.institution} {...academy} />
        ))}
      </div>
    </section>
  );
};

const Academy = ({ career, date, institution, description }) => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="education__data bd-grid">
        <h3 className="education__title">{career}</h3>
        <span className="education__year">{date}</span>
        <span className="education__studies">{institution}</span>
        <span className="education__description">{description}</span>
      </div>
    </div>
  );
};
