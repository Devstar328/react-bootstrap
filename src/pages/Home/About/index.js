import React from 'react'

import styles from './About.module.scss';
import { getImg } from '../../../utils/Helper'

const About = () => {
    return (
        <div className={styles.div}>
            <img src={getImg('border1.png')} alt={'border'} className="border" />
            <div className={styles.about}>
                <div className={styles.img}>
                    <img src={getImg('about/left.png')} alt='left' />
                </div>
                <div className={styles.center} >
                    <p className={styles.title}>ABOUT</p>
                    <p className={styles.description}>
                        Koakuma is an multiplayer online ARPG game
                        with immersive combat systems and
                        mechanics within a graphics intensive metaverse.
                        All in-game items and creatures
                        are blockchain based tokens and NFTs. Koakuma’s
                        visuals and gameplay are completely
                        original and inspired by classics
                        like Gigantic, World of Warcraft and Diablo.
                    </p>
                    <button className={styles.btn}>Read Litepaper</button>
                </div>
                <div className={styles.img}>
                    <img src={getImg('about/right.png')} alt='right' />
                </div>
            </div>
        </div>
    )
}

export default About