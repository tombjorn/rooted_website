import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Hero from './Hero/Hero';
import styles from './MainPage.module.css';
import ImageTextCard from "../ImageTextCard/ImageTextCard";
import ThreeColumnTextCard from "../ThreeColCard/ThreeColCard";
// import BurgerButton from '../BurgerButton/BurgerButton'; // Import the BurgerButton component

function MainPage(){
    return (
        <div className={styles.MainPage}>
            <Header/>
            <Hero />
            <ImageTextCard 
                title="Reconnect with Nature" 
                content="Discover the benefits of reflexology for your mind and body." 
                image="hero-placeholder.jpg"
                flip={true} 
                background={true}
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
                title="Reconnect with Nature" 
                content="Discover the benefits of reflexology for your mind and body." 
                image="hero-placeholder.jpg"
                flip={false} 
                background={true}
            />
            <Footer />
        </div>
    )
};
export default MainPage