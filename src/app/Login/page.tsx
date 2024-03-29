'use client'

import Image from 'next/image';
import React, { useState, CSSProperties } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import styles from './styles.module.scss';
import Header from '../../components/Header'
import FormLogin from './FormLogin';
import FormSignUp from './FormSignUp';

type LoginSignUp = {
  login: 'Login' | 'SignUp';
};

const inicialValue: LoginSignUp = {
  login: 'Login',
};

export default function LoginPage() {
  const [loginSignUp, setLoginSignUp] = useState(inicialValue);
  const properties :CSSProperties = {
    position: 'absolute'
  }

  return (
    <>
      <Header style={properties} />
      <main className={styles.main}>
        <div className={styles.mainImg}>
          <Image
            src="/background-login.jpg"
            alt="image-background-login"
            fill
            quality={100}
          />
        </div>

        <section className={styles.mainContainer}>
          <div className={styles['main-container-img']}>
            <Image
              src="/login-img.jpg"
              alt="image-background-form-login"
              fill
              className={styles['img-form-login']}
            />
          </div>

          <section className={styles.form}>
            <header className={`${styles['form-header']}`}>
              <span
                onClick={() => handleLoginSignUp()}
                className={`${
                  loginSignUp.login == 'Login' ? styles['Login'] : ''
                }`}
              >
                Login in
              </span>

              <span
                onClick={() => handleLoginSignUp()}
                className={`${
                  loginSignUp.login == 'SignUp' ? styles['SignUp'] : ''
                }`}
              >
                Sign in
              </span>
            </header>

            {loginSignUp.login == 'Login' ? <FormLogin /> : <FormSignUp />}

            <div className={styles.formContainerLoginApp}>
              <div className={styles['login-apps-text']}>
                <div className={styles['traco']}></div>
                <span>Continue With</span>
                <div className={styles['traco']}></div>
              </div>

              <div className={styles['login-apps']}>
                <div className={styles['app']}>
                  <BsFacebook size={32} className={styles['facebook']} />
                </div>

                <div className={styles['app']}>
                  <BsTwitter size={32} className={styles['twitter']} />
                </div>

                <div className={styles['app']}>
                  <FcGoogle size={32} className={styles['google']} />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );

  function handleLoginSignUp() {
    loginSignUp.login == 'Login'
      ? setLoginSignUp({ login: 'SignUp' })
      : setLoginSignUp({ login: 'Login' });
  }
}
