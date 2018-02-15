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

  getBookShelf = bookId => {
    const books = this.state.books;
    return books.find(_book => {
      return bookId == _book.id;
    });
  };

  changeShelf = (book, shelf) => {
    const books = this.state.books;

    //check if book is new i.e. came from search screen
    let foundBook = books.find(_book => {
      return book.id == _book.id;
    });
    if (!foundBook) {
      books.push(book);
    }

    //assigning the correct shelf to the book
    let bookToUpdate = books.find(_book => {
      return book.id == _book.id;
    });
    bookToUpdate.shelf = shelf;

    this.setState(state => ({
      books
    }));

    //update book shelf on API
    BooksAPI.update(bookToUpdate, shelf);
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
                getBookShelf={this.getBookShelf}
                books={this.state.books}
                shelfTitle="Currenlty Reading"
                shelfName="currentlyReading"
              />
              <Shelf
                changeShelf={this.changeShelf}
                getBookShelf={this.getBookShelf}
                books={this.state.books}
                shelfTitle="Want to Read"
                shelfName="wantToRead"
              />
              <Shelf
                changeShelf={this.changeShelf}
                getBookShelf={this.getBookShelf}
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
            <Search
              getBookShelf={this.getBookShelf}
              changeShelf={this.changeShelf}
              books={this.state.books}
            />}
        />
      </div>
    );
  };
}

export default App;
