import React from 'react'
import styles from './MostRead.module.css';

export default function MostRead(props) {
    return (
    
    <div className={styles.backGroundcolor}>
        <div className ={styles.container}>

            <span className={styles.number}>{props.nro} </span>
             <span className={styles.topic}>{props.topic} </span> {props.body}
            
              
            </div>
        </div>
    )
}
