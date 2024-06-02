import "./App.css";
import * as BooksAPI from "../Services/BooksAPI.js";
import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import HomePage from "./HomePage.js";
import SearchBookPage from "./SearchBookPage.js";

function App() {
  const [books, setBooks] = useState([])

  // Get the entire list of books by calling the API.
  useEffect(() => {
    const getAllBook = async () => {
      const res = await BooksAPI.getAll()
      setBooks(res)
    }
    getAllBook()
  },[])

  // get data list Book shelf
  const ListBookShelf = (data) => {
    return {
      currentlyReading: {
          title: "Currently Reading",
          books: data.filter(book => book.shelf === "currentlyReading")
      },
      wantToRead: {
          title: "Want to Read",
          books: data.filter(book => book.shelf === "wantToRead")
      },
      read: {
          title: "Read",
          books: data.filter(book => book.shelf === "read")
      },
    }
  }

  // event handle update book
  const eventUpdBook = (bookUpdate, shelf) => {
    BooksAPI.update(bookUpdate, shelf)

    bookUpdate.shelf = shelf
    setBooks(prevBooks =>
      prevBooks.filter(book => book.id !== bookUpdate.id).concat(bookUpdate)
    )
  }

  return (
    <Routes>
      <Route exact path="/"
        element={
          <HomePage booksShelf={ListBookShelf(books)}
                    eventUpdBook={eventUpdBook}/>
        }
      />
      <Route exact path="/search"
        element={
          <SearchBookPage eventUpdBook={eventUpdBook}/>
        }
      />
    </Routes>

  );
}

export default App;
