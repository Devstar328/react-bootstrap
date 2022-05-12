import React from 'react'

import styles from './Header.module.scss';
import { getImg } from '../../../utils/Helper'

const Header = () => {
    return (
        <div className={styles.div}>
            <div className={styles.header}>
                <img src={getImg('icon/logo.png')} alt="logo" />
                <div className={styles.menu}>
                    <div>ABOUT</div>
                    <div className={styles.divider}></div>
                    <div>TEAM</div>
                    <div className={styles.divider}></div>
                    <div>LITEPAPER</div>
                    <div className={styles.divider}></div>
                    <div className={styles.btn}>
                        <img src={getImg('icon/wallet.png')} alt="img" />
                        Connect Wallet
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;