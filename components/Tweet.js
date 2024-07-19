import styles from '../styles/Tweet.module.css'
import Image from 'next/Image'

//Import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from 'react'

function Tweet(props) {

    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {



    }, [])

    function handleHeartClick() {
        console.log('Heart click')
    }

    function handleTrashClick() {
        console.log('Trash click')
    }

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
            <p className={styles.content}>{props.content}</p>
            <div className={styles.iconscontainer}>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} onClick={() => handleHeartClick()} beat />
                <p>{props.likes}</p>
                <FontAwesomeIcon icon={faTrashCan} className={styles.icon} onClick={() => handleTrashClick()} />
            </div>
        </div>
    )
}

export default Tweet