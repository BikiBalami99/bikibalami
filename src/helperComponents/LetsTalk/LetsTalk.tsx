import React, { useEffect, useState } from "react";
import styles from "./LetsTalk.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ButtonLoadingAnimation from "../ButtonLoadingAnimation/ButtonLoadingAnimation";

const LetsTalk = ({ onClose }: { onClose: () => void }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [formDisabled, setFormDisabled] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setFormDisabled(true);
		setIsLoading(true);
		setIsSuccess(false);
		setError(null);

		const formData = new FormData(e.currentTarget);

		try {
			const response = await fetch("https://formsubmit.co/bikibalami1999@gmail.com", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				setIsSuccess(true);
				console.log("We succesfully sent a request");
				handleClose();
			} else {
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}
		} catch (error: unknown) {
			console.error(error);
			setError(error instanceof Error ? error.message : "An unknown error occured");
			handleClose();
		} finally {
			setIsLoading(false);
		}
	}

	function handleClose() {
		setTimeout(() => {
			// Restore scroll before closing modal
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
			onClose();
			setIsLoading(false);
			setIsSuccess(false);
			setError(null);
			setFormDisabled(false);
		}, 3000);
	}

	return (
		<div className={styles.modalContent}>
			{/* Header */}
			<div className={styles.header}>
				<h2 className={styles.title}>Let's Talk</h2>
				<p className={styles.subtitle}>
					Ready to start your next project? I'd love to hear about your ideas.
				</p>
			</div>

			{/* Form */}
			<form
				className={styles.form}
				onSubmit={handleSubmit}
				data-loading={isLoading}
				data-success={isSuccess}
				data-error={error ? "true" : "false"}
				method="POST"
			>
				<input
					type="hidden"
					name="_subject"
					value="Submission from your portfolio website"
				/>
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_next" value="#"></input>

				<div className={styles.inputGroup}>
					<label htmlFor="name" className={styles.label}>
						Full Name
					</label>
					<input
						disabled={formDisabled}
						id="name"
						type="text"
						name="name"
						required
						className={styles.input}
					/>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="email" className={styles.label}>
						Email Address
					</label>
					<input
						disabled={formDisabled}
						id="email"
						type="email"
						name="email"
						required
						className={styles.input}
					/>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="message" className={styles.label}>
						Your Message
					</label>
					<textarea
						disabled={formDisabled}
						id="message"
						name="message"
						rows={6}
						required
						className={styles.textarea}
						placeholder="Tell me about your project, ideas, or just say hello!"
					></textarea>
				</div>

				<PrimaryButton
					buttonModifierClass={{ paddingTop: "3rem", width: "100%" }}
					textModifierClass={{ fontSize: "1.3rem" }}
					type="submit"
				>
					Send
				</PrimaryButton>
			</form>

			{/* Loading/Success/Error Overlay */}
			{(isLoading || isSuccess || error) && (
				<div className={styles.overlay}>
					<div className={styles.overlayContent}>
						{isLoading && (
							<>
								<div className={styles.spinner}></div>
								<p className={styles.overlayText}>Sending your message...</p>
							</>
						)}
						{isSuccess && (
							<>
								<div className={styles.successIcon}>✓</div>
								<p className={styles.overlayText}>Thank you for your message!</p>
								<p className={styles.overlaySubtext}>I'll get back to you soon.</p>
							</>
						)}
						{error && (
							<>
								<div className={styles.errorIcon}>✗</div>
								<p className={styles.overlayText}>Something went wrong</p>
								<p className={styles.overlaySubtext}>
									Please email me directly at bikibalami1999@gmail.com or try refreshing
									the page.
								</p>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default LetsTalk;
