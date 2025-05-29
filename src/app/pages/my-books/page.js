"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../page.module.css";;
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Header from "../../components/Header";
import Bookshelf from "../../components/Bookshelf";
import PopUpForm from "../../components/PopUpForm";
import ListDisplay from "../../components/ListDisplay";

export default function MyBooks() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const storedLists = localStorage.getItem("lists");
    if (storedLists) {
      setLists(JSON.parse(storedLists));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

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
        <ListDisplay lists={lists}></ListDisplay>
      </div>
    </div>
  );
}
