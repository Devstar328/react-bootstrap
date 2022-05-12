import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import styles from "./styles.module.scss";
import imgBack from '../../assets/media/back.png';

export default class Slider extends Component {
    slides = [
        {
            key: uuidv4(),
            content: (
                <img
                    src={imgBack}
                    alt="1"
                // style={{ width: '1000px' }}
                />
            )
        },
        {
            key: uuidv4(),
            content: (
                <img
                    src={imgBack}
                    alt="2"
                />
            )
        },
        {
            key: uuidv4(),
            content: (
                <img
                    src={imgBack}
                    alt="3"
                />
            )
        },

    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };

    state = {
        goToSlide: 0,
        offsetRadius: 12,
        showNavigation: true,
        config: config.gentle,
        autoplay: true,
        autoplaySpeed: 2000
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div style={{ width: "80%", height: "17rem", margin: "0 auto" }}
                className={styles.slider}
            >
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                    autoPlay
                    interval={this.state.autoplaySpeed}
                    infiniteLoop={true}
                    dynamicHeight={true}
                    ref={(slider) => (this.slider = slider)}
                    {...settings}

                ></Carousel>
            </div>
        );
    }
}
