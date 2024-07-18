import styles from '../styles/Tweet.module.css'
import Image from 'next/Image'

function Tweet(props) {

    return (
        <div className={styles.tweet}>
            <div className={styles.user}>
                <div className={styles.userravenlogo}>
                    <Image
                        src='/userraven.png'
                        alt='user raven logo'
                        width={40}
                        height={40}
                    />
                </div>
                <p>{props.firstname} <span className={styles.username}>@{props.username}</span> - timershit</p>
            </div>
            <p>{props.content}</p>
        </div>
    )
}

export default Tweet