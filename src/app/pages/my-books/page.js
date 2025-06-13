"use client";
import { useState, useEffect } from "react";
import styles from "../../page.module.css";;
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/Header2";
import Bookshelf from "../../components/Bookshelf2";
import PopUpForm from "../../components/PopUpForm";
import ListDisplay from "../../components/ListDisplay";

export default function MyBooks() {
	const [lists, setLists] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [masterList, setMasterList] = useState([]);

	useEffect(() => {
		const fetchList = JSON.parse(localStorage.getItem("likedBooks")) || [];
		setMasterList(fetchList);
	}, []);

	useEffect(() => {
		const storedLists = localStorage.getItem("lists");
		if (storedLists) {
			setLists(JSON.parse(storedLists));
		}
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (isLoaded) {
			localStorage.setItem("lists", JSON.stringify(lists));
		}
	}, [lists, isLoaded]);

	const handleDeleteBook = (bookId) => {
		const updatedList = masterList.filter(item => item.id !== bookId);
		setMasterList(updatedList);
		localStorage.setItem("likedBooks", JSON.stringify(updatedList));
	}

	const handleAddList = (newListName) => {
		setLists(prevLists => [...prevLists, { name: newListName, items: [] }]);
	};

	const onDropBook = (listName, book) => {
		setLists(prevLists => {
			const updatedLists = prevLists.map(list => {
				if (list.name === listName) {
					const alreadyExists = list.items.some(item => item.id === book.id);
					if (alreadyExists)
						return list;

					return { ...list, items: [...list.items, book] };
				}
				return list;
			});

			localStorage.setItem("lists", JSON.stringify(updatedLists));
			return updatedLists;
		});
	};

	const handleDeleteList = (listToDelete) => {
		const updatedLists = lists.filter(list => list.name !== listToDelete);
		setLists(updatedLists);
		localStorage.setItem("lists", JSON.stringify(updatedLists));
	}

	return (
		<div className={styles.container}>
			<Header></Header>
			<div id={styles.main}>
				<Bookshelf masterList={masterList} onDeleteBook={handleDeleteBook} lists={lists} onDropBook={onDropBook}></Bookshelf>
				<div id={styles.shelf}></div>
				<PopUpForm onAddList={handleAddList}></PopUpForm>
				<ListDisplay lists={lists} onDropBook={onDropBook} onDeleteList={handleDeleteList}></ListDisplay>
			</div>
		</div >
	);
}
