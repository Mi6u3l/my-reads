import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Shelf from "./Shelf";
import * as BooksAPI from "./utils/BooksAPI";
import Search from "./Search";

class App extends Component {
  state = {
    books: []
  };

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  componentDidMount = () => {
    this.getAllBooks();
  };

  changeShelf = (book, shelf) => {
    const books = this.state.books;
    let bookExists = false;
    books.forEach(_book => {
      if (_book.id === book.id) {
        bookExists = true;
        _book.shelf = shelf;
      }
    });
    if (!bookExists) {
      books.push(book);
    }
    this.setState(state => ({
      books
    }));
    BooksAPI.update(book, shelf);
  };

  render = () => {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() =>
            <div>
              <header className="list-books-title">
                <h1 className="App-title">My Reads</h1>
              </header>
              <Shelf
                changeShelf={this.changeShelf}
                books={this.state.books}
                shelfTitle="Currenlty Reading"
                shelfName="currentlyReading"
              />
              <Shelf
                changeShelf={this.changeShelf}
                books={this.state.books}
                shelfTitle="Want to Read"
                shelfName="wantToRead"
              />
              <Shelf
                changeShelf={this.changeShelf}
                books={this.state.books}
                shelfTitle="Read"
                shelfName="read"
              />
              <div className="open-search">
                <Link to="/search">Add Contact</Link>
              </div>
            </div>}
        />
        <Route
          path="/search"
          render={({ history }) =>
            <Search changeShelf={this.changeShelf} books={this.state.books} />}
        />
      </div>
    );
  };
}

export default App;
