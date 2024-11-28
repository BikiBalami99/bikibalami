import React from "react";
import SkillSectionRow from "./SkillSectionRow/SkillSectionRow";
import SectionTitle from "../../helperComponents/SectionTitle/SectionTitle";
import skillsData from "../../data/skillsData";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section>
      <SectionTitle title="SKILLS" />
      {/* Each Row is rendered below */}
      <div className={styles.allSkills}>
        <h3>My Arsenal</h3>
        {skillsData.map((skillType) => {
          return <SkillSectionRow key={skillType.id} skillType={skillType} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
