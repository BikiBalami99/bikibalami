// All skills organized by category based on resume
export const allSkills = {
	frontend: [
		{ title: "Next.js", icon: "/assets/icons/FrontEndDevelopment/NextJs.jpg" },
		{ title: "React", icon: "/assets/icons/FrontEndDevelopment/React.jpg" },
		{ title: "TypeScript", icon: "/assets/icons/FrontEndDevelopment/TypeScript.jpg" },
		{ title: "JavaScript", icon: "/assets/icons/FrontEndDevelopment/JavaScript.jpg" },
		{ title: "HTML5", icon: "/assets/icons/FrontEndDevelopment/HTML.jpg" },
		{ title: "CSS3", icon: "/assets/icons/FrontEndDevelopment/CSS.jpg" },
		{ title: "Redux", icon: "/assets/icons/FrontEndDevelopment/redux.jpg" },
		{ title: "UI/UX Design", icon: "/assets/icons/GraphicDesign/Figma.jpeg" },
		{ title: "REST APIs", icon: "/assets/icons/FrontEndDevelopment/rest-apis.jpg" }, // updated
	],
	backend: [
		{ title: "Node.js", icon: "/assets/icons/Backend/nodejs.webp" },
		{ title: "Express.js", icon: "/assets/icons/Backend/ExpressJS.webp" },
		{ title: "PostgreSQL", icon: "/assets/icons/Backend/PostgreSQL.webp" },
		{ title: "Prisma", icon: "/assets/icons/Backend/Prisma.webp" },
		{ title: "Python", icon: "/assets/icons/ComputerScience/Python.jpg" },
	],
	devops: [
		{ title: "AWS Amplify", icon: "/assets/icons/DevOps/AWS-Amplify.webp" },
		{ title: "AWS Cognito", icon: "/assets/icons/DevOps/AWS-Cognito.webp" },
		{ title: "AWS DynamoDB", icon: "/assets/icons/DevOps/AWS-DynamoDB.webp" },
		{ title: "AWS Lambda", icon: "/assets/icons/DevOps/AWS-Lambda.webp" },
		{ title: "AWS API Gateway", icon: "/assets/icons/DevOps/AWS-API-Gateway.webp" },
		{ title: "AWS S3", icon: "/assets/icons/DevOps/AWS-S3.webp" },
	],
	tools: [
		{ title: "Git/GitHub", icon: "/assets/icons/FrontEndDevelopment/git.jpg" },
		{ title: "Figma", icon: "/assets/icons/GraphicDesign/Figma.jpeg" },
		{ title: "Photoshop", icon: "/assets/icons/GraphicDesign/photoshop.jpeg" },
		{ title: "Illustrator", icon: "/assets/icons/GraphicDesign/illustrator.jpeg" },
		{ title: "Procreate", icon: "/assets/icons/GraphicDesign/Procreate.jpeg" },
		{ title: "Blender 3D", icon: "/assets/icons/GraphicDesign/Blender.jpeg" },
		{ title: "InDesign", icon: "/assets/icons/GraphicDesign/indesign.jpeg" },
	],
	computerScience: [
		{ title: "C", icon: "/assets/icons/ComputerScience/C.jpg" },
		{ title: "Java", icon: "/assets/icons/ComputerScience/java.jpg" },
		{
			title: "Data Structures",
			icon: "/assets/icons/ComputerScience/Data-structures.jpg",
		},
		{
			title: "Discrete Mathematics",
			icon: "/assets/icons/ComputerScience/Data-structures.jpg",
		},
		{ title: "Computer Systems", icon: "/assets/icons/ComputerScience/C.jpg" },
		{
			title: "Probability & Statistics",
			icon: "/assets/icons/ComputerScience/Probability-and-statistics.png",
		},
		{
			title: "Program Design & Abstraction",
			icon: "/assets/icons/ComputerScience/java.jpg",
		},
		{ title: "Calculus I/II", icon: "/assets/icons/ComputerScience/calculus.webp" },
	],
};

// Certifications with descriptions
export const certifications = [
	{
		title: "Front End Engineer Path",
		provider: "Codecademy",
		image: "/assets/certificates/codecademy/Front_End_Engineer_Path.png",
		description:
			"HTML/CSS, JavaScript, React, TypeScript, Git, testing, accessibility, and projects.",
	},
	{
		title: "Next.js Course",
		provider: "Codecademy",
		image: "/assets/certificates/codecademy/Next.jpg",
		description:
			"App Router, SSR/SSG, routing, data fetching, API routes, middleware, deployment.",
	},
	{
		title: "React Development",
		provider: "Codecademy",
		image: "/assets/certificates/codecademy/React.jpg",
		description:
			"Hooks, state/effects, props, context, routing, forms, performance patterns.",
	},
	{
		title: "Mastering TypeScript",
		provider: "Udemy",
		image: "/assets/certificates/udemy/Mastering TypeScript.jpg",
		description:
			"Advanced types, generics, utility types, decorators, tsconfig, tooling, and React usage.",
	},
	{
		title: "TypeScript Fundamentals",
		provider: "Codecademy",
		image: "/assets/certificates/codecademy/TypeScript.jpg",
		description:
			"Types, interfaces, unions, narrowing, generics, modules, and type‑safe workflows.",
	},
	{
		title: "Git and GitHub",
		provider: "Codecademy",
		image: "/assets/certificates/codecademy/Git and Github.jpg",
		description:
			"CLI Git, branching/merging, rebasing, PRs, issues, workflows, and collaboration.",
	},
	{
		title: "Figma Advanced Design",
		provider: "Udemy",
		image: "/assets/certificates/udemy/Figma Advanced from BYOL.jpg",
		description:
			"Components/variants, Auto Layout, design systems, prototyping, handoff, and collaboration.",
	},
	{
		title: "Bachelor's Degree",
		provider: "Temple University Japan",
		image: "/assets/certificates/TUJ/Undergrad.jpg",
		description: "B.A. in Art (Graphic Design) with a Computer Science minor.",
	},
];

// Legacy data structure for backward compatibility (if needed)
const skillsData = [
	{
		id: 1,
		title: "Full Stack Development & Team Leadership",
		description:
			"I specialize in modern web development with Next.js 13+, React, and TypeScript. I've successfully led engineering teams, deployed production SaaS applications, and integrated comprehensive AWS services. My expertise includes Next.js App Router, Server Components, Server Actions, API development with Node.js/Express.js, PostgreSQL with Prisma ORM, and leading technical teams to successful project delivery.",
		certificates: [
			{
				title: "codecademy",
				image: "/assets/certificates/codecademy/Front_End_Engineer_Path.png",
			},
			{
				title: "Next",
				image: "/assets/certificates/codecademy/Next.jpg",
			},
			{
				title: "React",
				image: "/assets/certificates/codecademy/React.jpg",
			},
			{
				title: "TypeScriptUdemy",
				image: "/assets/certificates/udemy/Mastering TypeScript.jpg",
			},
			{
				title: "TypeScriptCodecademy",
				image: "/assets/certificates/codecademy/TypeScript.jpg",
			},
			{
				title: "GitAndGithub",
				image: "/assets/certificates/codecademy/Git and Github.jpg",
			},
		],
		techIcons: [
			{
				title: "Next.JS",
				icon: "/assets/icons/FrontEndDevelopment/NextJs.jpg",
			},
			{
				title: "TypeScript",
				icon: "/assets/icons/FrontEndDevelopment/TypeScript.jpg",
			},
			{ title: "git", icon: "/assets/icons/FrontEndDevelopment/git.jpg" },
			{
				title: "HTML",
				icon: "/assets/icons/FrontEndDevelopment/HTML.jpg",
			},
			{
				title: "JavaScript",
				icon: "/assets/icons/FrontEndDevelopment/JavaScript.jpg",
			},
			{
				title: "React",
				icon: "/assets/icons/FrontEndDevelopment/React.jpg",
			},
			{
				title: "Redux",
				icon: "/assets/icons/FrontEndDevelopment/redux.jpg",
			},
			{ title: "CSS", icon: "/assets/icons/FrontEndDevelopment/CSS.jpg" },
		],
	},
	{
		id: 2,
		title: "Computer Science & Engineering",
		description:
			"Graduated from Temple University Japan Campus (TUJ) with a Computer Science minor degree. I've built upon this foundation to become a professional Full Stack Developer and Technical Team Lead, working with modern technologies like Node.js, PostgreSQL, Prisma ORM, and AWS. My education provided strong fundamentals in algorithms, data structures, and software engineering principles that I apply daily in production applications and team leadership.",
		certificates: [
			{
				title: "Undergrad",
				image: "/assets/certificates/TUJ/Undergrad.jpg",
			},
		],
		techIcons: [
			{ title: "C", icon: "/assets/icons/ComputerScience/C.jpg" },
			{
				title: "Data Str",
				icon: "/assets/icons/ComputerScience/Data-structures.jpg",
			},
			{ title: "Java", icon: "/assets/icons/ComputerScience/java.jpg" },
			{
				title: "Python",
				icon: "/assets/icons/ComputerScience/Python.jpg",
			},
		],
	},
	{
		id: 3,
		title: "Graphic Design & UI/UX",
		description:
			"Also from TUJ, I acquired a bachelors degree in Art with a focus on Graphic Design. My design background enables me to create pixel-perfect, responsive interfaces and communicate effectively between design and development teams. I've successfully redesigned branding systems and led design teams, applying these skills to create intuitive user experiences in my web applications.",
		certificates: [
			{
				title: "Figma",
				image: "/assets/certificates/udemy/Figma Advanced from BYOL.jpg",
			},
			{
				title: "Undergrad",
				image: "/assets/certificates/TUJ/Undergrad.jpg",
			},
		],
		techIcons: [
			{ title: "Figma", icon: "/assets/icons/GraphicDesign/Figma.jpeg" },
			{
				title: "Photoshop",
				icon: "/assets/icons/GraphicDesign/photoshop.jpeg",
			},
			{
				title: "Procreate",
				icon: "/assets/icons/GraphicDesign/Procreate.jpeg",
			},
			{
				title: "InDesign",
				icon: "/assets/icons/GraphicDesign/indesign.jpeg",
			},
			{
				title: "Blender",
				icon: "/assets/icons/GraphicDesign/Blender.jpeg",
			},
			{
				title: "Illustrator",
				icon: "/assets/icons/GraphicDesign/illustrator.jpeg",
			},
		],
	},
];

export default skillsData;
