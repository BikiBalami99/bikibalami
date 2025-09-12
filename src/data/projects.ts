const projects = [
	{
		id: "1",
		title: "Pachiku",
		description:
			"A complete text-based social network where users can post, like, comment, and share content with both authenticated and anonymous access. Built with Next.js 14 App Router, featuring Server Components, Server Actions, and optimized database architecture.",
		thumbnail: "/assets/images/ProjectThumbnails/pachiku-screenshot.webp",
		background: "#ae5cda",
		URL: "https://pachiku.vercel.app",
		screenshots: [
			"/assets/images/ProjectThumbnails/pachiku-screenshot.webp",
			"/assets/images/ProjectThumbnails/pachiku-screenshot.webp",
			"/assets/images/ProjectThumbnails/pachiku-screenshot.webp",
			"/assets/images/ProjectThumbnails/pachiku-screenshot.webp",
		],
		technologies: [
			"Next.js 14",
			"TypeScript",
			"React",
			"NextAuth.js",
			"Prisma ORM",
			"PostgreSQL",
			"Tailwind CSS",
		],
		features: [
			"Full-Stack Architecture with Next.js 14 App Router",
			"PostgreSQL database with Prisma ORM and optimized indexes",
			"NextAuth.js integration with Google OAuth and anonymous posting",
			"Real-time like/comment systems with instant UI updates",
			"SSR/CSR hybrid approach with caching strategies",
			"Custom neo-skeuomorphic interface with responsive design",
		],
	},
	{
		id: "2",
		title: "DoorsOS",
		description:
			"A fully functional macOS-inspired web operating system with complete desktop environment simulation. Features draggable/resizable windows, dock, menu bar, and built-in applications including Notes, Settings, and JavaScript Playground.",
		thumbnail: "/assets/images/ProjectThumbnails/doorsos-screenshot.webp",
		background: "#0ea5e9",
		URL: "https://doorsos.vercel.app/",
		screenshots: [
			"/assets/images/ProjectThumbnails/doorsos-screenshot.webp",
			"/assets/images/ProjectThumbnails/doorsos-screenshot.webp",
			"/assets/images/ProjectThumbnails/doorsos-screenshot.webp",
			"/assets/images/ProjectThumbnails/doorsos-screenshot.webp",
		],
		technologies: ["Next.js", "TypeScript", "React", "CSS3", "HTML5", "JavaScript"],
		features: [
			"Custom window manager with drag-and-drop and resizing",
			"Desktop environment with dock and app launching",
			"Complex state management for window positioning",
			"Mobile adaptation with touch-optimized interactions",
			"Integrated applications ecosystem",
			"Performance optimization with React portals and lazy loading",
		],
	},
];

export default projects;
