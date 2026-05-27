import styles from "./DifficultySelector.module.css";

export default function DifficultySelector({
    setDifficulty,
    direction = "column",
    isMenu,
}) {
    const listClass =
        direction == "row" ? styles.rowLayout : styles.columnLayout;
    const buttonClass = `${styles.baseButton} ${isMenu ? styles.menuEffect : ""}`;

    return (
        <ul className={`${styles.selectorsList} ${listClass}`}>
            <li>
                <button
                    className={buttonClass}
                    onClick={() => setDifficulty("easy")}
                >
                    Easy
                </button>
            </li>
            <li>
                <button
                    className={buttonClass}
                    onClick={() => setDifficulty("medium")}
                >
                    Medium
                </button>
            </li>
            <li>
                <button
                    className={buttonClass}
                    onClick={() => setDifficulty("hard")}
                >
                    Hard
                </button>
            </li>
        </ul>
    );
}
