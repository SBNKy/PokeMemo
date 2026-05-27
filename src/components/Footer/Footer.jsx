import styles from "./Footer.module.css";
import githubIcon from "../../assets/icons/github.png";

export default function Footer() {
    return (
        <footer>
            <a
                href="https://github.com/SBNKy/PokeMemo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
            >
                <img src={githubIcon} alt="Github icon" height={20} />
                <span>Created by SBNKy</span>
            </a>
        </footer>
    );
}
