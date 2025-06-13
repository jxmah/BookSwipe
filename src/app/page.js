import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header2";
import BookForm from "./components/BookForm";

export default function Swipe() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main}>
        <BookForm></BookForm>
      </div>
    </div>
  );
}
