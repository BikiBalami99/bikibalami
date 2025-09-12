type Project = {
	id: string;
	URL: string;
	background: string;
	title: string;
	description: string;
	thumbnail: string;
	logo?: string;
	screenshots?: string[];
	videos?: string[];
	videoThumbnails?: string[];
	technologies?: string[];
	features?: string[];
};

const projects: Project[] = [
	{
		id: "1",
		title: "Pachiku",
		description:
			"A complete text-based social network where users can post, like, comment, and share content with both authenticated and anonymous access. Built with Next.js 14 App Router, featuring Server Components, Server Actions, and optimized database architecture.",
		thumbnail: "/assets/images/ProjectThumbnails/pachiku/pachiku-screenshot.webp",
		logo: "/assets/images/ProjectThumbnails/pachiku/logo.webp",
		background: "#ae5cda",
		URL: "https://pachiku.vercel.app",
		screenshots: [
			"/assets/images/ProjectThumbnails/pachiku/pachiku-screenshot.webp",
			"/assets/images/ProjectThumbnails/pachiku/screenshot1.png",
			"/assets/images/ProjectThumbnails/pachiku/screenshot2.png",
			"/assets/images/ProjectThumbnails/pachiku/screenshot3.png",
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
		thumbnail: "/assets/images/ProjectThumbnails/doorsOS/video-1.gif",
		logo: "/assets/images/ProjectThumbnails/doorsOS/doorsos-screenshot.webp",
		background: "#0ea5e9",
		URL: "https://doorsos.vercel.app/",
		screenshots: [
			"/assets/images/ProjectThumbnails/doorsOS/doorsos-screenshot.webp",
			"/assets/images/ProjectThumbnails/doorsOS/screenshot-1.png",
		],
		videos: [
			"/assets/images/ProjectThumbnails/doorsOS/video-1.mp4",
			"/assets/images/ProjectThumbnails/doorsOS/video-2.mp4",
			"/assets/images/ProjectThumbnails/doorsOS/video-3.mp4",
		],
		videoThumbnails: [
			"/assets/images/ProjectThumbnails/doorsOS/video-1.gif",
			"/assets/images/ProjectThumbnails/doorsOS/video-2.gif",
			"/assets/images/ProjectThumbnails/doorsOS/video-3.gif",
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
