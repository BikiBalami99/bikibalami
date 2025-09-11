import styles from "../Skills.module.css";

const CertificationModal = ({
	isOpen,
	isClosing,
	dialogRef,
	certification,
	onClose,
	handleDialogClick,
}) => {
	if (!isOpen) return null;
	return (
		<dialog
			ref={dialogRef}
			className={`${styles.modal} ${isClosing ? styles.closing : ""}`}
			onClick={handleDialogClick}
		>
			<div className={styles.modalContent}>
				<div className={styles.certificationDetails}>
					<div className={styles.certImageContainer}>
						<img src={certification.image} alt={certification.title} />
					</div>
					<div className={styles.certTextContent}>
						<h3>{certification.title}</h3>
						<p className={styles.certProvider}>{certification.provider}</p>
						<p className={styles.certDescription}>{certification.description}</p>
					</div>
				</div>
				<form method="dialog">
					<button
						className={`circleButton ${styles.modalCloseButton}`}
						type="button"
						onClick={onClose}
						style={{ width: "40px" }}
					>
						<p>&times;</p>
					</button>
				</form>
			</div>
		</dialog>
	);
};

export default CertificationModal;
