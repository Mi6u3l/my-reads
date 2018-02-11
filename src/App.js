import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Shelf from "./Shelf";
import * as BooksAPI from "./utils/BooksAPI";

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
    BooksAPI.update(book, shelf).then(data => {
      this.getAllBooks();
    });
  };

  render = () => {
    return (
      <div className="App">
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
      </div>
    );
  };
}

export default App;
