'use client';
import Link from 'next/link'
import styles from "./styles.module.css";
import { useRouter } from 'next/navigation'

const ListDisplay = ({ lists = [] }) => {
    const router = useRouter()

    return (
        <div className={`${styles.createdListsWrapper} overflow-auto`}>
            <ul className={styles.savedList}>
                {lists.map((list, index) => (
                    <button className={styles.listItem} key={index} type="button" onClick={() => router.push(`/pages/my-books/${list.name}`)}>
                        <li key={index}>
                            <p className={styles.listName}>{list.name}</p>
                            <p className={styles.itemsAmount}>{list.items.length} Book</p>
                        </li>
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default ListDisplay;