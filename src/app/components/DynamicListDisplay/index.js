'use client'
import Image from "next/image";
import Link from 'next/link'
import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

export default function DynamicListDisplay({ params }) {
    /*
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const referList = localStorage.getItem("lists");
        setLists(JSON.parse(referList))

    }, []);
    console.log(referList)*/

    return (
        <div className={styles.container}>
            <p>Lorem ipsum</p>
            <div className={styles.shelf}></div>
        </div>
    )
}