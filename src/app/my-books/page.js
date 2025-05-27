import Image from "next/image";
import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Header from "../components/header";
import Bookshelf from "../components/bookshelf";

export default function MyBooks() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main} className="container">
        <div id={styles.wrapper}>
          <Bookshelf></Bookshelf>

          <div id={styles.shelf}></div>
        </div>
        
        <div id={styles.listWrapper}>
          <button id={styles.createList}>Create List</button>
        </div>

      </div>
    </div>
  );
}
