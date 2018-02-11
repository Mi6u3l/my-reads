import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Shelf from "./Shelf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="list-books-title">
          <h1 className="App-title">My Reads</h1>
        </header>
        <Shelf shelfTitle="Currenlty Reading" shelfName="currentlyReading"/>
        <Shelf shelfTitle="Want to Read" shelfName="wantToRead"/>
        <Shelf shelfTitle="Read" shelfName="read"/>
      </div>
    );
  }
}

export default App;
