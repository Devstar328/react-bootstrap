import React from 'react'
import styles from './Intro.module.scss';
import imgMark from '../../assets/mark.png';
import Icons from '../../components/Icons';

export default function Intro() {
    return (
        <>
            <div className={styles.intro}>
                <img src={imgMark} alt='mark' className={styles.mark} />
                <p><button className={styles.btn_nft}>NFT Sale Coming Soon</button></p>
                <div className={styles.icons}>
                    <Icons />
                </div>
                {/* <img src={bg1} alt="Forest" width="600" height="400" /> */}
            </div>
        </>

    )
}
