import styles from "./ItemCard.module.css";

export default function ItemCard({ name, image }) {
    return (
        <div className={styles.card}>
            <img
                src={image}
                className={styles.cardImage}
                alt={`${name} image`}
            />
            <p>{name}</p>
        </div>
    );
}
