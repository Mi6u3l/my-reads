import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Shelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.shelfTitle}
        </h2>
        <ol className="books-grid">
          {this.props.books
            .filter(book => book.shelf === this.props.shelfName)
            .map(book =>
              <li key={book.id}>
                <Book book={book} />
              </li>
            )}
        </ol>
      </div>
    );
  }
}

export default Shelf;
