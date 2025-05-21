'use client';
import Link from 'next/link'
import styles from "./styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>BookSwipe</h1>
            <nav className={styles.nav}>
                <Link className={styles.link} href="/swipe">Swipe</Link>
                <Link className={styles.link} href="/my-books">My Books</Link>
            </nav>
        </header>
    );
};

export default Header;