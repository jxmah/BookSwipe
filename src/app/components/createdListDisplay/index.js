'use client';
import Link from 'next/link'
import styles from "./styles.module.css";

const CreatedListDisplay = ({ lists = [] }) => {
    return (
        <div className={styles.createdListsWrapper}>
            <ul className={styles.savedList}>
                {lists.map((list, index) => (
                    <li key={index}>
                        <p>{list.name}</p>
                        <p>{list.items.length} Book</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreatedListDisplay;