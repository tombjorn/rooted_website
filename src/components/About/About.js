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
    <div className={styles.About}>
    <Header />
    <section className={styles.About}>
    <div></div>
<GoogleMapEmbedCard 
  title="Visit Us"
  content="Rooted Reflexology is a complementary therapy practice based in Great Bentley, Essex, offering foot reflexology. Come and see us!"
  location={location}
  zoom={15} // You can adjust the zoom level
  background={true}
/>
    <ImageTextCard 
        title="Rooted Reflexology" 
        content="We spend a huge percentage of our lives on our feet and yet they are probably neglected the most. We can begin to fix this and provide the body with a deep sense of relaxation through stimulation of the thousands of nerve endings in the feet. 
This is our main focus at Rooted Reflexology, to teach the body to relax and destress." 
        image="card-placeholder.jpg"
        flip={true} 
        background={false}
    />
    <ImageTextCard 
        title="Meet Georgina" 
        content="Georgina founded Rooted Reflexology after witnessing herself how reflexology taught her how to relax again. Many of us are living constantly in a state of stress and anxiety, and forget how to allow our body to let go, to be calm. Reflexology can do this. By allowing the body to breathe, to relax, healing can start to happen." 
        image="card-placeholder.jpg"
        flip={false} 
        background={false}
    />
<TwoColumnTextCard 
    title1="Promoting the Body’s Natural Healing Ability"
    col1="Reflexology is a holistic approach that works with the body’s own healing systems. By targeting specific reflex points, it helps relieve stress, improve blood flow, and reduce inflammation, enhancing both physical and mental well-being. Reflexology supports a wide range of health needs—from mental health and fertility to pain management—allowing your body to heal and thrive naturally."
    
    title2="The Rooted Reflexology Experience"
    col2="At Rooted Reflexology, each session is more than just treatment; it’s a restorative experience. Our bespoke 60-minute sessions promote deep relaxation, reduce anxiety, and revitalize energy levels. Whether you’re seeking relief from physical discomfort or looking for a quiet escape from the everyday, Rooted Reflexology offers a serene environment where you can find balance and well-being."
    
    background={true}
/>

    </section>
    <Footer />
    </div>
  );
}

export default About;
