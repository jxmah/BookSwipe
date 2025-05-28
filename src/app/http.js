const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/current';
const API_KEY = process.env.NEXT_PUBLIC_KEY;

export const generateBooks = async (listName) => {

    const url = `${BASE_URL}/${listName}.json?api-key=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);

    return data.results.books
    .filter(book =>
        book.title &&
        book.author &&
        book.book_image
    )
    .map(book => ({
        id: book.primary_isbn13,
        title: book.title,
        author: book.author,
        year: "Recent",
        cover: book.book_image,
        about: book.description || 'No description available'
    })); 
    
};

/*export const getBookDetails = async (id) => { // id:et ska hämtas från generateBooks (fixar det senare)
    const url = new URL(`${BASE_URL}/${id}?key=${API_KEY}`); // create a new URL object
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};*/

// google books json names
// id for book id
// averageRating for rating
// mainCategory for genre
// categories for more genres ig