import React from 'react';
import styles from './About.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const About = (props) => {
  return (
    <div>
    <Header />
    <section className={styles.About}>
      <h1>About Component</h1>
    </section>
    <Footer />
    </div>
  );
}

export default About;
