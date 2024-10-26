import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.Hero}>
            <img src='card-placeholder.jpg' alt='hero' className={styles.HeroImage} />
            {/* <div className={styles.HeroImage}></div> */}
            <div className={styles.HeroContent}>
                <h1 className={styles.Heading}>Relax and unwind</h1>
                <button className={styles.BookButton}>Enquire</button>
            </div>
        </div>
    );
};

export default Hero;
