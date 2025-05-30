'use client';
import Link from 'next/link'
import styles from "./styles.module.css";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

const ListDisplay = ({ lists = [] }) => {
    const router = useRouter();
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const savedLists = JSON.parse(localStorage.getItem("lists")) || [];
        setLists(savedLists);
    }, []);

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