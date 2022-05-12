import React from 'react'
import styles from './About.module.scss';
import img_left from '../../assets/about_left.png';
import img_right from '../../assets/about_right.png';
import imgBorder from '../../assets/border1.png';

export default function About() {
    return (
        <div className={styles.about}>
            <img src={imgBorder} alt={'border'} className={styles.border} />
            <div className="container_custom">
                <div className={styles.content}>
                    <div className={styles.item}>
                        <img src={img_left} width={'100%'} alt='left' />
                    </div>
                    <div className={styles.item} style={{ width: '50%' }} >
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
                    <div className={styles.item}>
                        <img src={img_right} width={'100%'} alt='right' />
                    </div>
                </div>
            </div>
        </div>
    )
}
