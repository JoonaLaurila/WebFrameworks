import React from 'react'
import styles from './MainNews.module.css';


export default function MainNews() {
    return (
        <div className ={styles.backGroundcolor}>
         <div className={styles.container}>
            <span className={styles.header}>  Koronavirus </span>
                <img src= "covid.png"/>
            
            <div className={styles.header}> 
                 <span className ={styles.header2}> Päivittyvä seuranta</span>
            
            |STM:Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan

            </div>
         </div>
        </div>        
    )
}
