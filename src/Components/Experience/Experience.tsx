import { useState, useRef, useEffect } from "react";
import SectionTitle from "../../helperComponents/SectionTitle/SectionTitle";
import { experiences } from "../../data/experience";
import styles from "./Experience.module.css";
import { Briefcase, Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
	return (
		<section id="experience" className={styles.section}>
			<SectionTitle title="EXPERIENCE" speed="normal" direction="left" />
			<div className={styles.experienceContainer}>
				<h3 className={styles.sectionHeading}>My Engineering Journey</h3>
				<div className={styles.container}>
					<div className={styles.timeline}>
						{experiences.map((exp, index) => (
							<div key={exp.id} className={styles.timelineItem}>
								<div className={styles.timelineDot}></div>
								<div className={styles.contentBox}>
									<div className={styles.header}>
										<div>
											<h3 className={styles.role}>{exp.role}</h3>
											<h4 className={styles.company}>
												<Building className={styles.iconInfo} size={16} />
												{exp.company}
												{exp.type && <span className={styles.typeBadge}>{exp.type}</span>}
											</h4>
										</div>
										<div className={styles.meta}>
											<div className={styles.period}>
												<Calendar className={styles.iconInfo} size={14} />
												{exp.period}
											</div>
										</div>
									</div>

									<ul className={styles.descriptionList}>
										{exp.description.map((desc, i) => (
											<li key={i} className={styles.descriptionItem}>
												{desc}
											</li>
										))}
									</ul>

									<div className={styles.skillsContainer}>
										{exp.skills.map((skill, i) => (
											<span key={i} className={styles.skillBadge}>
												{skill}
											</span>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
