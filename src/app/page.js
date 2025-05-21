import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import GenerateButtons from "./components/GenerateButtons";
import BookDetails from "./components/BookDetails";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main} className="container">
        <GenerateButtons></GenerateButtons>
        <BookDetails></BookDetails>
      </div>
    </div>
  );
}
