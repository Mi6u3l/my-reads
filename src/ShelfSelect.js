import React, { Component } from "react";
import PropTypes from "prop-types";

class ShelfSelect extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    );
  }
}

export default ShelfSelect;
