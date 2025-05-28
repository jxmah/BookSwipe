"use client";
import styles from "./styles.module.css";
import { useEffect } from "react";



const Bookshelf = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div id={styles.shelfWrapper}>
            <div id="carouselExample" class="carousel slide">
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
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Bookshelf;