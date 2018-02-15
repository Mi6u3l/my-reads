import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import Book from "./Book";
import * as BooksAPI from "./utils/BooksAPI";
import escapeRegExp from "escape-string-regexp";

class Search extends Component {
  state = {
    query: "",
    filteredBooks: []
  };

  updateQuery = query => {
    this.setState({ query });
    if (query) {
      BooksAPI.search(query).then(filteredBooks => {
        if (filteredBooks.error) {
          this.setState({ filteredBooks: [] });
        } else {
          this.setState({ filteredBooks });
        }
      });
    } else {
      this.setState({ filteredBooks: [] });
    }
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <div className="search-books-bar">
          <Link to="/">
            <div className="close-search" />
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search books"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-genericshelf">
          <ol className="books-grid">
            {this.state.filteredBooks.map(book =>
              <li key={book.id}>
                <Book
                  books={this.props.filteredBooks}
                  book={book}
                  changeShelf={this.props.changeShelf}
                  getBookShelf={this.props.getBookShelf}
                />
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
