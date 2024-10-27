import React from 'react';
import styles from './Hero.module.css';

import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    
    const goToEnquire = () => {
        navigate('/../Enquire');
    };
    return (
        <div className={styles.Hero}>
            <img src='card-placeholder.jpg' alt='hero' className={styles.HeroImage} />
            {/* <div className={styles.HeroImage}></div> */}
            <div className={styles.HeroContent}>
                <h1 className={styles.Heading}>Relax and unwind</h1>
                <button onClick={goToEnquire} className={styles.BookButton}>Enquire</button>
            </div>
        </div>
    );
};

export default Hero;
