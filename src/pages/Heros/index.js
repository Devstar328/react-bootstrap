import { React, Component } from 'react'
import styles from './Heros.module.scss';
import img from '../../assets/heros/hero1.png';
import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/background_intro.jpg'
import imgMark from '../../assets/mark.png';
import imgBorder from '../../assets/border2.png';

import Slider from "react-slick";
import imgPrev from '../../assets/slider/arrow_left.png';
import imgNext from '../../assets/slider/arrow_right.png';
import exam from '../../assets/exam.jpg';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        // <div
        //     className={className}
        //     style={{ ...style, display: "block", color: 'red', }}
        //     onClick={onClick}
        // />

        <img src={imgNext} alt='next' className={className} style={{ ...style, display: "block", width: '53px', height: '88px' }} onClick={onClick} />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        // <div
        //     className={className}
        //     style={{ ...style, display: "block", background: "green" }}
        //     onClick={onClick}
        // >
        //     prev
        // </div>
        <img src={imgPrev} alt='prev' className={className} style={{ ...style, display: "block", width: '53px', height: '88px' }} onClick={onClick} />
    );
}

export class CustomArrows extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            // fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div>
                <Slider {...settings} >
                    <div>
                        <img src={exam} alt='exam' className={styles.slider} />
                    </div>
                    <div>
                        <img src={exam} alt='exam' className={styles.slider} />
                    </div>
                    <div>
                        <img src={exam} alt='exam' className={styles.slider} />
                    </div>
                    <div>
                        <img src={exam} alt='exam' className={styles.slider} />
                    </div>
                </Slider>
            </div>
        );
    }
}

export const Heros = () => {
    let width = 800
    let height = 400
    return (
        <div>
            <div className={styles.body1} >

                {/* <img src={imgMark} /> */}
                {/* <div className={styles.heros} >
                    <img src={img} alt="hero" />
                    <img src={img} alt="hero" />
                    <img src={img} alt="hero" />
                    <img src={img} alt="hero" />
                    <img src={img} alt="hero" />
                    <img src={img} alt="hero" />
                </div> */}
            </div>
            <div className={styles.body2} style={{ paddingTop: '400px' }}>
                <div className={styles.carousel}>
                    <CustomArrows />
                </div>

            </div>

        </div>
    )
}

export default Heros;