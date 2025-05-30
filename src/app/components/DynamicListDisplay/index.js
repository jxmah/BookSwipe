'use client'
import Image from "next/image";
import Link from 'next/link'
import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

export default function DynamicListDisplay() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const storedLists = localStorage.getItem("lists");
        if (storedLists) {
            setLists(JSON.parse(storedLists));
        }
    }, []);

    return (




        <div className={styles.container}>
            <p>Lorem ipsum {lists.name}</p>

            <ul className={styles.savedList}>
                {lists.map((list, index) => (
                        <li key={index}>
                            <p className={styles.listName}>{list.name}</p>
                            <p className={styles.itemsAmount}>Först -- {list.items.length} Book--- Last</p>
                        </li>
                ))}
            </ul>

            <div className={styles.shelf}></div>
        </div>
    )
}