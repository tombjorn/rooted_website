import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    {/* Company Section */}
                    <div className={styles.footerCol}>
                        <h4>Get to know us...</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/treatments">Treatments</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Get Help Section */}
                    <div className={styles.footerCol}>
                        <h4>Info</h4>
                        <ul>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/bookings">Bookings</Link></li>
                        </ul>
                    </div>

                    {/* Online Shop Section */}
                    <div className={styles.footerCol}>
                        <h4>Wellness</h4>
                        <ul>
                            <li><Link to="/recipes">Recipes</Link></li>
                            <li><Link to="/exercises">Exercises</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
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
