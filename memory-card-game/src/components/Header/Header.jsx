import styles from "./Header.module.css";
import pokeballIcon from "../../assets/icons/pokeball-icon.png";

export default function Header({ currentScore, highestScore }) {
    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.pageTitle}>
                    <img src={pokeballIcon} alt="Pokeball icon" height={60} />
                    <div className={styles.titleText}>
                        <span className={styles.titleRed}>Poke</span>
                        <span className={styles.titleWhite}>Memo</span>
                    </div>
                </div>
                <div className={styles.scoresContainer}>
                    <span className={styles.currentScore}>Score: </span>
                    <span className={styles.highestScore}>Highest Score: </span>
                </div>
            </div>
        </header>
    );
}
