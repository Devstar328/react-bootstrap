import React from 'react'
import Slider from "react-slick";

import styles from './Heroes.module.scss';
import { getImg } from '../../../utils/Helper';

const heroes = [
    {
        img: "hero/caro_hero1.png",
        badge: "hero/badge.png",
        title: 'CaseyUltra',
        nick: 'Orcs',
        description: 'The equipment in the game is divided into: weapons, helmets, clothes, trouser guards, shoes, rings and necklaces. Each piece of equipment is a unique NFT with different qu alities and attributes. make you stronger!',
        ATK: 90,
        DEF: 30,
        AGI: 60,
        INT: 70
    },
    {
        img: "hero/caro_hero2.png",
        badge: "hero/badge.png",
        title: 'CaseyUltra1',
        nick: 'Orcs1',
        description: 'The equipment in the game is divided into: weapons, helmets, clothes, trouser guards, shoes, rings and necklaces. Each piece of equipment is a unique NFT with different qu alities and attributes. make you stronger!',
        ATK: 50,
        DEF: 80,
        AGI: 30,
        INT: 60
    },
    {
        img: "hero/caro_hero3.png",
        badge: "hero/badge.png",
        title: 'CaseyUltra2',
        nick: 'Orcs2',
        description: 'The equipment in the game is divided into: weapons, helmets, clothes, trouser guards, shoes, rings and necklaces. Each piece of equipment is a unique NFT with different qu alities and attributes. make you stronger!',
        ATK: 20,
        DEF: 80,
        AGI: 40,
        INT: 60
    }
]

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src={getImg('hero/right.png')} alt='next' className={className} style={{ ...style, display: "block", width: '53px', height: '88px', right: -70 }} onClick={onClick} />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src={getImg('hero/left.png')} alt='prev' className={className} style={{ ...style, display: "block", width: '53px', height: '88px', left: -70 }} onClick={onClick} />
    );
}

const settings = {
    dots: false,
    infinite: true,
    // fade: true,
    slidesToShow: 1,
    speed: 2000,
    autoplaySpeed: 5000,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const Heroes = () => {
    return (
        <div>
            <div className={styles.div_top} >
                <img src={getImg('border2.png')} className='border' style={{ marginTop: -20 }} alt="img" />
                <div className={styles.heros} >
                    <img src={getImg('hero/hero1.png')} alt="hero" />
                    <img src={getImg('hero/hero2.png')} alt="hero" />
                    <img src={getImg('hero/hero3.png')} alt="hero" />
                    <img src={getImg('hero/hero4.png')} alt="hero" />
                    <img src={getImg('hero/hero5.png')} alt="hero" />
                    <img src={getImg('hero/hero6.png')} alt="hero" />
                </div>
            </div>
            <div className={styles.div_bottom}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        HEROES
                    </div>
                    <div className={styles.carousel}>
                        <Slider {...settings} >
                            {heroes.map((hero, index) => (
                                <div className={styles.slider} key={index}>
                                    <div className={styles.info}>
                                        <div className={styles.header}>
                                            <img src={getImg(hero.badge)} alt="badge" />
                                            <div>
                                                <div className={styles.name}>{hero.title}</div>
                                                <div className={styles.nick}>{hero.nick}</div>
                                            </div>
                                        </div>
                                        <div className={styles.info_box}>
                                            <div className={styles.description}>
                                                {hero.description}
                                            </div>
                                            <div className={styles.status}>
                                                <div className={styles.row}>
                                                    <div>ATK : </div>
                                                    <div className={styles.progress} style={{ background: `linear-gradient(90deg, #ddd 0 ${hero.ATK}%, #dddddd66 ${hero.ATK}% 100%)` }}></div>
                                                </div>
                                                <div className={styles.row}>
                                                    <div>DEF : </div>
                                                    <div className={styles.progress} style={{ background: `linear-gradient(90deg, #ddd 0% ${hero.DEF}%, #dddddd66 ${hero.DEF}% 100%)` }}></div>
                                                </div>
                                                <div className={styles.row}>
                                                    <div>AGI : </div>
                                                    <div className={styles.progress} style={{ background: `linear-gradient(90deg, #ddd 0 ${hero.AGI}%, #dddddd66 ${hero.AGI}% 100%)` }}></div>
                                                </div>
                                                <div className={styles.row}>
                                                    <div>INT : </div>
                                                    <div className={styles.progress} style={{ background: `linear-gradient(90deg, #ddd 0 ${hero.INT}%, #dddddd66 ${hero.INT}% 100%)` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={getImg(hero.img)} alt='img' />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <img src={getImg('border4.png')} className='border' alt="img" />
            </div>
        </div>
    )
}

export default Heroes;