"use client";
import styles from "./styles.module.css";
import { useEffect } from "react";



const Bookshelf = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div id={styles.shelfWrapper}>
            <div class="container text-center">
                <div className="row" id={styles.displayBooks}>
                    <div className="col">
                        Column-book-first
                    </div>
                    <div className="col">
                        Column-book-middle
                    </div>
                    <div className="col">
                        Column-book-last
                    </div>
                </div>            
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span classNames="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            i'm in bookshelf component
        </div>
    );
}

export default Bookshelf;