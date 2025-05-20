"use client";
import styles from "./styles.module.css";

const GenerateButtons = (buttons) => {
    return (
        <div>
            <form className="form-inline">
                <div className={styles.row}>
                    <div className="col">
                        <select className="form-control" name="category" id="category">
                            <option value="0" disabled></option>
                            <option>Classics</option>
                            <option>Romance</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Non-fiction</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control" name="rating" id="rating">
                            <option value="0" disabled></option>
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