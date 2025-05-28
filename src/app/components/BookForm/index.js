"use client";
import styles from "./styles.module.css";
import { generateBooks } from "@/app/http";
import { useState } from "react";
import BookDetails from "../BookDetails";

const BookForm = () => {
    const [category, setCategory] = useState("");
    const [decade, setDecade] = useState("");
    const [books, setBooks] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const fetchedBooks = await generateBooks(category, decade);
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
                            <option value="fantasy">Fantasy</option>
                            <option value="science_fiction">Science Fiction</option>
                            <option value="romance">Romance</option>
                            <option value="mystery_and_detective_stories">Mystery</option>
                            <option value="horror">Horror</option>
                            <option value="thriller">Thriller</option>
                        </select>
                    </div>
                    <div className="col flex">
                        <select value={decade} onChange={(e) => setDecade(e.target.value)} className={`${styles.select} ${styles.selectDecade}`}>
                            <option value="" disabled>Decade</option>
                            <option value="2020">2020</option>
                            <option value="2010">2010</option>
                            <option value="2000">2000</option>
                            <option value="1990">1990</option>
                            <option value="1980">1980</option>
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