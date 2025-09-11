import PropTypes from "prop-types";
import styles from "./TechIcons.module.css";
const TechIcons = ({ skillType }) => {
	const techIcons = Array.isArray(skillType?.techIcons) ? skillType.techIcons : [];
	return (
		<div className={styles.techIcons}>
			{techIcons.map((tech) => {
				const title = tech?.title ?? "";
				const icon = tech?.icon ?? "";
				return (
					<div className={styles.eachTech} key={title || icon}>
						<div className={styles.techIconWrapper}>
							<img src={icon} alt={title} />
						</div>
						<p>{title}</p>
					</div>
				);
			})}
		</div>
	);
};

TechIcons.propTypes = {
	skillType: PropTypes.shape({
		techIcons: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				icon: PropTypes.string.isRequired,
			})
		),
	}).isRequired,
};

TechIcons.defaultProps = {
	skillType: { techIcons: [] },
};

export default TechIcons;
