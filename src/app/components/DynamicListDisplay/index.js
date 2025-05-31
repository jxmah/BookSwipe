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
    const decodedListName = decodeURIComponent(listName)

    useEffect(() => {
        const storedLists = localStorage.getItem("lists");
        if (storedLists) {
            const parsedList = JSON.parse(storedLists);
            const selectedList = parsedList.find(list => list.name === decodedListName);
            setLists(selectedList)
        }
    }, [decodedListName]);

    const bookRow = () => {
        const items = lists?.items || [];
        const rows = [];
        for (let i = 0; i < items.length; i += 3) {
            rows.push(items.slice(i, i + 3));
        }
        return rows;
    }

    const rows = bookRow();

    return (
        <div className={`${styles.container} overflow-auto`}>
            <div className={styles.savedList}>
                {rows.map((row, index) => (
                    <div key={index}>
                        <div className={styles.bookRow}>
                            {row.map((book, bookIndex) => (
                                <div key={bookIndex} className={styles.bookItem}>
                                    <img className={styles.cover} src={book.cover} alt={book.title}/>
                                    <div className={styles.btnWrapper}>
                                        <button className={styles.deleteBtn}>
                                            <img src="../../images/x.png"/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.shelf}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}