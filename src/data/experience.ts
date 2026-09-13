export type Experience = {
	id: string;
	company: string;
	role: string;
	period: string;
	type?: string;
	description: string[];
	skills: string[];
};

export const experiences: Experience[] = [
	{
		id: "1",
		company: "Ukudala",
		role: "Lead Full-Stack Developer",
		period: "2024/05 - Present",
		type: "Contractor",
		description: [
			"Currently leading and mentoring a small team of developers while maintaining a heavy individual contribution of 2,000+ commits across 14 repositories.",
			"Architected a high-performance monorepo to rapidly deploy configurable client portals.",
			"Built two full-stack SaaS platforms using Next.js and TypeScript, doubling performance through server-side optimizations.",
			"Architected a production serverless monorepo powering 2 SaaS products, implementing real-time WebSocket chat, DynamoDB-backed RBAC, and Lambda APIs.",
		],
		skills: ["Next.js", "AWS", "TypeScript", "DynamoDB", "Lambda", "Team Leadership"],
	},
	{
		id: "2",
		company: "Tokyo Coding Club",
		role: "Tech Instructor",
		period: "2024/10 - Present",
		type: "Contractor",
		description: [
			"Leveraging expertise in React, Python, and JavaScript to design and deliver student-centered curricula.",
			"Guided students (ages 5–18) in deconstructing complex programming concepts.",
			"Helped students build a strong foundation in algorithmic logic and professional coding habits.",
		],
		skills: ["Mentorship", "React", "Python", "JavaScript", "Curriculum Design"],
	},
];
