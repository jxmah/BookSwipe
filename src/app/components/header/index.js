'use client';
import Link from 'next/link'
import styles from "./styles.module.css";
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>BookSwipe</h1>
            <nav className={styles.nav}>
                <Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} href="/">Swipe</Link>
                <Link className={`${styles.link} ${pathname === '/pages/my-books' ? styles.active : ''}`} href="/pages/my-books">My Books</Link>
            </nav>
        </header>
    );
};

export default Header;