import { Link } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import ListBooks from "./ListBooks";
import PropTypes from "prop-types";
import * as BooksAPI from "../Services/BooksAPI.js";

const SearchBookPage = ({listBooks, eventUpdBook}) => {
  const [booksSearch, setBooksSearch] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    let isMounted = true;

    const bookShelfProperty = (books) => {
        const result = books?.map(bookSearch => {
            const findBook = listBooks.find(book => book.id === bookSearch.id);
            if(findBook) {
              return {...bookSearch, shelf: findBook.shelf};
            }
            return bookSearch;
        }) ?? [];
  
        setBooksSearch(result);
    }
    
    if(searchQuery === '') {
      setBooksSearch([]);
    }
    else {
      BooksAPI.search(searchQuery).then(res => {
        isMounted ? bookShelfProperty(res) : setBooksSearch([])
      });

      return () => {
        isMounted = false;
      };
    }
  }, [searchQuery, listBooks])

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
      <div className="search-books">
          <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
              <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={searchQuery}
              onChange={handleSearchQuery}
              />
          </div>
          </div>
          <div className="search-books-results">
            {booksSearch && booksSearch.length > 0 ? (
              <ListBooks listBook={booksSearch} eventUpdBook={eventUpdBook}/>
            ) : (
              <h1>There are no books matching the search information.</h1>
            )}
          </div>
      </div>
  )
}

SearchBookPage.propTypes = {
    listBooks: PropTypes.array.isRequired,
    eventUpdBook: PropTypes.func.isRequired,
  };

export default SearchBookPage;