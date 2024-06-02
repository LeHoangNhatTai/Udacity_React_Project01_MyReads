import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const HomePage = ({ booksShelf, eventUpdBook }) => {

    return (
        <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf bookShelf={booksShelf.currentlyReading} eventUpdBook={eventUpdBook} />
                <BookShelf bookShelf={booksShelf.wantToRead} eventUpdBook={eventUpdBook} />
                <BookShelf bookShelf={booksShelf.read} eventUpdBook={eventUpdBook} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        </div>
    )
}

HomePage.propTypes = {
    booksShelf: PropTypes.object,
    eventUpdBook: PropTypes.func.isRequired,
}

export default HomePage;