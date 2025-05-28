const BASE_URL = 'https://openlibrary.org';

export const generateBooks = async (category, decade) => {
    
    const url = `${BASE_URL}/subjects/${category.toLowerCase()}.json?limit=10`; // create a new URL object
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);

    return data.works.filter(book => {
        const year = book.first_publish_year;
        return (
            year &&
            year >= parseInt(decade) &&
            year < parseInt(decade) + 10
        );
    }).map(book => ({
        id: book.key,
        title: book.title,
        author: book.authors?.[0]?.name || "Unknown",
        year: book.first_publish_year || "N/A",
        cover: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : null,
        // about:
    }));
    
};

export const getBookDetails = async (id) => { // id:et ska hämtas från generateBooks (fixar det senare)
    const url = `${BASE_URL}${id}.json`; // create a new URL object
    
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