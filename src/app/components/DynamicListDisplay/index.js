'use client'
import Image from "next/image";
import Link from 'next/link'
import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function DynamicListDisplay() {
    const [lists, setLists] = useState({ 
        name: "", 
        items: [] 
    });
    const {listName} = useParams();

    useEffect(() => {
        const storedLists = localStorage.getItem("lists");
        if (storedLists) {
            const parsedList = JSON.parse(storedLists);
            const selectedList = parsedList.find(list => list.name === listName);
            setLists(selectedList)
        }
    }, [listName]);

    return (
        <div className={styles.container}>
            <ul className={styles.savedList}>
            <div className="container">
                <div className="row">
                    {lists.items.map((book, index) => (
                        <div className="col">
                            <li key={index}>
                                <img className={styles.cover} src={book.cover} alt={book.title}/>
                            </li>
                        </div>                     
                    ))}
                </div>
            </div>
            </ul>

            <div className={styles.shelf}></div>
        </div>
    )
}