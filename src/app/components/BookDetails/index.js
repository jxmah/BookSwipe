"use client";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const BookDetails = ({ books }) => {
    const [randomBook, setRandomBook] = useState(null);
    const [saveShownIndex, setSaveShownIndex] = useState([]);
    const [likedBooks, setLikedBooks] = useState([]);
    
    const showNextBook = () => {
        const getAvailableIndex = books.map((_, index) => index).filter(index => !saveShownIndex.includes(index));
        
        if (getAvailableIndex.length === 0) {
            setRandomBook(null);
            return;
        }
        const randomIndex = getAvailableIndex[Math.floor(Math.random() * getAvailableIndex.length)];
        setRandomBook(books[randomIndex]);
        setSaveShownIndex(previousValue => [...previousValue, randomIndex]);
        console.log("saveShownIndex", saveShownIndex);
    };

    const handleSwipe = (direction) => {
        if (direction === "right") {
            setLikedBooks(prev => [...prev, randomBook]);
        }
        showNextBook();
    };

    useEffect(() => {
        if (books && books.length > 0 && randomBook === null) {
            showNextBook();
        }
    }, [books]);

    if (!randomBook) return null;
    return (
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
                    <motion.div
                        className={styles.bookCover}
                        drag="x"
                        dragConstraints={{ left: -300, right: 300}}
                        dragElastic={0.3}
                        style={{ cursor: "grab" }}
                        key={randomBook.id}
                        initial={{ x: 0 }}
                        animate={{ x: 0 }}
                        onDragEnd={(_, info) => {
                            console.log("offset x: ", info.offset.x);
                            if (info.offset.x > 30) {
                                handleSwipe("right");
                            } else if (info.offset.x < -30) {
                                handleSwipe("left");
                            }
                        }}
                        >
                        <img
                            className={styles.cover}
                            src={randomBook.cover} 
                            alt={randomBook.title}
                            draggable={false}
                        />
                    </motion.div>
                    <img src="./images/heart.png" alt="Like" className={styles.swipeBtn}/>                      
                </div>
            </div>
    );
};

export default BookDetails;