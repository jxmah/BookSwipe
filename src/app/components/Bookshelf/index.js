"use client";
import styles from "./styles.module.css";
import { useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Bookshelf = ({ masterList, onDeleteBook }) => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    },);

    const bookRow = () => {
        const rows = [];
        for (let i = 0; i < masterList.length; i += 3) {
            rows.push(masterList.slice(i, i + 3));
        }
        return rows;
    }
    const rows = bookRow();

    return (
        <div className={styles.shelfWrapper}>
            <div id="carouselExample" className={`carousel slide ${styles.carousel}`}>
                <div className={`carousel-inner ${styles.carouselInner}`}>

                    {rows.map((row, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                            <div className="row justify-content-center">
                                {row.map((book) => (
                                    <div className="col-4 d-flex justify-content-center" key={book.id}>
                                        <div className={styles.childDiv}>
                                            <img
                                                className={styles.cover}
                                                src={book.cover}
                                                alt={book.title}
                                                draggable
                                                style={{ cursor: "grab" }}
                                                onDragStart={(e) => {
                                                    e.dataTransfer.setData("book", JSON.stringify(book));

                                                    const dragImage = new Image();
                                                    dragImage.src = book.cover;
                                                    dragImage.onload = () => {
                                                        e.dataTransfer.setDragImage(dragImage, dragImage.width / 2, dragImage.height / 2);
                                                    }
                                                }}
                                            />

                                            <button className={styles.deleteBtn} onClick={(e) => {
                                                e.stopPropagation();
                                                onDeleteBook(book.id);
                                            }}>
                                                <img src="../../images/x.png" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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
        </div >
    );
}

export default Bookshelf;