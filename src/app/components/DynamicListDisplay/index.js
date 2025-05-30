'use client'
import Image from "next/image";
import Link from 'next/link'
import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function DynamicListDisplay() {
    const [lists, setLists] = useState();
    const { listName } = useParams();

    useEffect(() => {
        const storedLists = localStorage.getItem("lists");
        if (storedLists) {
            const parsedList = JSON.parse(storedLists);
            const selectedList = parsedList.find(list => list.name === listName);
            setLists(selectedList)
        }
    }, [listName]);

    return (
        <div className={`${styles.container} overflow-auto`}>
            <div className={styles.savedList}>
                {lists?.items.map((book, index) => (
                    <div key={index} className={styles.bookItem}>
                        <img className={styles.cover} src={book.cover} alt={book.title} />
                    </div>
                ))}
            </div>
            <div className={styles.shelf}></div>
        </div>
    )
}