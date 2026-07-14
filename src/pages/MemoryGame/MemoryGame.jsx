import { useEffect, useState } from "react";
import styles from "./MemoryGame.module.css";
import fetchPokemons from "../../utils/fetcher.js";
import shuffleArray from "../../utils/shuffle.js";
import ItemCard from "../../components/ItemCard/ItemCard.jsx";

const DIFFICULTY_SETTINGS = {
    easy: 12,
    medium: 18,
    hard: 24,
};

export default function MemoryGame({ difficulty, setScore }) {
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

    function handleCardClick(id) {
        if (!uniqueIds.includes(id)) {
            setUniqueIds((prev) => [...prev, id]);
            setScore((prevScore) => prevScore + 1);
        } else {
            setScore(0);
            setUniqueIds([]);
        }

        setCurrentCards((prevCards) => shuffleArray(prevCards));
    }

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <span data-testid="loader" className={styles.loader}></span>
            </div>
        );
    }

    return (
        <>
            <div className={`${styles.gridBase} ${styles[difficulty]}`}>
                {currentCards.map((card) => (
                    <ItemCard
                        key={card.id}
                        name={card.name}
                        image={card.image}
                        onClick={() => handleCardClick(card.id)}
                    />
                ))}
            </div>
        </>
    );
}
