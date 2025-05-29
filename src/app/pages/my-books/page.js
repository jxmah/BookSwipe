"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../../page.module.css";;
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Header from "../../components/header";
import Bookshelf from "../../components/bookshelf";
import PopUpForm from "../../components/PopUpForm";
import CreatedListDisplay from "../../components/createdListDisplay";

export default function MyBooks() {
  const [lists, setLists] = useState([]);

  const handleAddList = (newListName) => {
    setLists(prevLists => [...prevLists, { name: newListName, items: [] }]);
  };

  return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main} className="container">
        <Bookshelf></Bookshelf>
        <div id={styles.shelf}></div>
        <PopUpForm onAddList={handleAddList}></PopUpForm>
        <CreatedListDisplay lists={lists}></CreatedListDisplay>
      </div>
    </div>
  );
}
