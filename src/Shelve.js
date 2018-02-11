import React, { Component } from "react";
import PropTypes from "prop-types";

class Shelve extends Component {
  static propTypes = {
    shelveName: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.shelveName}
        </h2>
      </div>
    );
  }
}

export default Shelve;
