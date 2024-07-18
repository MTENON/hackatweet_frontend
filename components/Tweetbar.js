import styles from '../styles/Tweetbar.module.css'

//Import etat
import { useState } from 'react';

//redux
import { useSelector } from 'react-redux';

const link = 'http://localhost:3000'

function Tweetbar() {


    const [newTweet, setNewTweet] = useState('')
    const pattern = /\B(\#[a-zA-Z]+\b)(?!;)/gm

    function handleCawButton() {
        //Récupère tous les hashtags
        const hashtags = newTweet.match(pattern)

        fetch(`${link}/tweets/newTweet`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: newTweet,
                token: useSelector((state) => state.user.token),
                hashtags: hashtags
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })

        setNewTweet('')
    }

    return (
        <div className={styles.tweetbar}>
            <h2 className={styles.tweetbarTitle}>HOME</h2>
            <div className={styles.searchContainer}>
                <input className={styles.tweetbarInput} placeholder={`What's up?`} onChange={(e) => newTweet.length < 280 ? setNewTweet(e.target.value) : {}} value={newTweet}></input>
                <div className={styles.lengthAndCaw}>
                    <p className={styles.text}>{newTweet.length}/280</p>
                    <button className={styles.cawButton} onClick={() => handleCawButton()}>CAW</button>
                </div>
            </div>
        </div >
    )
}

export default Tweetbar;