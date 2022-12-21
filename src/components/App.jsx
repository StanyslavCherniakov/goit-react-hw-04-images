import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { fetchImages } from '../services/api-service';
import { RotatingLines } from 'react-loader-spinner';


export class App extends Component {
  state = {
    searchQuerry: '',
    galleryItems: [],
    page: 1,
    status: 'start',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuerry !== this.state.searchQuerry || prevState.page !== this.state.page) {
      this.setState({ status: 'loading' });
      const res = await fetchImages(this.state.searchQuerry, this.state.page);
      this.setState((prevState) => (
        {
          galleryItems: [...prevState.galleryItems, ...res.data.hits],
          status: 'loaded',
        }
      ));
    }
  }

  handleFormSubmit = (value) => {
    this.setState({
      searchQuerry: value.search,
      galleryItems: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (<div>
      <Searchbar onSubmit={this.handleFormSubmit} />
      <ImageGallery galleryItems={this.state.galleryItems} />
      {this.state.status === 'loading' && <RotatingLines
        strokeColor='grey'
        strokeWidth='5'
        animationDuration='0.75'
        width='96'
        visible={true}
      />}
      {this.state.status === 'loaded' && <Button loadMore={this.loadMore} />}
    </div>);
  }
}


