import React from 'react';
import styles from './TwoColCard.module.css';

const TwoColumnTextCard = ({ title1, col1, title2, col2, background }) => {
    return (
        <div className={styles.TwoColumnTextCard}>
            <div className={`${styles.Column} ${background ? styles.Background1 : styles.Background2}`}>
                <h3>{title1}</h3>
                <p>{col1}</p>
            </div>
            <div className={`${styles.Column} ${background ? styles.Background1 : styles.Background2}`}>
                <h3>{title2}</h3>
                <p>{col2}</p>
            </div>
        </div>
    );
};

export default TwoColumnTextCard;
