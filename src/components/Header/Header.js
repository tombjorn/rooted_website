import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY && isVisible) {
            // Scrolling down
            setIsVisible(false);
        } else if (window.scrollY < lastScrollY && !isVisible) {
            // Scrolling up
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isVisible]); // Add isVisible to the dependencies

    return (
        <header className={`${styles.HeaderWrapper} ${isVisible ? styles.visible : styles.hidden}`}>
            <nav className={styles.Navbar}>
                <ul className={styles.NavbarContent}>
                    <li className={styles.NavbarLogo}>
                        ROOTED
                    </li>
                    <div className={styles.NavbarLinks}>
                        <li>About Us</li>
                        <li>What is Reflexology?</li>
                        <li>Testimonials</li>
                        <li>Wellness</li>
                    </div>
                    <li className={styles.NavbarButtons}>
                        <div className={styles.ContactInfo}>
                            <span>01206 777777</span>
                            <span>rootedReflex@gmail.com</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
