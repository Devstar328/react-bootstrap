import React from 'react'
import img1 from '../../assets/item1.png';
import styles from './Desc_item.module.scss';

export const Desc_item = (props) => {
    return (
        <div className='container_custom'>
            <img src={img1} width={150} alt='Description items' />
            <p className={styles.title}>Exploring</p>
            <p className={styles.desc}>{props.desc}</p>
        </div>
    )
}

export default Desc_item;