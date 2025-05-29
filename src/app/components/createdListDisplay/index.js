'use client';
import Link from 'next/link'
import styles from "./styles.module.css";

const CreatedListDisplay = ({ lists = [] }) => {
    return (
        <div className={styles.createdListsWrapper}>
            <ul className={styles.savedList}>
                {lists.map((list, index) => (
                    <li className={styles.listItem} key={index}>
                        <p className={styles.listName}>{list.name}</p>
                        <p className={styles.itemsAmount}>{list.items.length} Book</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreatedListDisplay;