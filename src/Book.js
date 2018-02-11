import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfSelect from "./ShelfSelect.js";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <img className="book-cover" src={book.imageLinks.smallThumbnail} />
          <ShelfSelect />
        </div>
        <div className="book-title">
          {book.title}
        </div>
        <div className="book-authors">
          {book.authors}
        </div>
      </div>
    );
  }
}

export default Book;
