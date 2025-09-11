import { useEffect, useMemo, useRef, useState } from "react";
import styles from "../Skills.module.css";
import { allSkills } from "../../../data/skillsData";

// Animate only added/removed items; keep unchanged items static
type Category = { key: keyof typeof allSkills; label: string };
type Item = { id: string; icon: string; state?: "entering" | "present" | "exiting" };
const PreviewStrip = ({
	side,
	categories,
}: {
	side: "left" | "right";
	categories: Category[];
}) => {
	if (!categories || categories.length === 0) return null;
	const sideClass = side === "left" ? styles.previewLeftSide : styles.previewRightSide;

	const nextSkills = useMemo(() => {
		const list = categories.flatMap((c) => (allSkills as any)[c.key] || []);
		return list.map((s: any) => ({ id: s.title as string, icon: s.icon as string }));
	}, [categories]);

	const [items, setItems] = useState<Item[]>([]); // { id, icon, state }
	const exitTimersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

	useEffect(() => {
		const nextIds = new Set(nextSkills.map((s) => s.id));
		const currentIds = new Set(items.map((it) => it.id));
		const exitingIds = [...currentIds].filter((id) => !nextIds.has(id));
		const nextIconById = new Map(nextSkills.map((s) => [s.id, s.icon]));

		let updated = items.map((it) => {
			if (exitingIds.includes(it.id) && it.state !== "exiting") {
				return { ...it, state: "exiting" } as Item;
			}
			return { ...it, icon: (nextIconById.get(it.id) as string) || it.icon } as Item;
		});

		const newOnes = nextSkills
			.filter((s) => !currentIds.has(s.id))
			.map((s) => ({ id: s.id, icon: s.icon, state: "entering" } as Item));

		updated = [...updated, ...newOnes];
		setItems(updated);

		const EXIT_MS = 250;
		for (const id of exitingIds) {
			if (!exitTimersRef.current.has(id)) {
				const t = setTimeout(() => {
					setItems((prev) => prev.filter((it) => it.id !== id));
					exitTimersRef.current.delete(id);
				}, EXIT_MS);
				exitTimersRef.current.set(id, t);
			}
		}

		return () => {
			for (const [, t] of exitTimersRef.current) clearTimeout(t);
			exitTimersRef.current.clear();
		};
	}, [nextSkills]);

	useEffect(() => {
		if (items.some((it) => it.state === "entering")) {
			const t = setTimeout(() => {
				setItems((prev) =>
					prev.map((it) => (it.state === "entering" ? { ...it, state: "present" } : it))
				);
			}, 310);
			return () => clearTimeout(t);
		}
	}, [items]);

	const indexInNext = (id: string) => nextSkills.findIndex((s) => s.id === id);
	const orderedItems = useMemo(() => {
		const copy = [...items];
		copy.sort((a, b) => {
			const ia = indexInNext(a.id);
			const ib = indexInNext(b.id);
			if (ia === -1 && ib === -1) return a.id.localeCompare(b.id);
			if (ia === -1) return 1;
			if (ib === -1) return -1;
			return ia - ib;
		});
		return copy;
	}, [items, nextSkills]);

	const STAGGER_MS = 25;

	return (
		<div className={`${styles.previewStrip} ${sideClass}`}>
			{orderedItems.map((it) => {
				const i = Math.max(0, indexInNext(it.id));
				const delay = it.state === "present" ? 0 : i * STAGGER_MS;
				const className = `${styles.honeyItem} ${
					it.state === "entering"
						? styles.honeyEnter
						: it.state === "exiting"
						? styles.honeyExit
						: ""
				}`;
				return (
					<div
						className={className}
						key={`${side}-${it.id}`}
						style={{ animationDelay: `${delay}ms` }}
					>
						<img src={it.icon} alt="" />
					</div>
				);
			})}
		</div>
	);
};

export default PreviewStrip;
