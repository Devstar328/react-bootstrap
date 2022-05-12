import { React, Component } from 'react'
import styles from './Media.module.scss';
import { Carousel } from '3d-react-carousal';
import image from '../../assets/background_intro.jpg';
import Slider from './Slider';


export default function Media() {
    // let slides = [
    //     <img  src={image} alt="1" />,
    //     <img  src={image} alt="2" />  ,
    //     <img  src={image} alt="3" />  ,]
    return (
        <div className={styles.body}>
            {/* <Carousel slides={slides} autoplay={true} interval={1000}/> */}
            <Slider />
        </div>
    )
}


