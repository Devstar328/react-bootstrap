import React from 'react'
import Desc_item from '../../components/desctiption/Desc_item';
import styles from './Description.module.scss';
import img1 from '../../assets/item1.png';

export default function Description() {
    //let desc = "There are countless dungeons waiting for you to challenge. Go with your friends, explore randomly generated terrains, trigger unique plots, defeat fierce bosses, and find NFT treasures that have been lost for many years"
    let title = "Exploring"
    let desc1 = "The equipment in the game is divided into: weapons, helmets, clothes, trousers, hand guards, shoes, rings and necklaces. Each piece of equipment is a unique NFT with different qualities and attributes. Collect the most suitable equipment to make you stronger!"
    let desc2 = "There are countless dungeons waiting for you to challenge.Go with your friends to explore the randomly generated terrain, trigger a unique plot, defeat the ferocious boss and find the lost NFT treasure for many years"
    let desc3 = "You can compete one-on-one with other players in the ladder competition, or form a unique team with your friends to challenge other teams.At the end of each season, players who climb the ladder will receive rich rewards, including the absolutely rare NFT"
    let desc4 = "There are abundant wild resources in the game, such as rare minerals and precious herbs.Find these scattered materials and collect them.These resources can be sold to other players or made into specific items.Good luck."
    let desc5 = "As a demon hunter, your basic manufacturing ability can make you stay longer in this dangerous world.The medicinal materials are processed into medicine, and the ores are processed into weapons and ornaments. These NFT products can be sold to other players or used by themselves."
    let desc6 = "Laria is a vast and charming continent. There are all kinds of strange things here. New things happen all the time. Here you can meet new partners and go to unknown and mysterious areas together."
    return (
        <div className={styles.body} >
            <div className={styles.content}>
                <Desc_item image={img1} title={title} desc={desc1} />
                <Desc_item image={img1} title={title} desc={desc2} />
                <Desc_item image={img1} title={title} desc={desc3} />
            </div>
            <div className={styles.content}>
                <Desc_item image={img1} title={title} desc={desc4} />
                <Desc_item image={img1} title={title} desc={desc5} />
                <Desc_item image={img1} title={title} desc={desc6} />
            </div>
        </div>
    )
}
