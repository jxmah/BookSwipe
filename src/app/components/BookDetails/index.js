"use client";
import styles from "./styles.module.css";

const BookDetails = ({ }) => {
    return (
        <div className={styles['col-6']}>
            <h4 className={styles.h4}> Title:<span></span></h4>
            <h4 className={styles.h4}>Author:<span></span></h4>
            <h4 className={styles.h4}>Year:<span></span></h4>
            <hr className={styles.divider} />
            <h4 className={`${styles.h4} ${styles.about}`}>About:</h4>
            <p></p>
        </div >
    );
};

export default BookDetails;