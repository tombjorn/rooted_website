import React from 'react';
import styles from './Treatments.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Enquire from '../Enquire/Enquire';

const Treatments = () => {
  return (
    <div className={styles.Treatments}>
      <Header />
      <section className={styles.TreatmentsContainer}>        
        <div className={styles.Row}>
          <div className={styles.TreatmentGrid}>
            <div className={styles.TreatmentHeader}>
              <h5 className={styles.ColumnHeader}><strong>Available Treatments</strong></h5>
              <p>Full Session</p>
              <p>Taster Session</p>
            </div>
            <div className={styles.TreatmentDetail}>
              <h5 className={styles.ColumnHeader}><strong>Duration</strong></h5>
              <p>60 min</p>
              <p>30 min</p>
            </div>
            <div className={styles.TreatmentDetail}>
              <h5 className={styles.ColumnHeader}><strong>Price</strong></h5>
              <p>£30</p>
              <p>£15</p>
            </div>
          </div>
          <p>Each treatment includes a short body scan or meditation, a foot cleanse, and a personalized reflexology session.</p>
          <button className={styles.EnquireButton} onClick={() => <Enquire />}>Enquire Now</button>
        </div>

        <div className={styles.Row}>
          <h3>Important Information</h3>
          <p><strong>Contraindications:</strong> Please note certain conditions may require extra care. Feel free to reach out for more information.</p>
          <p><strong>Cancellation Policy:</strong> We kindly request 48 hours' notice for any appointment changes or cancellations.</p>
        </div>

        <div className={styles.Row}>
          <h3>Health Advisory</h3>
          <p>If experiencing cold or flu-like symptoms, please reschedule your treatment. Reflexology activates the body’s detox processes, which may be too intense during illness. After recovery, reflexology can assist in restoring balance and well-being.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Treatments;
