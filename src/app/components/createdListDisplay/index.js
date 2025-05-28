'use client';
import Link from 'next/link'
import styles from "./styles.module.css";

const CreatedListDisplay = () => {
    return (
        <div className={styles.createdListsWrapper}>
            <div className={styles.savedList}>
                <h3 className={styles.listName}>List name</h3>
                <p className={styles.bookCount}>x Books</p>
            </div>
        </div>  
    );
};

export default CreatedListDisplay;