import styles from "./StartMenu.module.css";

export default function StartMenu({ setDifficulty }) {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuCard}>
                <h1 className={styles.menuTitle}>Select difficulty level</h1>
                <ul className={styles.selectorsList}>
                    <li>
                        <button
                            className={styles.difficultySelector}
                            onClick={() => setDifficulty("easy")}
                        >
                            Easy
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.difficultySelector}
                            onClick={() => setDifficulty("medium")}
                        >
                            Medium
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.difficultySelector}
                            onClick={() => setDifficulty("hard")}
                        >
                            Hard
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
