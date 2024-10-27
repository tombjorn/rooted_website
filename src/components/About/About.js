import React from 'react';
import styles from './About.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageTextCard from '../ImageTextCard/ImageTextCard';
import TwoColumnTextCard from '../TwoColCard/TwoColCard';
import GoogleMapEmbedCard from '../GoogleMapEmbedCard/GoogleMapEmbedCard';
const About = (props) => {
  const location = { lat: 51.854947, lng: 1.062228 }; // Example coordinates (Great Bentley, UK)

  return (
    <div>
    <Header />
    <section className={styles.About}>
    <div></div>
    <ImageTextCard 
        title="Meet Georgina" 
        content="Led by our experienced practitioner, Georgina, Rooted specializes in foot reflexology—a holistic treatment method that harnesses the body's natural healing abilities. With several years of experience in the field, Georgina takes pride in her ability to connect with clients, understanding their unique needs and crafting personalized treatment plans that cater to their individual health journeys." 
        image="card-placeholder.jpg"
        flip={true} 
        background={false}
    />
    <TwoColumnTextCard 
        title1="Our Philosophy"
        col1="We embrace a philosophy rooted in zen, nature, and wellness. Our calming atmosphere is designed to create a peaceful retreat where you can unwind and recharge. We believe that true healing occurs when the mind and body are in harmony, and our reflexology sessions are a step towards achieving that balance."
        title2="Benefits of Reflexology"
        col2="Reflexology is not just a treatment; it’s a pathway to wellness. Our sessions aim to promote relaxation, reduce stress, and stimulate the body’s natural healing processes. Whether you're seeking relief from pain, anxiety, or simply want to indulge in a moment of tranquility, Rooted is here to support you on your journey to better health."
        background={true}/>
    <GoogleMapEmbedCard 
      title="Visit Us"
      content="We are located in Great Bentley. Come and see us!"
      location={location}
      zoom={15} // You can adjust the zoom level
      background={true}
    />
    </section>
    <Footer />
    </div>
  );
}

export default About;
