import React from 'react'
import styles from './Navbar.module.scss';
import logoImg from '../../assets/logo1.png';
import iconWallet from '../../assets/walletIcon.png';

export const Navbar = () => {
    return (
        <div className={styles.div}>
            <div className={styles.header}>
                <img src={logoImg} style={{ width: '290px', height: '55px' }} alt="logo" />
                <div className={styles.menu}>
                    <div>LITEPAPER</div>
                    <div>TEAM</div>
                    <div>ABOUT</div>
                    <div className={styles.btn}>
                        <img src={iconWallet} style={{ width: '40px', height: '42px', }} alt="img" />
                        Connect Wallet
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
