import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render(props) {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: <div className="btn btn-primary">{this.props.book.title}</div></div>
        <br />
        <div>Pages: <div className="btn btn-info">{this.props.book.pages}</div></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);