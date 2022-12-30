import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Wrapper } from './App.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import * as Scroll from 'react-scroll';

export const App = props => {

  const [search, setSearch] = useState('');
  const [galleryItems, setGalleryItems] = useState([]);
  const [modalImg, setModalImg] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('start');

  useEffect(() => {
    if (search === '') {
      setStatus('start');
      return;
    }
    const fetchImages = async (search, page) => {
      axios.defaults.baseURL = 'https://pixabay.com/api';
      try {
        setStatus('loading');
        const res = await axios.get(`/?key=30789438-6b548ae820f8dbd510a71ac78&per_page=12&q=${search}&page=${page}`);
        if (res.data.total === 0) {
          throw new Error('Images with your querry was not found');
        }
        setGalleryItems(prevState => [...prevState, ...getGalleryItems(res.data.hits)]);
        setStatus('loaded');
      } catch (error) {
        toast.error(error.message, {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        setStatus('start');
      }
    };
    fetchImages(search, page);
  }, [search, page]);

  //Autoscroll
  useEffect(() => {
    if (search === '' || page === 1) {
      return;
    }
    const scroll = Scroll.animateScroll;
    scroll.scrollTo(document.documentElement.scrollHeight - 150, {
      duration: 1500,
      delay: 100,
      smooth: 'easeInOutCubic',
    });
  }, [page, search]);

  const handleFormSubmit = (value) => {
    setSearch(value.search);
    setGalleryItems([]);
    setPage(1);
  };

  const handleModal = (image) => {
    setModalImg(image);
  };

  const getGalleryItems = (data) => {
    return data.map(el => ({
      id: el.id, webformatURL: el.webformatURL, largeImageURL: el.largeImageURL,
    }));
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };


  return (<Wrapper>
    <Searchbar onSubmit={handleFormSubmit} />
    {galleryItems.length > 0 && <ImageGallery galleryItems={galleryItems} onClick={handleModal} />}
    {status === 'loading' && <Loader />}
    {status === 'loaded' && <Button loadMore={loadMore} />}
    {modalImg && <Modal image={modalImg} onModalClose={handleModal} />}
    <ToastContainer />
  </Wrapper>);
};

