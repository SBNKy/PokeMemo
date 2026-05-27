import styles from "./DifficultySelector.module.css";

export default function DifficultySelector({
    currentDifficulty,
    setDifficulty,
    direction = "column",
    isMenu,
}) {
    const listClass =
        direction == "row" ? styles.rowLayout : styles.columnLayout;

    const getButtonClass = (difficulty) => {
        let buttonClass = `${styles.baseButton} ${isMenu ? styles.menuEffect : ""}`;

        if (currentDifficulty === difficulty) {
            buttonClass += `${styles.activeLevel}`;
        }

        return buttonClass;
    };

    return (
        <ul className={`${styles.selectorsList} ${listClass}`}>
            <li>
                <button
                    className={getButtonClass("easy")}
                    onClick={() => setDifficulty("easy")}
                >
                    Easy
                </button>
            </li>
            <li>
                <button
                    className={getButtonClass("medium")}
                    onClick={() => setDifficulty("medium")}
                >
                    Medium
                </button>
            </li>
            <li>
                <button
                    className={getButtonClass("hard")}
                    onClick={() => setDifficulty("hard")}
                >
                    Hard
                </button>
            </li>
        </ul>
    );
}
