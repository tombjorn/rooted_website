import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React, { useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import styles from './Gallery.module.css'; // Import your custom styles here

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [
    {
      url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
      alt: 'Boat on Calm Water',
    },
    {
      url: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
      alt: 'Wintry Mountain Landscape',
    },
    {
      url: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
      alt: 'Mountains in the Clouds',
    },
    {
      url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
      alt: 'Waves at Sea',
    },
    {
      url: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
      alt: 'Yosemite National Park',
    },
  ];

  const openModal = (url) => {
    setCurrentImage(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <div>
      <Header />
      <div className={styles.Gallery}>
        <MDBContainer>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              className={`${styles.GalleryImage} shadow-1-strong rounded mb-4`} // Add a class for styling
              alt={image.alt}
              onClick={() => openModal(image.url)} // Pass the image URL
            />
          ))}
        </MDBContainer>

        {isModalOpen && (
          <div className={`${styles.ModalOverlay} ${isModalOpen ? styles.Show : ''}`} onClick={closeModal}>
            <img
              src={currentImage}
              className={`${styles.ModalImage} ${isModalOpen ? styles.Show : ''}`}
              alt="Modal"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
