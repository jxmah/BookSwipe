const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.key;

export const generateBooks = async (category, rating) => {
    let bookFilter = ''; // where the query string is stored
    if (category) { // if category is provided
        bookFilter += `subject:${category}`; // add it to the query string
    }

    if (rating) { // if rating is provided
        bookFilter += `+averageRating:${rating}`; // add it to the query string
    }

    const url = new URL(`${BASE_URL}?q=${bookFilter}&key=${API_KEY}`); // create a new URL object
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};

export const getBookDetails = async (id) => { // id:et ska hämtas från generateBooks (fixar det senare)
    const url = new URL(`${BASE_URL}/${id}?key=${API_KEY}`); // create a new URL object
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};

// google books json names
// id for book id
// averageRating for rating
// mainCategory for genre
// categories for more genres ig