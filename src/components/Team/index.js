import React from 'react'
import styles from './Team.module.scss';

export const Member = (props) => {
    return (
        <div>
            <img src={props.image} width={150} />
            <p className={ styles.team }>Core Team</p>
            <p className={ styles.name }> {props.name} </p>
            <p className={ styles.job }>{ props.job }</p>
        </div>
    )
}

export default Member;
