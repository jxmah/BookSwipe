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
            <div className="container">
                <div className="row">
                    
                        {lists.map((list, index) => (
                            <div className="col">
                                <li key={index}>
                                    <img className={styles.cover} src={list.cover} alt={list.title}/>
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