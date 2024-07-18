import styles from '../styles/UserSidebar.module.css';
import Image from 'next/Image'

//reducers actions
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../reducers/user';

function UserSidebar() {

    //initialisation du dispatch
    const dispatch = useDispatch();

    const user = {
        firstname: useSelector((state) => state.user.firstname),
        username: useSelector((state) => state.user.username)
    }

    function handleLogoutButton() {
        console.log('handleLogoutButton')
        dispatch(logoutUser());
        window.location.href = '/'
    }

    return (
        <div id='logo' className={styles.sideBarContainer}>
            <div className={styles.ravenlogo}>
                <Image
                    src='/whiteraven.png'
                    alt='raven logo'
                    width={80}
                    height={80}
                />
            </div>
            <div id='userblock' className={styles.userblock}>
                <div id='userinfo' className={styles.userinfo}>
                    <div className={styles.userravenlogo}>
                        <Image
                            src='/userraven.png'
                            alt='user raven logo'
                            width={40}
                            height={40}
                        />
                    </div>
                    <div id='usertext'>
                        <p>{user.firstname}</p>
                        <p>@{user.username}</p></div>
                </div>
                <button className={styles.logoutbutton} onClick={() => handleLogoutButton()}>Logout</button>
            </div>
        </div>
    );
}

export default UserSidebar;