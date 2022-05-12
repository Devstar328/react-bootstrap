import React from 'react'
import styles from './Partners.module.scss';
import btnImg from '../../assets/partners/partner_btn1.png';
import imgBorder from '../../assets/border2.png';

export const Partners = () => {
    return (
        <div className={styles.body}>
            {/* <img src={imgBorder} alt='border' /> */}
            <div className='container_custom'>
                <p className={styles.title}>BACKERS AND PARTNERS</p>
                <div className={styles.content}>
                    <button><img src={btnImg} style={{ width: '100%' }} /></button>
                    <button><img src={btnImg} style={{ width: '100%' }} /></button>
                    <button><img src={btnImg} style={{ width: '100%' }} /></button>
                    <button><img src={btnImg} style={{ width: '100%' }} /></button>
                </div>
                <div className={styles.content} style={{ marginTop: '10px', }}>
                    <button><img src={btnImg} style={{ width: '100%' }} /></button>
                    <button><img src={btnImg} style={{ width: '100%' }} /></button>
                    <button><img src={btnImg} style={{ width: '100%' }} /></button>
                    <button><img src={btnImg} style={{ width: '100%' }} /></button>
                </div>
            </div>
        </div>
    )
}

export default Partners;