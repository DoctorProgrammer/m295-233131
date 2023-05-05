const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


let books = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        isbn: '9781408855652'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        isbn: '9780544003415'
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        isbn: '9780547928227'
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        isbn: '9780307474278'
    },
    {
        title: 'The Lost Symbol',
        author: 'Dan Brown',
        isbn: '9781400079148'
    },
    {
        title: 'Inferno',
        author: 'Dan Brown',
        isbn: '9780385537858'
    },
    {
        title: 'Origin',
        author: 'Dan Brown',
        isbn: '9780525563709'
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        isbn: '9780439023481'
    },
    {
        title: 'Catching Fire',
        author: 'Suzanne Collins',
        isbn: '9780439023498'
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        isbn: '9780439023511'
    }
]

let lends = [
    {
        id: '1',
        book: {
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            isbn: '9781408855652'
        }
    },
    {
        id: '2',
        book: {
            title: 'Lord of the Rings',
            author: 'J.R.R. Tolkien',
            isbn: '9780544003415'
        }
    },
]

app.get('/books', (req, res) => {
    console.log(`Port: ${port}\tGET: /books\t\t ${new Date().toString()}`);

    res.status(204).send(books);
});

app.get('/books/:isbn', (req, res) => {
    console.log(`Port: ${port}\tGET: /books/:isbn\t ${new Date().toString()}`);
    const isbn = req.params.isbn;
    const booksByISBN = books.filter((book) => book.isbn === isbn);

    res.status(204).send(booksByISBN);
});

app.post('/books', (req, res) => {
    console.log(`Port: ${port}\tPOST: /books\t\t ${new Date().toString()}`);
    const book = {
        title: req.query.title,
        author: req.query.author,
        isbn: req.query.isbn
    };
    books.push(book);

    res.status(204).send(books);
});

app.put('/books/:isbn', (req, res) => {
    console.log(`Port: ${port}\tPUT: /books/:isbn\t ${new Date().toString()}`);
    const isbn = req.params.isbn;
    const book = {
        title: req.query.title,
        author: req.query.author,
        isbn: req.query.isbn
    };
    const booksByISBN = books.filter((book) => book.isbn === isbn);
    const index = books.indexOf(booksByISBN[0]);
    books[index] = book;

    res.status(204).send(books[index]);
});

app.delete('/books/:isbn', (req, res) => {
    console.log(`Port: ${port}\tDELETE: /books/:isbn\t ${new Date().toString()}`);
    const isbn = req.params.isbn
    books = books.filter((b) => b.isbn != isbn)

    res.status(204).send(books);
})

// ---------------------------------------------------------------------------------------------

app.get('/lends', (req, res) => {
    console.log(`Port: ${port}\tGET: /lends\t\t ${new Date().toString()}`);

    res.send(lends);
});

app.get('/lends/:id', (req, res) => {
    console.log(`Port: ${port}\tGET: /lends/:id\t\t ${new Date().toString()}`);
    const id = req.params.id;
    const lendsById = lends.filter((lend) => lend.id === id); // Funktioniert nicht

    res.send(lendsById);
});

app.post('/lends', (req, res) => {
    console.log(`Port: ${port}\tPOST: /lends\t\t ${new Date().toString()}`);
    const book = books.filter((book) => book.isbn === req.query.isbn);
    const lend = {
        id: lends.length + 1,
        book: book[0]
    }
    lends.push(lend);

    res.send(lends);
});

app.patch('/lends/:id', (req, res) => {
    console.log(`Port: ${port}\tPATCH: /lends/:id\t\t ${new Date().toString()}`);
    const id = req.params.id;
    const book = books.filter((book) => book.isbn === req.query.isbn);
    const lend = lends.filter((lend) => lend.id === id);
    const index = lends.indexOf(lend[0]);
    lends[index].book = book;

    res.send(lends[index]);
});

app.listen(port, () => {
    console.log(
        `\nPort: ${port}\thttp://localhost:${port}\t\t${new Date().toString()}`
    );
});