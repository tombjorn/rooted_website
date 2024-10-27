import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/');
    };
    const goToFAQ = () => {
        navigate('/FAQ');
    };
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    {/* Company Section */}
                    <div className={styles.footerCol}>
                        <h4>Get to know us...</h4>
                        <ul>
                            <li><a onClick={goToHome} href="#!">Home</a></li>
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Treatments</a></li>
                            <li><a href="#!">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Get Help Section */}
                    <div className={styles.footerCol}>
                        <h4>Info</h4>
                        <ul>
                            <li><a onClick={goToFAQ} href="#!">FAQ</a></li>
                            <li><a href="#!">Pricing</a></li>
                            <li><a href="#!">Bookings</a></li>
                        </ul>
                    </div>

                    {/* Online Shop Section */}
                    <div className={styles.footerCol}>
                        <h4>Wellness</h4>
                        <ul>
                            <li><a href="#!">Recipes</a></li>
                            <li><a href="#!">Exercises</a></li>
                            <li><a href="#!">Blog</a></li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div className={styles.footerCol}>
                        <h4>Follow Us</h4>

                        {/* Newsletter Signup Section */}
                        <div className={styles.newsletter}>
                            <h5>Sign Up for Our Newsletter</h5>
                            <form className={styles.newsletterForm}>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className={styles.newsletterInput} 
                                    required 
                                />
                                <button type="submit" className={styles.newsletterButton}>
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#!"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#!"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#!"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
