import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header";
import Bookshelf from "../components/bookshelf";

export default function MyBooks() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main} className="container">
        <div id={styles.wrapper}>
          wrapper-mybooks
          <Bookshelf></Bookshelf>

          <div id={styles.shelf}>wrapper</div>

          
        </div>

        
        




      </div>
    </div>
  );
}
