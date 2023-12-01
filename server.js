const express = require("express");
const app = express();
const port = 8000;


const book = {
    "books": [
      {
        "author": "J.K. Rowling",
        "title": "Harry Potter and the Sorcerer's Stone",
        "genre": "Fantasy"
      },
      {
        "author": "George Orwell",
        "title": "1984",
        "genre": "Dystopian"
      },
      {
        "author": "George Orwell",
        "title": "Down and Out in Paris and London",
        "genre": "memoir"
      },
      {
        "author": "Jane Austen",
        "title": "Pride and Prejudice",
        "genre": "Classic"
      }
      // ... more books can be added here
    ]
  }
  

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:authorName', (req,res) => {
    // this is the array of books
     const booksArray = book.books 
    let bookAuthor = req.params.authorName
    // returning filtered array
    let booksByAuthor = booksArray.filter(b => b.author === bookAuthor);
   res.json(booksByAuthor)

    // booksArray.forEach((book) => {
    //     if (bookAuthor === book.author) {
    //         res.json(bookAuthor)
    //     }
    // })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});