import PropTypes from "prop-types";
import Book from "./Book";

const ListBooks = ({ listBook, eventUpdBook }) => {

    return (
        <ol className="books-grid">
            {listBook.map(book => <Book key={book.id} book={book} eventUpdBook={eventUpdBook} />)}
        </ol>
    )
}

ListBooks.propTypes = {
    listBook: PropTypes.array,
    eventUpdBook: PropTypes.func.isRequired,
}

export default ListBooks;