import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfSelect from "./ShelfSelect.js";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render = () => {
    const { books, book, changeShelf, getBookShelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <img
            className="book-cover"
            src={
              book.imageLinks !== undefined
                ? book.imageLinks.smallThumbnail
                : ""
            }
          />
          <ShelfSelect
            books={books}
            getBookShelf={getBookShelf}
            changeShelf={changeShelf}
            book={book}
          />
        </div>
        <div className="book-title">
          {book.title}
        </div>
        <div className="book-authors">
          {book.authors}
        </div>
      </div>
    );
  };
}

export default Book;
