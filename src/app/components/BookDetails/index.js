"use client";
import styles from "./styles.module.css";

const BookDetails = ({ books }) => {
    if (!books) return null;
    return (
        <div className={`${styles.row} row`}>
            <div className={styles['col-6']}>
            <h4 className={styles.h4}> Title:{books.title}</h4>
            <h4 className={styles.h4}>Author:{books.author}</h4>
            <h4 className={styles.h4}>Year:{books.year}</h4>
            <hr className={styles.divider} />
            <h4 className={`${styles.h4} ${styles.about}`}>About:</h4>
            <p>{books.about}</p>
            </div >
            <div className={`${styles['col-4']} col-4`}>
                <img className={styles.cover} src={books.cover} alt={books.title}/>
            </div>
            <div className={`${styles['col-2']} col-2`}>
                <img className={styles.swipeBtn} src="./images/heart.png"></img>
                <img className={styles.swipeBtn} src="./images/x.png"></img>
            </div>
        </div >
    );
};

export default BookDetails;