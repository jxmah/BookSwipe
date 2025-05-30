//----------------bookshelf
"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Bookshelf = ({ createList = [] }) => {
    const [masterList, setMasterList] = useState([]);
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");

        const saveLikedBooks = localStorage.getItem("likedBooks");
        const updateMasterList = JSON.parse(saveLikedBooks);
        setMasterList(updateMasterList);
        localStorage.setItem("masterList", JSON.stringify(updateMasterList));
    }, []);

    return (
        <div className={styles.shelfWrapper}>
            <div id="carouselExample" className="carousel slide">
                <div className={styles.carouselInner}>
                    {masterList.map((book, index) => (
                        <div id={styles.coverItem} className={(`carousel-item ${index === 0 ? "active" : ""}`)} key={book.id} >
                            <img className={styles.cover} src={book.cover} alt={book.title} />
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ filter: "invert(0.7)" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ filter: "invert(0.7)" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

//-------------------listDisplay
'use client';
import Link from 'next/link'
import styles from "./styles.module.css";
import { useRouter } from 'next/navigation'

const ListDisplay = ({ lists = [] }) => {
    const router = useRouter()
    return (
        <div className={styles.createdListsWrapper}>
            <ul className={styles.savedList}>
                {lists.map((list, index) => (
                    <button className={styles.listItem} type="button" onClick={() => router.push(`/pages/my-books/${list.name}`)}>
                        <li  key={index}>
                            <p className={styles.listName}>{list.name}</p>
                            <p className={styles.itemsAmount}>{list.items.length} Book</p>
                        </li>
                    </button>
                ))}
            </ul>
        </div>
    );
};

//-------------------mybookspage
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