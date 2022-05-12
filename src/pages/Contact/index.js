import React from 'react'
import styles from './Contact.module.scss';
import Join from '../../components/Contact';

export const Contact = () => {
    return (
        <div className={styles.body}>
            <p className={styles.p1}>Join the Chumbi Community</p>
            <Join />
        </div>
    )
}

export default Contact;