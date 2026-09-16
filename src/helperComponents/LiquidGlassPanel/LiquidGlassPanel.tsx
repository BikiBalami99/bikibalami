import {
	type CSSProperties,
	type HTMLAttributes,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import styles from "./LiquidGlassPanel.module.css";

type LiquidGlassStyle = CSSProperties & {
	"--liquid-glass-filter"?: string;
	"--liquid-glass-tint"?: string;
};

export type LiquidGlassPanelProps = HTMLAttributes<HTMLDivElement> & {
	chromaticAberration?: number;
	depth?: number;
	radius?: number;
	strength?: number;
	tint?: string;
	glassBorder?: boolean;
	flexDirection?: CSSProperties["flexDirection"];
	alignItems?: CSSProperties["alignItems"];
	justifyContent?: CSSProperties["justifyContent"];
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
	// Defensively clamp depth and radius to prevent SVG filter collapse on small/irregular components
	const safeDepth = Math.max(1, Math.min(depth, Math.floor(Math.min(width, height) / 2) - 1));
	const safeRadius = Math.max(0, Math.min(radius, Math.floor(Math.min(width, height) / 2)));
	const innerWidth = Math.max(1, width - 2 * safeDepth);
	const innerHeight = Math.max(1, height - 2 * safeDepth);

	const svg = `<svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
		<style>.mix{mix-blend-mode:screen}</style>
		<defs>
			<linearGradient id="Y" x1="0" x2="0" y1="${Math.ceil((safeRadius / height) * 15)}%" y2="${Math.floor(100 - (safeRadius / height) * 15)}%">
				<stop offset="0%" stop-color="#0F0"/>
				<stop offset="100%" stop-color="#000"/>
			</linearGradient>
			<linearGradient id="X" x1="${Math.ceil((safeRadius / width) * 15)}%" x2="${Math.floor(100 - (safeRadius / width) * 15)}%" y1="0" y2="0">
				<stop offset="0%" stop-color="#F00"/>
				<stop offset="100%" stop-color="#000"/>
			</linearGradient>
		</defs>
		<rect x="0" y="0" height="${height}" width="${width}" fill="#808080"/>
		<g filter="blur(2px)">
			<rect x="0" y="0" height="${height}" width="${width}" fill="#000080"/>
			<rect x="0" y="0" height="${height}" width="${width}" fill="url(#Y)" class="mix"/>
			<rect x="0" y="0" height="${height}" width="${width}" fill="url(#X)" class="mix"/>
			<rect x="${safeDepth}" y="${safeDepth}" height="${innerHeight}" width="${innerWidth}" fill="#808080" rx="${safeRadius}" ry="${safeRadius}" filter="blur(${safeDepth}px)"/>
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

	const supportsBackdrop =
		CSS.supports("backdrop-filter", 'url("#displace")') ||
		CSS.supports("-webkit-backdrop-filter", 'url("#displace")');

	return isChromium && supportsBackdrop;
}

const LiquidGlassPanel = forwardRef<HTMLDivElement, LiquidGlassPanelProps>(
	(
		{
			children,
			chromaticAberration = 5,
			className,
			depth = 18,
			radius,
			strength = 230,
			tint = "rgba(0, 2, 7, 0.35)",
			glassBorder = true,
			flexDirection,
			alignItems,
			justifyContent,
			style,
			...props
		},
		ref
	) => {
		const [liquidGlassStyle, setLiquidGlassStyle] = useState<LiquidGlassStyle>({});
		const internalRef = useRef<HTMLDivElement>(null);
		useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

		const isDisplacementSupported = supportsLiquidGlassFilter();

		useEffect(() => {
			const panel = internalRef.current;

			if (!panel || !isDisplacementSupported) {
				return;
			}

			let frame = 0;

			const updateLiquidGlassFilter = () => {
				frame = 0;
				const rect = panel.getBoundingClientRect();
				const width = Math.max(40, Math.round(rect.width));
				const height = Math.max(20, Math.round(rect.height));
				const computedRadius =
					radius !== undefined
						? radius
						: parseFloat(window.getComputedStyle(panel).borderRadius) || 16;

				setLiquidGlassStyle({
					"--liquid-glass-filter": getLiquidGlassFilter({
						chromaticAberration,
						depth,
						height,
						radius: computedRadius,
						strength,
						width,
					}),
					...(tint ? { "--liquid-glass-tint": tint } : {}),
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
		}, [chromaticAberration, depth, isDisplacementSupported, radius, strength, tint]);

		const inlineLayout: CSSProperties = {
			...(flexDirection ? { flexDirection } : {}),
			...(alignItems ? { alignItems } : {}),
			...(justifyContent ? { justifyContent } : {}),
			...(tint ? { "--liquid-glass-tint": tint } : {}),
			...(radius !== undefined ? { borderRadius: `${radius}px` } : {}),
		};

		return (
			<div
				ref={internalRef}
				data-glass-engine={isDisplacementSupported ? "displacement" : "frosted"}
				className={[styles.panel, !glassBorder && styles.noBorder, className]
					.filter(Boolean)
					.join(" ")}
				style={{ ...inlineLayout, ...style, ...liquidGlassStyle }}
				{...props}
			>
				{children}
			</div>
		);
	}
);

LiquidGlassPanel.displayName = "LiquidGlassPanel";

export default LiquidGlassPanel;
