import styles from '../styles/Tweetbar.module.css'

//Import etat
import { useState } from 'react';

function Tweetbar() {

    const [newTweet, setNewTweet] = useState('')

    return (
        <div className={styles.tweetbar}>
            <h2 className={styles.tweetbarTitle}>HOME</h2>
            <div className={styles.searchContainer}>
                <input className={styles.tweetbarInput} placeholder={`What's up?`} onChange={(e) => newTweet.length < 280 ? setNewTweet(e.target.value) : {}}></input>
                <div className={styles.lengthAndCaw}>
                    <p className={styles.text}>{newTweet.length}/280</p>
                    <button className={styles.cawButton}>CAW</button>
                </div>
            </div>
        </div>
    )
}

export default Tweetbar;