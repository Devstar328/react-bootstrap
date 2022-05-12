import React from 'react'
import styles from './Join.module.scss'
import Icons from '../Icons';
import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
export const Join = () => {
    return (
        <div>
            <div className={styles.join}>
                <button className={styles.discard}><img src={icon1} alt={'icon'} />Join Discord</button>
                <button className={styles.telegram}><img src={icon2} alt={'icon'} />Join Telegram</button>
            </div>
            <div className={styles.post}>
                <input className={styles.email} type={'email'} placeholder='Email' />
                <button className={styles.btn}>Subscribe</button>
            </div>
            <Icons className={styles.icons} />
        </div>
    )
}

export default Join;