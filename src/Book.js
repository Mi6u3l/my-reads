import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book } = this.props;
    return (
      <div className='book'>
          <img className='book-cover' src={book.imageLinks.smallThumbnail} />
          <div className='book-title'>{book.title}</div>
          <div className='book-authors'>{book.authors}</div>
      </div>
    );
  }
}

export default Book;
