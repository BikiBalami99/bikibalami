import React from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skillsData";
import SectionRow from "./SectionRow";

const Skills = () => {
  return (
    <section>
      <div className="sectionTitle">
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
        <h2>Skills</h2>
      </div>

      {/* Each Row is rendered below */}
      <div className={styles.allSkills}>
        {skillsData.map((skillType) => {
          return <SectionRow key={skillType.id} skillType={skillType} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
