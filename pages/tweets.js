import styles from '../styles/TweetsPage.module.css'
import UserSidebar from "../components/userSidebar";
import Tweetbar from '../components/Tweetbar';

function tweetsPage() {



    return (
        <div className={styles.main}>
            <div className={styles.sidebarleft}>
                <UserSidebar />
            </div>
            <div className={styles.center}>
                <Tweetbar />
            </div>
            <div className={styles.sidebarright}></div>
        </div>
    );
}

export default tweetsPage;