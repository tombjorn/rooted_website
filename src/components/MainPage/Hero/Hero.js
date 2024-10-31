import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className={styles.Hero}>
            <img src='walking-wide.png' alt='hero' className={styles.HeroImage} />
            <div className={styles.HeroContent}>
                <h1 className={styles.Heading}>Relax and unwind</h1>
                <Link to="/enquire" className={styles.BookButton}>
                    Book Now
                </Link>
            </div>
        </div>
    );
}

export default Hero;
