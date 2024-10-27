import styles from './FAQ.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import React, { useState } from 'react';

const FAQ = () => {
  const [expandedFAQs, setExpandedFAQs] = useState([false, false, false, false, false]);

  const toggleFAQ = (index) => {
    setExpandedFAQs(prevState =>
      prevState.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  const faqData = [
    { question: "What is reflexology?", answer: "Reflexology is a therapeutic practice that involves applying pressure to specific points on the feet, hands, or ears to promote relaxation and healing." },
    { question: "How does reflexology work?", answer: "Reflexology works by stimulating the nervous system, improving circulation, and enhancing the body's natural ability to heal itself through targeted pressure." },
    { question: "What are the benefits of reflexology?", answer: "Benefits include reduced stress, improved sleep, enhanced circulation, relief from pain and tension, and overall wellness." },
    { question: "Is reflexology safe for everyone?", answer: "Reflexology is generally safe for most people. However, it is advisable to consult your healthcare provider if you have specific health concerns or conditions." },
    { question: "How long does a reflexology session last?", answer: "Typically, a reflexology session lasts between 30 to 60 minutes, depending on the treatment plan." }
  ];

  return (
    <div>
      <Header/>
      <section className={styles.container}>
        <h1 className={styles.heading}>Frequently Asked Questions</h1>
        <div className={styles.faqsContainer}>
          {faqData.map((faq, index) => (
            <div
              className={`${styles.faq} ${expandedFAQs[index] ? styles.active : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className={styles.faqTitle}>{faq.question}</h3>
              <p className={styles.faqText}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default FAQ;
