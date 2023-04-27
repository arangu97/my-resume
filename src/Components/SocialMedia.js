import React from "react";

export const SocialMedia = ({ social }) => {
  return (
    <section className="social section">
      <div className="social__container bd-grid">
        {social.map((social) => <Social key={social.name} {...social} />)}
      </div>
    </section>
  );
};

const Social = ({ label, url, className }) => (
  <a href={url} target="_blank" rel="noreferrer" className="social__link">
    <i className={`bx ${className} social__icon`}></i> {label}
  </a>
);
