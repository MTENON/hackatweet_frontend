import styles from '../styles/Hashtag.module.css'

function Hashtag(props) {

    return (
        <div className={styles.hashtagcontainer}>
            <p className={styles.hashtag}>{props.hashtag}</p>
            <p className={styles.tweets}>{props.tweets} Caws</p>
        </div>
    )
}

export default Hashtag;