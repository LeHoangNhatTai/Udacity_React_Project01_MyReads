import ListBooks from "./ListBooks";
import PropTypes from "prop-types";

const BookShelf = ({bookShelf, eventUpdBook}) => {
    
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookShelf.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <ListBooks listBook={bookShelf.books} eventUpdBook={eventUpdBook}/>
            </ol>
          </div>
        </div>
    )
}

BookShelf.propTypes = {
    bookShelf: PropTypes.object,
    eventUpdBook: PropTypes.func.isRequired,
}

export default BookShelf