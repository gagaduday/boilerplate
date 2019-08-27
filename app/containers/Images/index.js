import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
// import ImageList from './ImageList';

export class Images extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        {/* <ImageList /> */}
        <p>111</p>
      </div>
    );
  }
}

export default Images;
