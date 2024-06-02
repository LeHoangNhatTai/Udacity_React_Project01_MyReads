import React  from "react";
import PropTypes from 'prop-types';


const Book = ({book, eventUpdBook}) => {

    return (
        <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url("${book.imageLinks ? book.imageLinks.thumbnail : '../Icons/not_imageLinks.svg'}")`,
                }}
                ></div>
                <div className="book-shelf-changer">
                <select onChange={(event) => eventUpdBook(book, event.target.value)} defaultValue={book.shelf ?? "none"}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors?.join(', ') ?? "none author"}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    eventUpdBook: PropTypes.func.isRequired,
}

export default Book;