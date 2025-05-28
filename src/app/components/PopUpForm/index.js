'use client';
import { useState } from 'react';
import styles from "./styles.module.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PopUpForm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.wrapper}>
            <Button className={styles.createListBtn} onClick={handleShow}>
                Create List
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                contentClassName={styles.modalContent}
                dialogClassName={styles.modalDialog}
            >
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title className={styles.modalTitle}>Create New List</Modal.Title>
                </Modal.Header>

                <Modal.Body className={styles.modalBody}>
                    <form className={styles.form}>
                        <div className={`form-group ${styles.formGroup}`}>
                            <label className={styles.modalLabel} htmlFor="newList">
                                Name
                            </label>
                            <input
                                type="text"
                                className={`form-control ${styles.modalInput}`}
                                id="newList"
                                placeholder="Favs..."
                            />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer className={styles.modalFooter}>
                    <Button variant="secondary" className={styles.closeBtn} onClick={handleClose}>
                        Close
                    </Button>
                    <Button className={styles.saveBtn} onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PopUpForm;
