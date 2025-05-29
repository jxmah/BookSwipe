'use client';
import { useState } from 'react';
import styles from "./styles.module.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PopUpForm = ({ onAddList }) => {
    const [show, setShow] = useState(false);
    const [listName, setListName] = useState('');
    const [error, setError] = useState('')

    const handleClose = () => {
        setError('');
        setShow(false);
    };

    const handleShow = () => {
        setError('');
        setShow(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!listName.trim()) {
            setError('List name cannot be empty.');
            return;
        }

        if (listName.trim().length < 3) {
            setError('List name must be three characters at least.')
            return;
        }

        setError('');
        onAddList(listName.trim());
        handleClose();
    };

    return (
        <div className={styles.wrapper}>
            <Button variant="outline-secondary" className={styles.createListBtn} onClick={handleShow}>
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
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}
                        <div className={`form-group ${styles.formGroup}`}>
                            <label className={styles.modalLabel} htmlFor="newList">
                                Name
                            </label>
                            <input
                                type="text"
                                className={`form-control ${styles.modalInput}`}
                                id="newList"
                                placeholder="Favs..."
                                value={listName}
                                onChange={(e) => setListName(e.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer className={styles.modalFooter}>
                    <Button variant="secondary" className={styles.closeBtn} onClick={handleClose}>
                        Close
                    </Button>
                    <Button className={styles.saveBtn} onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PopUpForm;
