"use client";
import styles from "./styles.module.css";
import { generateBooks } from "@/app/http";
import { useState } from "react";
import BookDetails from "../BookDetails";

const BookForm = () => {
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const [books, setBooks] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const fetchedBooks = await generateBooks(category, rating);
            setBooks(fetchedBooks)
            console.log(fetchedBooks);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} method="get" className="form-inline">
                <div className={styles.row}>
                    <div className="col flex">
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className={`${styles.select} ${styles.selectGenre}`}>
                            <option value="" disabled>Genre</option>
                            <option>Classics</option>
                            <option>Romance</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Non-fiction</option>
                        </select>
                    </div>
                    <div className="col flex">
                        <select value={rating} onChange={(e) => setRating(e.target.value)} className={`${styles.select} ${styles.selectRating}`}>
                            <option value="" disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="col">
                        <input className={styles.btn} type="submit" value="Generate" />
                    </div>
                </div>
            </form>
            {books.length > 0 && (
                <div>
                    {books.map((book, index) => (
                        <BookDetails key={book.id || index} books={book}/>
                    ))}
                </div>
            )}
            
        </div>
    );
};

export default BookForm;