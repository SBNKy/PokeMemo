import styles from "./Header.module.css";
import pokeballIcon from "../../assets/icons/pokeball-icon.png";
import DifficultySelector from "../DifficultySelector/DifficultySelector.jsx";

export default function Header({ score, highestScore, setDifficulty }) {
    return (
        <header>
            <div className={styles.topRow}>
                <div className={styles.leftSpacer}></div>

                <div className={styles.pageTitle}>
                    <img src={pokeballIcon} alt="Pokeball icon" height={60} />
                    <div className={styles.titleText}>
                        <span className={styles.titleRed}>Poke</span>
                        <span className={styles.titleWhite}>Memo</span>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <DifficultySelector
                        setDifficulty={setDifficulty}
                        direction="row"
                        isMenu={false}
                    />
                </div>
            </div>
            <div className={styles.scoresContainer}>
                <span className={styles.currentScore}>Score: {score}</span>
                <span className={styles.highestScore}>
                    Highest Score: {highestScore}
                </span>
            </div>
        </header>
    );
}
