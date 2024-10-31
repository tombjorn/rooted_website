import React from 'react';
import styles from './Enquire.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Enquire = (props) => {
  return (
    <div className={styles.Enquire}>
      <Header />
      <section className={styles.contactContainer}> 
        <div className={styles.contactContent}>
          <h1 className={styles.mainHeading}>Enquire for an Appointment</h1>
          <h5 className={styles.description}>
            Please fill out the form below to book an appointment, and we will get back to you as soon as possible.
          </h5>
          <p className={styles.timeLength}>Each session is a personalized, 60-minute treatment designed to support your unique healing journey.</p>
          
          <form className={styles.contactForm}>
            <h2 className={styles.heading}>Contact Form</h2>
            
            <div className={styles.formRow}>
              <div className={styles.leftColumn}>
                <div className={styles.inputBox}>
                  <label className={styles.label}>First Name</label>
                  <input type="text" className={styles.field} placeholder="Enter your first name" required />
                </div>
                
                <div className={styles.inputBox}>
                  <label className={styles.label}>Last Name</label>
                  <input type="text" className={styles.field} placeholder="Enter your last name" required />
                </div>
                
                <div className={styles.inputBox}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" className={styles.field} placeholder="Enter your email" required />
                </div>
                
                <div className={styles.inputBox}>
                  <label className={styles.label}>Phone Number</label>
                  <input type="phone" className={styles.field} placeholder="Enter your phone number" required />
                </div>
              </div>
              
              <div className={styles.rightColumn}>
                <div className={styles.inputBox}>
                  <label className={styles.label}>Message</label>
                  <textarea type="text" className={`${styles.field} ${styles.message}`} placeholder="Please tell us your symptoms and a little about yourself..." required></textarea>
                </div>
              </div>
            </div>
            
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Enquire;
