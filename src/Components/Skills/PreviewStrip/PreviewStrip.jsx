import styles from "../Skills.module.css";
import { allSkills } from "../../../data/skillsData";

const PreviewStrip = ({ side, categories, activeIdx }) => {
	if (!categories || categories.length === 0) return null;
	const sideClass = side === "left" ? styles.previewLeftSide : styles.previewRightSide;
	const flatSkills = categories.flatMap((c) => allSkills[c.key]);
	return (
		<div className={`${styles.previewStrip} ${sideClass}`}>
			{flatSkills.map((skill, i) => (
				<div
					className={styles.honeyItem}
					key={`${side === "left" ? "L" : "R"}-${activeIdx}-${skill.title}-${i}`}
				>
					<img src={skill.icon} alt="" />
				</div>
			))}
		</div>
	);
};

export default PreviewStrip;
