import styles from '../styles/TweetsPage.module.css'
import UserSidebar from "../components/userSidebar";
import Tweetbar from '../components/Tweetbar';
import Tweet from '../components/Tweet';

function tweetsPage() {



    return (
        <div className={styles.main}>
            <div className={styles.sidebarleft}>
                <UserSidebar />
            </div>
            <div className={styles.center}>
                <Tweetbar />
                <Tweet />
            </div>
            <div className={styles.sidebarright}></div>
        </div >
    );
}

export default tweetsPage;