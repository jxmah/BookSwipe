"use client";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';

const BookDetails = ({ books }) => {
    const [randomBook, setRandomBook] = useState(null);
    const [saveShownIndex, setSaveShownIndex] = useState([]);
    const [likedBooks, setLikedBooks] = useState([]);
    
    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("left"),
        onSwipedRight: () => handleSwipe("right"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    useEffect(() => {
        if (books) {
            const getAvailableIndex = books.map((_, index) => index).filter(index => !saveShownIndex.includes(index));

            const randomIndex = getAvailableIndex[Math.floor(Math.random() * getAvailableIndex.length)];
            setRandomBook(books[randomIndex]);
        
            setSaveShownIndex(previousValue => [...previousValue, randomIndex]);
            console.log("saveShownIndex", saveShownIndex);
        }
    }, [books]);

    if (!randomBook) return null;
    return (
        
        <div>
            <div className={styles.bookLayout}>
                <div className={styles.details}>
                    <h4 className={styles.h4}> Title: {randomBook.title}</h4>
                    <h4 className={styles.h4}>Author: {randomBook.author}</h4>
                    <h4 className={styles.h4}>Year: {randomBook.year}</h4>
                    <hr className={styles.divider} />
                    <h4 className={`${styles.h4} ${styles.about}`}>About: <p className={styles.p}>{randomBook.about}</p></h4>
                    <p></p>
                </div>
                <div className={styles.swipe}>
                    <img src="./images/x.png" alt="Dislike" className={styles.swipeBtn}/> 
                <div className={styles.bookCover}>
                    <img className={styles.cover} src={randomBook.cover} alt={randomBook.title}/>
                </div>
                <img src="./images/heart.png" alt="Like" className={styles.swipeBtn}/>  
                </div>
                
            </div>
        </div>
    );
};

export default BookDetails;