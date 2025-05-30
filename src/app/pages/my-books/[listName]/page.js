'use client'
import Image from "next/image";
import Link from 'next/link'
import styles from "../../../page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../../components/Header";
import DynamicListDisplay from "../../../components/DynamicListDisplay";
import { useParams } from "next/navigation";
 
export default function ListName() {
  const {listName} = useParams();
   return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main} className="container">
        <h1 className={styles.selectedList}> {listName.charAt(0).toUpperCase() + listName.slice(1)}</h1>
        <DynamicListDisplay></DynamicListDisplay>
      </div>
    </div>
  )
}