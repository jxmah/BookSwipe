"use client";
import styles from "./styles.module.css";

const BookDetails = ({ books }) => {
    return (
        <div className={styles['col-6']}>
            <h4 className={styles.h4}> Title:{books.title}</h4>
            <h4 className={styles.h4}>Author:{books.author}</h4>
            <h4 className={styles.h4}>Year:{books.publishedDate}</h4>
            <hr className={styles.divider} />
            <h4 className={`${styles.h4} ${styles.about}`}>About:</h4>
            <p>{books.description}</p>
        </div >
    );
};

export default BookDetails;