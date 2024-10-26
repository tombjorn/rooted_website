import React from 'react';
import styles from './ThreeColCard.module.css';

const ThreeColumnTextCard = ({ title1, col1, title2, col2, title3, col3, background }) => {
    return (
        <div className={styles.ThreeColumnTextCard}>
            <div className={`${styles.Column} ${background ? styles.Background1 : styles.Background2}`}>
                <h3>{title1}</h3>
                <p>{col1}</p>
            </div>
            <div className={`${styles.Column} ${background ? styles.Background1 : styles.Background2}`}>
                <h3>{title2}</h3>
                <p>{col2}</p>
            </div>
            <div className={`${styles.Column} ${background ? styles.Background1 : styles.Background2}`}>
                <h3>{title3}</h3>
                <p>{col3}</p>
            </div>
        </div>
    );
};

export default ThreeColumnTextCard;
