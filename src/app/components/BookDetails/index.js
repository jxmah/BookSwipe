"use client";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const BookDetails = ({ books }) => {
    const [randomBook, setRandomBook] = useState(null);
    const [shownIds, setShownIds] = useState([]);
    const [likedBooks, setLikedBooks] = useState([]);

    const showNextBook = () => {
        const getAvailableBooks = books.filter((book) => !shownIds.includes(book.id));

        if (getAvailableBooks.length === 0) {
            setRandomBook(null);
            return;
        }
        const randomIndex = Math.floor(Math.random() * getAvailableBooks.length);
        const nextBook = getAvailableBooks[randomIndex];
        
        setRandomBook(nextBook);
        setShownIds(previousValue => [...previousValue, nextBook.id]);
    
    };

    const handleSwipe = (direction) => {
        if (direction === "right") {
            const updatedLikedBooks = [...likedBooks, randomBook];
            setLikedBooks(updatedLikedBooks);
            localStorage.setItem("likedBooks", JSON.stringify(updatedLikedBooks));

            console.log("liked books: ", updatedLikedBooks);
        }
        showNextBook();
    };

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem("likedBooks")) || [];
        setLikedBooks(savedBooks);
    }, []);

    useEffect(() => {
        if (books && books.length > 0 ) {
            setShownIds([]);
            setRandomBook(null);
            showNextBook();
        }
    }, [books]);

    if (books && shownIds.length === books.length) {
        return (
            <div className={styles.bookLayout}>
                <div className={styles.details}>
                    <h4 className={styles.message}>You have browsed all books in this category</h4>
                    <p className={styles.message}>Please try another category</p>
                </div>
            </div>
        );
    }
    if (randomBook) {
        return (
            <div className={styles.bookLayout}>
                <div className={styles.details}>
                    <h4 className={styles.h4}> Title: {randomBook.title}</h4>
                    <h4 className={styles.h4}>Author: {randomBook.author}</h4>
                    <hr className={styles.divider} />
                    <h4 className={`${styles.h4} ${styles.about}`}>About: </h4>
                    <p className={styles.p}>{randomBook.about}</p>
                </div>

                <div className={styles.swipe}>
                    <img src="./images/x.png" alt="Dislike" className={styles.swipeBtn} />
                    <motion.div
                        className={styles.bookCover}
                        drag="x"
                        dragConstraints={{ left: -300, right: 300 }}
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
                    <img src="./images/heart.png" alt="Like" className={styles.swipeBtn} />
                </div>
            </div>
        );
    }
};

export default BookDetails;