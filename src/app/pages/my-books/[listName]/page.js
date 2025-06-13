'use client'
import styles from "../../../page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../../components/Header";
import DynamicListDisplay from "../../../components/DynamicListDisplay";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ListName() {
  const [list, setList] = useState([]);
  const { listName } = useParams();
  const decodedListName = decodeURIComponent(listName);

  useEffect(() => {
    const fetchList = JSON.parse(localStorage.getItem("lists")) || [];
    setList(fetchList);
  }, []);

  const deleteBook = (listName, bookId) => {
    const fetchLists = JSON.parse(localStorage.getItem("lists")) || [];
    const updatedList = fetchLists.map(list => {
      if (list.name === listName) {
        return {
          ...list,
          items: list.items.filter(book => book.id !== bookId)
        };
      }
      return list;
    });

    localStorage.setItem("lists", JSON.stringify(updatedList));
    setList(updatedList);
    return;
  }

  return (
    <div className={styles.container}>
      <Header></Header>
      <div id={styles.main}>
        <h1 className={styles.selectedList}> {decodedListName.charAt(0).toUpperCase() + decodedListName.slice(1)}</h1>
        <DynamicListDisplay list={list} deleteBook={deleteBook}></DynamicListDisplay>
      </div>
    </div>
  )
}