import styles from '../styles/TweetsPage.module.css'
import UserSidebar from "../components/userSidebar";
import Tweetbar from '../components/Tweetbar';
import Tweet from '../components/Tweet';
import Hashtag from '../components/Hashtag';

import { useState, useEffect } from 'react';

const link = 'http://localhost:3000'

function tweetsPage() {

    const [tweetsData, setTweetsData] = useState([])
    const [hashtagsData, setHashtagsData] = useState([])
    const [trigger, setTrigger] = useState(false) //ce trigger à pour vocation de mettre à jour la page à chaque ajout de tweet

    useEffect(() => {
        fetch(`${link}/tweets`)
            .then(response => response.json())
            .then(data => {
                setTweetsData(data);
            })

        fetch(`${link}/tweets/hashtags`)
            .then(response => response.json())
            .then(data => {
                setHashtagsData(data)
            })

    }, [trigger])

    function changeTrigger() {
        setTrigger(!trigger);
    };

    const tweets = tweetsData.map((data, i) => {
        return <Tweet key={i} {...data} />;
    });

    const hashtags = hashtagsData.map((data, i) => {
        return <Hashtag key={i} {...data} />;
    });



    return (
        <div className={styles.main}>
            <div className={styles.sidebarleft}>
                <UserSidebar />
            </div>
            <div className={styles.center}>
                <Tweetbar changeTrigger={changeTrigger} />
                <div className={styles.tweets}>
                    {tweets}
                </div>
            </div>
            <div className={styles.sidebarright}>
                <h2 className={styles.sidebarrightTitle}>Trends</h2>
                <div className={styles.hashtags}>
                    {hashtags}
                </div>
            </div>
        </div >
    );
}

export default tweetsPage;