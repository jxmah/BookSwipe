'use client'
import Image from "next/image";
import Link from 'next/link'
import styles from "../../../page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation'
import Header from "../../../components/Header";
 
export default function ListName() {
   return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main} className="container">
        <h1>dynamic route</h1>
      </div>
    </div>
  )
}