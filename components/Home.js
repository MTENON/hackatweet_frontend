import styles from "../styles/Home.module.css";
import Image from "next/Image";
import React, { useState } from "react";
import { Button, Modal } from "antd";

function Home() {
  const [signup, setSignup] = useState(false);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [firstname, setFirstname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')





  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname: firstname, username: username, password: password }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setFirstname('');
          setUsername('');
          setPassword('');
        }
      });

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
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

          <Modal
            title="Basic Modal"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <div className={styles.inputModal}>
              <input onChange={(e) => setFirstname(e.target.value)} className={styles.tailleinput} type="text" id="firstname" />
              <input onChange={(e) => setUsername(e.target.value)} className={styles.tailleinput} type="text" id="Username" />
              <input onChange={(e) => setPassword(e.target.value)} className={styles.tailleinput} type="text" id="Password" />
            </div>
          </Modal>

          <h4 className={styles.title4}>Already have an acount? </h4>
          <button className={styles.signin}>Sign in </button>
        </div>
      </div>
    </>
  );
}

export default Home;
