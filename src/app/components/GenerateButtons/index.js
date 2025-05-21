"use client";
import styles from "./styles.module.css";

const GenerateButtons = (buttons) => {
    return (
        <div>
            <form className="form-inline">
                <div className={styles.row}>
                    <div className="col flex">
                        <select className={`${styles.select} ${styles.selectGenre}`} name="category" id="category">
                            <option value="" disabled selected>Genre</option>
                            <option>Classics</option>
                            <option>Romance</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Non-fiction</option>
                        </select>
                    </div>
                    <div className="col flex">
                        <select className={`${styles.select} ${styles.selectRating}`} name="rating" id="rating">
                            <option value="" disabled selected>Rating</option>
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
        </div>
    );
};

export default GenerateButtons;