const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


//SNACK 1

//Stampa in console ogni titolo nella console
//Crea un array (longBooks) con i libri che hanno più di 300 pagine;

const longBooks = books.filter((book) => book.pages > 300)

console.log(longBooks)

//Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.

const longBooksTitles = longBooks.map((book) => {
    return book.title
})

console.log(longBooksTitles)



//SNACK 2
//Creare un array (availableBooks) che contiene tutti i libri disponibili.

const availableBooks = books.filter((book) => book.available === true)
console.log(availableBooks)

/*Crea un array(discountedBooks) con gli availableBooks, 
 ciascuno con il prezzo scontato del 20 % 
 (mantieni lo stesso formato e arrotonda al centesimo)*/




//SNACK 3
//Creare un array (authors) che contiene gli autori dei libri.
const authors = books.map((book) => {
    return book.author
})


//Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.

const areAuthorsAdults = authors.every((author) => author.age >= 18)

console.log(areAuthorsAdults)

/*Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)*/

if (areAuthorsAdults === true) {
    authors.sort((a, b) => {
        return a.age - b.age;
    })
} else {
    authors.sort((a, b) => {
        return b.age - a.age;
    })
}
console.log(authors)