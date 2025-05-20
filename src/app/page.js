import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
    </div>
  );
}
