import React from "react";

export const Skills = ({
  label,
  skills,
}) => {
  console.log(skills)
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section-title">{label}</h2>
        <div className="skills__content bd-grid">
          <div className="skills__data">
            {skills.map((skill) => <SkillGroup key={skill} skillGroup={skill} />)}
          </div>
        </div>
      </section>
    </>
  );
};

const SkillGroup = ({ skillGroup }) => (
  <div className="skills__group">
    <b className="skills_group_title">{skillGroup.title}</b>
    <ul className="skills__group_items">
      {skillGroup.items.map((skill) => <Skill key={skill} skill={skill} />)}
    </ul>
  </div>
);

const Skill = ({ skill }) => (
  <li className="skills__name">
    <span className="skills__circle" /> {skill}
  </li>
);
