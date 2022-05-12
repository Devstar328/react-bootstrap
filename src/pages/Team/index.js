import React from 'react'
import styles from './Team.module.scss';
import Member from '../../components/Team';
import img from '../../assets/team/member1.png'
import imgBorder from '../../assets/border2.png';
export const Team = () => {
    let name = 'CEO / Founder'
    let team = 'CORE TEAM'
    let job = 'he equipment in the game is into: weapons, helmets, shoes, rings and necklaces.'
    return (
        <div className={styles.body}>
            {/* <img src={imgBorder} alt='border' /> */}
            <p className={styles.title}>CORE TEAM</p>
            <div className={styles.content}>
                <Member image={img} name={name} team={team} job={job} />
                <Member image={img} name={name} team={team} job={job} />
                <Member image={img} name={name} team={team} job={job} />
                <Member image={img} name={name} team={team} job={job} />
            </div>
            <div className={styles.content}>
                <Member image={img} name={name} team={team} job={job} />
                <Member image={img} name={name} team={team} job={job} />
                <Member image={img} name={name} team={team} job={job} />
                <Member image={img} name={name} team={team} job={job} />
            </div>
        </div>
    )
}

export default Team;