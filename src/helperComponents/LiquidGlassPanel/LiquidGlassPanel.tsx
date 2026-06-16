import {
	type CSSProperties,
	type HTMLAttributes,
	useEffect,
	useRef,
	useState,
} from "react";
import styles from "./LiquidGlassPanel.module.css";

type LiquidGlassStyle = CSSProperties & {
	"--liquid-glass-filter"?: string;
};

export type LiquidGlassPanelProps = HTMLAttributes<HTMLDivElement> & {
	chromaticAberration?: number;
	depth?: number;
	radius?: number;
	strength?: number;
};

function getLiquidGlassMap({
	depth,
	height,
	radius,
	width,
}: {
	depth: number;
	height: number;
	radius: number;
	width: number;
}) {
	const svg = `<svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
		<style>.mix{mix-blend-mode:screen}</style>
		<defs>
			<linearGradient id="Y" x1="0" x2="0" y1="${Math.ceil((radius / height) * 15)}%" y2="${Math.floor(100 - (radius / height) * 15)}%">
				<stop offset="0%" stop-color="#0F0"/>
				<stop offset="100%" stop-color="#000"/>
			</linearGradient>
			<linearGradient id="X" x1="${Math.ceil((radius / width) * 15)}%" x2="${Math.floor(100 - (radius / width) * 15)}%" y1="0" y2="0">
				<stop offset="0%" stop-color="#F00"/>
				<stop offset="100%" stop-color="#000"/>
			</linearGradient>
		</defs>
		<rect x="0" y="0" height="${height}" width="${width}" fill="#808080"/>
		<g filter="blur(2px)">
			<rect x="0" y="0" height="${height}" width="${width}" fill="#000080"/>
			<rect x="0" y="0" height="${height}" width="${width}" fill="url(#Y)" class="mix"/>
			<rect x="0" y="0" height="${height}" width="${width}" fill="url(#X)" class="mix"/>
			<rect x="${depth}" y="${depth}" height="${Math.max(1, height - 2 * depth)}" width="${Math.max(1, width - 2 * depth)}" fill="#808080" rx="${radius}" ry="${radius}" filter="blur(${depth}px)"/>
		</g>
	</svg>`;

	return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getLiquidGlassFilter({
	chromaticAberration,
	depth,
	height,
	radius,
	strength,
	width,
}: {
	chromaticAberration: number;
	depth: number;
	height: number;
	radius: number;
	strength: number;
	width: number;
}) {
	const displacementMapUrl = getLiquidGlassMap({ depth, height, radius, width });
	const svg = `<svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<filter id="displace" color-interpolation-filters="sRGB">
				<feImage x="0" y="0" height="${height}" width="${width}" href="${displacementMapUrl}" result="displacementMap"/>
				<feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration * 2}" xChannelSelector="R" yChannelSelector="G"/>
				<feColorMatrix type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedR"/>
				<feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration}" xChannelSelector="R" yChannelSelector="G"/>
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedG"/>
				<feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength}" xChannelSelector="R" yChannelSelector="G"/>
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="displacedB"/>
				<feBlend in="displacedR" in2="displacedG" mode="screen"/>
				<feBlend in2="displacedB" mode="screen"/>
			</filter>
		</defs>
	</svg>`;

	return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}#displace")`;
}

function supportsLiquidGlassFilter() {
	if (typeof navigator === "undefined" || typeof CSS === "undefined") {
		return false;
	}

	const userAgent = navigator.userAgent.toLowerCase();
	const isChromium =
		/(chrome|chromium|crios|edg)/.test(userAgent) && !/firefox|fxios/.test(userAgent);

	return isChromium && CSS.supports("backdrop-filter", 'url("#displace")');
}

export default function LiquidGlassPanel({
	children,
	chromaticAberration = 0,
	className,
	depth = 18,
	radius = 12,
	strength = 220,
	style,
	...props
}: LiquidGlassPanelProps) {
	const [liquidGlassStyle, setLiquidGlassStyle] = useState<LiquidGlassStyle>({});
	const panelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const panel = panelRef.current;

		if (!panel || !supportsLiquidGlassFilter()) {
			return;
		}

		let frame = 0;

		const updateLiquidGlassFilter = () => {
			frame = 0;
			const rect = panel.getBoundingClientRect();
			const width = Math.max(50, Math.round(rect.width));
			const height = Math.max(30, Math.round(rect.height));

			setLiquidGlassStyle({
				"--liquid-glass-filter": getLiquidGlassFilter({
					chromaticAberration,
					depth,
					height,
					radius,
					strength,
					width,
				}),
			});
		};

		const scheduleUpdate = () => {
			if (frame !== 0) {
				return;
			}

			frame = window.requestAnimationFrame(updateLiquidGlassFilter);
		};

		scheduleUpdate();
		const resizeObserver = new ResizeObserver(scheduleUpdate);
		resizeObserver.observe(panel);
		window.addEventListener("resize", scheduleUpdate);

		return () => {
			if (frame !== 0) {
				window.cancelAnimationFrame(frame);
			}

			resizeObserver.disconnect();
			window.removeEventListener("resize", scheduleUpdate);
		};
	}, [chromaticAberration, depth, radius, strength]);

	return (
		<div
			ref={panelRef}
			className={[styles.panel, className].filter(Boolean).join(" ")}
			style={{ ...style, ...liquidGlassStyle }}
			{...props}
		>
			{children}
		</div>
	);
}
