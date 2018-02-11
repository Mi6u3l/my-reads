import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Shelve from "./Shelve";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="list-books-title">
          <h1 className="App-title">My Reads</h1>
        </header>
        <Shelve shelveName="Currenlty Reading" />
        <Shelve shelveName="Want to Read" />
        <Shelve shelveName="Read" />
      </div>
    );
  }
}

export default App;
