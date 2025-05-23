//--------------------------------https
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.NEXT_PUBLIC_KEY;

export const generateBooks = async (category, rating) => {
    let bookFilter = ''; // where the query string is stored
    if (category) { // if category is provided
        bookFilter += `mainCategory:${category}`; // add it to the query string
    }

    if (rating) { // if rating is provided
        bookFilter += `+averageRating:${rating}`; // add it to the query string
    }

    const url = new URL(`${BASE_URL}?q=${bookFilter}&key=${API_KEY}&maxResults=5`); // create a new URL object
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);
    return data.items.map(book => ({
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.[0],
        year: book.volumeInfo.publishedDate,
        cover: book.volumeInfo.imageLinks?.thumbnail || '',
        about: book.volumeInfo.description || 'No description available'
    }));
};

export const getBookDetails = async (id) => { // id:et ska hämtas från generateBooks (fixar det senare)
    const url = new URL(`${BASE_URL}/${id}?key=${API_KEY}`); // create a new URL object
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};

// google books json names
// id for book id
// averageRating for rating
// mainCategory for genre
// categories for more genres ig
//--------------------------page
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import BookForm from "./components/BookForm";
import BookDetails from "./components/BookDetails";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main} className="container">
        <BookForm></BookForm>
        <BookDetails></BookDetails>
      </div>
    </div>
  );
}

//-------------------------------------------------bookForm
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
                    <BookDetails books={books}/>
                </div>
            )}
            
        </div>
    );
};

//export default BookForm;

//-----------------------------------------------bookdetails
"use client";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

const BookDetails = ({ books }) => {
    const [randomBook, setRandomBook] = useState(null);

    
    useEffect(() => {
        if (books) {
            const randomIndex = Math.floor(Math.random() * books.length);
            setRandomBook(books[randomIndex]);
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

//export default BookDetails;
