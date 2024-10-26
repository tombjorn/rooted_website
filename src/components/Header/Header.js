import React, { useEffect, useState, useCallback } from 'react';
import styles from './Header.module.css';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Memoizing the handleScroll function
    const handleScroll = useCallback(() => {
        if (window.scrollY > lastScrollY && isVisible) {
            // Scrolling down
            setIsVisible(false);
        } else if (window.scrollY < lastScrollY && !isVisible) {
            // Scrolling up
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY, isVisible]); // Include dependencies

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]); // Add handleScroll as a dependency

    return (
        <header className={`${styles.HeaderWrapper} ${isVisible ? styles.visible : styles.hidden}`}>
            <nav className={styles.Navbar}>
                <ul className={styles.NavbarContent}>
                    <li className={styles.NavbarLogo}>ROOTED</li>
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
