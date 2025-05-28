"use client";
import styles from "./styles.module.css";
import { generateBooks } from "@/app/http";
import { useState } from "react";
import BookDetails from "../BookDetails";

const BookForm = () => {
    const [category, setCategory] = useState("");
    //const [rating, setRating] = useState("");
    const [books, setBooks] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const fetchedBooks = await generateBooks(category);
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
                            <option value="hardcover-fiction">Fiction</option>
                            <option value="hardcover-nonfiction">Non-fiction</option>
                            <option value="young-adult-hardcover">Young adult</option>
                            <option value="graphic-books-and-manga">Manga</option>
                            <option value="paperback-nonfiction">Paperback</option>
                            <option value="advice-how-to-and-miscellaneous">Advice</option>
                        </select>
                    </div>
                    
                    <div className="col">
                        <input className={styles.btn} type="submit" value="Generate" />
                    </div>
                </div>
            </form>
            {books.length > 0 && (
                <div>
                    <BookDetails books={books}/>
                </div>
            )}
            
        </div>
    );
};

export default BookForm;