const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.NEXT_PUBLIC_KEY;

export const generateBooks = async (category, rating) => {
    let bookFilter = ''; // where the query string is stored
    if (category) { // if category is provided
        bookFilter += `subject:${category}`; // add it to the query string
    }

    if (rating) { // if rating is provided
        bookFilter += `+averageRating:${rating}`; // add it to the query string
    }

    const url = new URL(`${BASE_URL}?q=${bookFilter}&key=${API_KEY}&maxResults=5`); // create a new URL object
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);

    return (data.items || [])
    .filter(book =>
        book.id &&
        book.volumeInfo?.title &&
        book.volumeInfo?.authors?.[0] &&
        book.volumeInfo?.publishedDate &&
        book.volumeInfo?.imageLinks?.thumbnail
    )
    .map(book => ({
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.[0],
        year: book.volumeInfo.publishedDate,
        cover: book.volumeInfo.imageLinks?.thumbnail || '',
        about: book.volumeInfo.description || 'No description available'
    })); 
    
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