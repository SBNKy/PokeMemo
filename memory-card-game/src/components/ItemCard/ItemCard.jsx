import styles from "./ItemCard.module.css";

export default function ItemCard({ name, image, onClick }) {
    return (
        <div role="button" className={styles.card} onClick={onClick}>
            <img
                src={image}
                className={styles.cardImage}
                alt={`${name} image`}
            />
            <p className={styles.cardName}>{name}</p>
        </div>
    );
}
