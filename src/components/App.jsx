import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import { fetchImages } from '../services/api-service';

export class App extends Component {
  state = {
    searchQuerry: '',
    galleryItems: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuerry !== this.state.searchQuerry) {
      const res = await fetchImages(this.state.searchQuerry);
      console.log(res);
      this.setState((prevState) => (
        { galleryItems: [...prevState.galleryItems, ...res.data.hits] }
      ));
    }
  }

  handleFormSubmit = (value) => {
    this.setState({ searchQuerry: value.search });
  };

  render() {
    return (<div>
      <Searchbar onSubmit={this.handleFormSubmit} />
    </div>);
  }
}

App.propTypes = {};

