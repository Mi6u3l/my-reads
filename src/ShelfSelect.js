import React, { Component } from "react";
import PropTypes from "prop-types";

class ShelfSelect extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render = () => {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={event => {
            this.props.changeShelf(this.props.book, event.target.value);
          }}
          defaultValue={this.props.book.shelf}>
          <option value="" disabled>
            Move to...
          </option>
          <option value="none">None</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    );
  };
}

export default ShelfSelect;
