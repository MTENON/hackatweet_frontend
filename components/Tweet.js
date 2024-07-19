import styles from '../styles/Tweet.module.css'
import Image from 'next/Image'

//Import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'

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
                <p>{props.firstname} <span className={styles.username}>@{props.username}</span> - {props.date}</p>
            </div>
            <p>{props.content}</p>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faHeart} />
                <p>Like count</p>
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
        </div>
    )
}

export default Tweet