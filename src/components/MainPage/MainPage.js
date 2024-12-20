import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Hero from './Hero/Hero';
import styles from './MainPage.module.css';
import ImageTextCard from "../ImageTextCard/ImageTextCard";
import ThreeColumnTextCard from "../ThreeColCard/ThreeColCard";


function MainPage(){


    return (
        <div className={styles.MainPage}>
            <Header/>
            <Hero />
            <ImageTextCard 
                title="Reconnect with Nature" 
                content="One-on-one reflexology sessions provide valuable support for anyone on a healing journey. Reflexology is beneficial for people of all ages, offering gentle yet effective care tailored to individual needs." 
                image="woman-walking.png"
                flip={true} 
                background={false}
            />
            <ThreeColumnTextCard
                title1='"I had never tried reflexology before, but Georgina made the experience truly transformative."'
                col1='Bob Ross'
                title2='"Georgina’s reflexology treatment was a game changer for my stress levels."'
                col2='John Doe'
                title3='"Not only did it relieve my chronic headaches, but it also helped me sleep better."'
                col3='Helen Mirren'
                background={false}
            />
            <ImageTextCard 
                title="Reflexology" 
                content="At Rooted Reflexology, we offer a safe, calming environment where people of all ages can feel heard, supported, and nurtured in their healing journey." 
                image="card-placeholder.jpg"
                flip={false} 
                background={false}
            />
            <Footer />
        </div>
    )
};
export default MainPage