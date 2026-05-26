import { useEffect, useState } from "react";
import styles from "./MemoryGame.module.css";
import fetchPokemons from "../../utils/fetcher.js";
import shuffleArray from "../../utils/shuffle.js";

const DIFFICULTY_SETTINGS = {
    easy: 10,
    medium: 20,
    hard: 30,
};

export default function MemoryGame({ difficulty }) {
    const [currentCards, setCurrentCards] = useState([]);
    const [uniqueIds, setUniqueIds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const size = DIFFICULTY_SETTINGS[difficulty];
        const loadData = async () => {
            setIsLoading(true);
            try {
                let [data] = await Promise.all([
                    fetchPokemons(size),
                    new Promise((resolve) => setTimeout(resolve, 1500)),
                ]);
                data = shuffleArray(data);

                setCurrentCards(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error!", error);
            }
        };

        loadData();
    }, [difficulty]);

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <span className={styles.loader}></span>
            </div>
        );
    }

    return (
        <>
            <div className={`${styles.gridBase} ${styles[difficulty]}`}></div>
        </>
    );
}
