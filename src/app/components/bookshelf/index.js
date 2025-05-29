"use client";
import styles from "./styles.module.css";
import { useEffect } from "react";

const Bookshelf = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div className={styles.shelfWrapper}>
            <div id="carouselExample" className="carousel slide">
                <div className="container text-center">
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

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{filter: "invert(0.7)"}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{filter: "invert(1)"}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Bookshelf;