import React from 'react';
import styles from './FAQ.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function FAQ() {
  return (
    <div>
    <Header/>
      <section className={styles.FAQ}>
        <h1>FAQ Component</h1>
      </section>
    <Footer />
    </div>
  );
}

export default FAQ;
