"use client";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

const BookDetails = ({ books }) => {
    const [randomBook, setRandomBook] = useState(null);
    const [saveShownIndex, setSaveShownIndex] = useState([]);
    
    useEffect(() => {
        if (books) {
            const randomIndex = Math.floor(Math.random() * books.length);
            setRandomBook(books[randomIndex]);
            setSaveShownIndex(previousValue => [...previousValue, randomIndex]);
            console.log("saveShownIndex", saveShownIndex);
        }
    }, [books]);

    

    if (!randomBook) return null;
    return (
        
        <div className={`${styles.row} row`}>
            <div className={styles['col-6']}>
            <h4 className={styles.h4}> Title:{randomBook.title}</h4>
            <h4 className={styles.h4}>Author:{randomBook.author}</h4>
            <h4 className={styles.h4}>Year:{randomBook.year}</h4>
            <hr className={styles.divider} />
            <h4 className={`${styles.h4} ${styles.about}`}>About:</h4>
            <p>{randomBook.about}</p>
            </div >
            <div className={`${styles['col-4']} col-4`}>
                <img className={styles.cover} src={randomBook.cover} alt={randomBook.title}/>
            </div>
            <div className={`${styles['col-2']} col-2`}>
                <img className={styles.swipeBtn} src="./images/heart.png"></img>
                <img className={styles.swipeBtn} src="./images/x.png"></img>
            </div>
        </div >
    );
};

export default BookDetails;