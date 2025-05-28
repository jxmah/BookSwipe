import Image from "next/image";
import styles from "../../page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Header from "../../components/header";
import Bookshelf from "../../components/bookshelf";

export default function Favourites() {
    return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main} className="container">
      </div>
    </div>
  );
}