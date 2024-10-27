import React from 'react';
import styles from './GoogleMapEmbedCard.module.css';

const GoogleMapEmbedCard = ({ title, content, location, zoom, background }) => {
  // Construct the Google Maps Embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_KEY}&q=${location.lat},${location.lng}&zoom=${zoom || 14}`;  return (
      <div className={`${styles.GoogleMapEmbedCard} ${background ? styles.Background1 : styles.Background2}`}>
          <div className={styles.GoogleMapEmbedCardText}>
              <h2 className={styles.GoogleMapEmbedCardTitle}>{title}</h2>
              <p className={styles.GoogleMapEmbedCardContent}>{content}</p>
          </div>
          <iframe
              className={styles.GoogleMapEmbedCardMap}
              src={mapUrl}
              frameBorder="0"
              allowFullScreen
              title="Google Map"
          ></iframe>
      </div>
  );
};

export default GoogleMapEmbedCard;
