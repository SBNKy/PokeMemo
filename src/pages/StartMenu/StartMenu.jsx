import DifficultySelector from "../../components/DifficultySelector/DifficultySelector.jsx";
import styles from "./StartMenu.module.css";

export default function StartMenu({ setDifficulty }) {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuCard}>
                <h1 className={styles.menuTitle}>Select difficulty level</h1>
                <DifficultySelector
                    setDifficulty={setDifficulty}
                    direction="column"
                    isMenu={true}
                />
            </div>
        </div>
    );
}
