import styles from "../Skills.module.css";

const SkillsList = ({ skills }) => {
	return (
		<div className={styles.skillsList}>
			{skills.map((skill, index) => (
				<div key={`${skill.title}-${index}`} className={styles.skillItem}>
					<div className={styles.skillIconWrapper}>
						<img src={skill.icon} alt={skill.title} />
					</div>
					<p>{skill.title}</p>
				</div>
			))}
		</div>
	);
};

export default SkillsList;
