import styles from "../Skills.module.css";

const Tabs = ({ categoryOrder, activeIdx, onChange }) => {
	return (
		<div className={styles.tabsBar}>
			{categoryOrder.map((cat, idx) => (
				<button
					key={cat.key}
					className={`${styles.tabButton} ${idx === activeIdx ? styles.activeTab : ""}`}
					onClick={() => onChange(idx)}
				>
					{cat.label}
				</button>
			))}
		</div>
	);
};

export default Tabs;
