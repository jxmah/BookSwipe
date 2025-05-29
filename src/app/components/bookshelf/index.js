"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const Bookshelf = ({ createList = [] }) => {
    const [masterList, setMasterList] = useState([]);
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");

        const saveLikedBooks = localStorage.getItem("likedBooks");
        const updateMasterList = JSON.parse(saveLikedBooks);
        setMasterList(updateMasterList);
        localStorage.setItem("masterList", JSON.stringify(updateMasterList));
    }, []);

    return (
        <div className={styles.shelfWrapper}>
            <div id="carouselExample" className="carousel slide">
                <div className="container text-center">
                    <ul>
                        {masterList.map((book) => (
                            <li className={styles.bookItem} key={book.id} >
                                <img src={book.cover} alt={book.title} />
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ filter: "invert(0.7)" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ filter: "invert(0.7)" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Bookshelf;