'use client'

import React from 'react';
import styles from '../(home)/styles.module.scss';
import Main from './Main';
import Header from '../../components/Header';

export default function Discovery() {

  return (
    <div className={styles.bodyContainer}>
      <section>
        <Header style={undefined} />
        <Main />
      </section>
    </div>
  );
}
