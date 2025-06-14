'use client';
import styles from "./styles.module.css";
import { useRouter } from 'next/navigation'

const ListDisplay = ({ lists = [], onDropBook, onDeleteList }) => {
    const router = useRouter();

    const handleDrop = (e, listName) => {
        e.preventDefault();

        const bookData = e.dataTransfer.getData("book");

        if (bookData) {
            const book = JSON.parse(bookData);
            onDropBook(listName, book);
        }
    };

    console.log("felsökning på onDropBook: ", onDropBook);
    console.trace("onDropBook trace");
    return (
        <div className={`${styles.createdListsWrapper} overflow-auto`}>
            <ul className={styles.savedList}>
                {lists.map((list, index) => (
                    <button
                        className={styles.listItem}
                        key={index}
                        type="button"
                        onClick={() => router.push(`/pages/my-books/${list.name}`)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, list.name)}
                    >
                        <li key={index}>
                            <div className={styles.listContent}>
                                <p className={styles.listName}>{list.name}</p>
                                <span
                                    className={styles.deleteBtn}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDeleteList(list.name);
                                    }}
                                >
                                    <img src="../../images/x.png" />
                                </span>
                            </div>
                            <p className={styles.itemsAmount}>{list.items.length} Book</p>
                        </li>
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default ListDisplay;