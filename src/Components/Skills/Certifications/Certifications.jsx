import styles from "../Skills.module.css";

const Certifications = ({ certifications, onSelect }) => {
	return (
		<div className={styles.certificationsSection}>
			<h4 className={styles.certificationsTitle}>Certifications & Education</h4>
			<div className={styles.certificationsGrid}>
				{certifications.map((cert, index) => (
					<div
						key={index}
						className={styles.certificationCard}
						onClick={() => onSelect(index)}
					>
						<div className={styles.certImageWrapper}>
							<img src={cert.image} alt={cert.title} />
						</div>
						<div className={styles.certInfo}>
							<h5>{cert.title}</h5>
							<p className={styles.certProvider}>{cert.provider}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Certifications;
