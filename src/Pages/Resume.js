import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

import { Profile } from "../Components/Profile";
import { Academic } from "../Components/Academic";
import { Skills } from "../Components/Skills";
import { Works } from "../Components/Works";
import { AboutMe } from "../Components/AboutMe";
import { Menu } from "../Components/Menu";
import { SEO } from "../Components/SEO";

import { Menu as menuSchema } from "../Schemas/Menu";

export const Resume = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const { t } = useTranslation();

  const profile = {
    name: t("profile.name"),
    occupation: t("profile.occupation"),
    location: t("profile.location"),
    email: t("profile.email"),
    telephone: t("profile.telephone"),
    image: "images/me.jpeg",
  };

  const aboutMe = {
    label: t('aboutMe.label'),
    description: t('aboutMe.description')
  }

  let skills = []
  for (let j = 0; j < 5; j++) {
    let nSkills = [4, 3, 2, 3, 2]
    let items = []
    for (let k = 0; k < nSkills[j]; k++) {
      items.push(t('skills.' + j + '.item.' + k))
    }
    skills.push({
      title: t('skills.' + j + '.title'),
      items: items
    })
  }

  let social = []
  social.push({
    label: t('socialMedia.social.0.label'),
    name: t('socialMedia.social.0.name'),
    url: t('socialMedia.social.0.url'),
    className: t('socialMedia.social.0.className'),
  })

  social.push(
  {
    label: t('socialMedia.social.1.label'),
    name: t('socialMedia.social.1.name'),
    url: t('socialMedia.social.1.url'),
    className: t('socialMedia.social.1.className'),
  })

  const socialMedia = {
    label: t('socialMedia.label'),
    social: social
  }

  let works = []
  for (let k = 0; k < 2; k++) {
    let description = []
    let nDescription = [6, 4]

    for (let m = 0; m < nDescription[k]; m++) {
      description.push(t('experience.works.' + k + '.description.' + m))
    }
    works.push({
      title: t('experience.works.' + k + '.title'),
      period: t('experience.works.' + k + '.period'),
      company: t('experience.works.' + k + '.company'),
      description: description
    })
  }

  let academic = []
  for (let k = 0; k < 4; k++) {
    academic.push({
      career: t('experience.academic.' + k + '.career'),
      date: t('experience.academic.' + k + '.date'),
      institution: t('experience.academic.' + k + '.institution'),
      // description: t('experience.academic.' + k + '.description'),
    })
  }

  const experience = {
    works: works, 
    academic: academic
  }


  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <SEO  {...profile} {...aboutMe}/>
      {!matches && <Menu {...menuSchema} />}
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile {...profile} socialMedia={socialMedia} />
            <Skills skills={skills} label={t('skills.label')}/>
          </div>
          <div className="resume__right">
            <AboutMe {...aboutMe} />
            <Works {...experience} />
            <Academic {...experience} />
          </div>
        </div>
      </main>
    </>
  );
};
