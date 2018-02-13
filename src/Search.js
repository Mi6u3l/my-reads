import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import * as BooksAPI from "./utils/BooksAPI";
import escapeRegExp from "escape-string-regexp";

class Search extends Component {
  state = {
    query: "",
    filteredBooks: []
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      this.state.filteredBooks = this.props.books.filter(book =>
        match.test(book.title)
      );
    } else {
      this.state.filteredBooks = [];
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
        <div className="search-firstshelf">
          <Shelf
            changeShelf={this.props.changeShelf}
            books={this.state.filteredBooks}
            shelfTitle="Currenlty Reading"
            shelfName="currentlyReading"
          />
          <Shelf
            changeShelf={this.props.changeShelf}
            books={this.state.filteredBooks}
            shelfTitle="Want to Read"
            shelfName="wantToRead"
          />
          <Shelf
            changeShelf={this.props.changeShelf}
            books={this.state.filteredBooks}
            shelfTitle="Read"
            shelfName="read"
          />
        </div>
      </div>
    );
  }
}

export default Search;
