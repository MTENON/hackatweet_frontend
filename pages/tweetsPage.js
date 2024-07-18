import styles from '../styles/TweetsPage.module.css'
import UserSidebar from "../components/userSidebar";
import Tweetbar from '../components/Tweetbar';
import Tweet from '../components/Tweet';

import { useState, useEffect } from 'react';

const link = 'http://localhost:3000'

function tweetsPage() {

    const [tweetsData, setTweetsData] = useState([])

    useEffect(() => {
        fetch(`${link}/tweets`)
            .then(response => response.json())
            .then(data => {
                setTweetsData(data);
            })
    }, [])

    console.log('tweetsData: ', tweetsData)

    const tweets = tweetsData.map((data, i) => {
        return <Tweet key={i} {...data} />;
    });

    return (
        <div className={styles.main}>
            <div className={styles.sidebarleft}>
                <UserSidebar />
            </div>
            <div className={styles.center}>
                <Tweetbar />
                {tweets}
            </div>
            <div className={styles.sidebarright}></div>
        </div >
    );
}

export default tweetsPage;