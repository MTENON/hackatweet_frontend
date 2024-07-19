import styles from "../styles/Home.module.css";
import Image from "next/Image";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Button, Modal } from "antd";
import { login } from '../reducers/user'

function Home() {
  const [signup, setSignup] = useState(false);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [firstname, setFirstname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {

    setConfirmLoading(true);

    const res = await fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname: firstname, username: username, password: password }),
    })
    const userData = await res.json()

    if (userData.result) {

      dispatch(login({ firstname: firstname, username: username, token: userData.token }));

      window.location.href = '/cawser'
    }

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setFirstname('');
      setUsername('');
      setPassword('');
    }, 2000);

    setSignup(false)
  };

  const handleOkSignin = async () => {

    setConfirmLoading(true);

    const res = await fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    })
    const userData = await res.json()

    if (userData.result) {

      dispatch(login({ username: username, token: userData.token }));

      window.location.href = '/cawser'

    } else {
      window.alert('WRONG PASSWORD')
    }

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setSignup(false)
      setFirstname('');
      setUsername('');
      setPassword('');
    }, 2000);


  };

  const handleCancel = () => {
    setSignup(false)
    setOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftimage}></div>

        <div className={styles.main}>
          <div className={styles.logo}>
            <Image
              src={"/whiteraven.png"}
              height={40}
              width={40}
              alt="user raven logo"
            />
          </div>

          <h1 className={styles.title}>See what's happening</h1>
          <h3 className={styles.title3}>Join hackatweet today.</h3>

          <button
            type="primary"
            className={styles.signup}
            onClick={() => showModal()}
          >
            Sign up
          </button>

          <h4 className={styles.title4}>Already have an acount? </h4>
          <button
            type="primary"
            className={styles.signin}
            onClick={() => { setSignup(true), showModal() }}
          >
            Sign in
          </button>

          <Modal
            title="Basic Modal"
            open={open}
            onOk={!signup ? handleOk : handleOkSignin}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <div className={styles.inputModal}>
              {!signup &&
                <>
                  <p className={styles.inputtext}>Firstname</p>
                  <input onChange={(e) => setFirstname(e.target.value)} className={styles.tailleinput} type="text" id="firstname" value={firstname} />
                </>
              }
              <p className={styles.inputtext}>Username</p>
              <input onChange={(e) => setUsername(e.target.value)} className={styles.tailleinput} type="text" id="Username" value={username} />
              <p className={styles.inputtext}>Password</p>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className={styles.tailleinput} id="Password" value={password} />
            </div>
          </Modal>

        </div>
      </div>
    </>
  );
}

export default Home;
