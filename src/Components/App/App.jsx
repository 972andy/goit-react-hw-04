
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import axios from 'axios';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal'; 
import { Toaster } from 'react-hot-toast';

function App() {
  const [images, setImages] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState(''); 
  const [page, setPage] = useState(1); 
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null); 

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);
    setPage(1); 
    setImages([]); 
  };

  const fetchImages = async (searchQuery, pageNum) => {
    if (!searchQuery) return; 
    try {
      setIsLoading(true);
      setIsError(false);

      const url = searchQuery
        ? 'https://api.unsplash.com/search/photos'
        : 'https://api.unsplash.com/photos';

      const { data } = await axios.get(url, {
        params: {
          client_id: 'dPdHUq4Jmuk-MwG5sdvUeRcZGH2g4tbB4Hj9G9VS1W0',
          query: searchQuery,
          page: pageNum,       
          per_page: 12,
        },
      });

      setImages((prevImages) => [
        ...prevImages,
        ...(searchQuery ? data.results : data),
      ]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    
    if (searchValue) {
      fetchImages(searchValue, page);
    }
  }, [searchValue, page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSearch={onSearch} />
      {isError && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={openModal} /> 
      <Loader isLoading={isLoading} />
       {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )} 
      
      {/* Додаємо компонент ImageModal */}
      {selectedImage && (
        <ImageModal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal} 
          image={selectedImage} 
        />
      )}
    </>
  );
}

export default App;




