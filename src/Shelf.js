import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./utils/BooksAPI";
import Book from "./Book";

class Shelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    shelfName: PropTypes.string.isRequired
  };

  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      console.log(books);
    });
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.shelfTitle}
        </h2>
        <ol className="books-grid">
          {this.state.books
            .filter(book => book.shelf === this.props.shelfName)
            .map(book =>
              <li key={book.id} className="contact-list-item">
                <Book book={book} />
              </li>
            )}
        </ol>
      </div>
    );
  }
}

export default Shelf;
