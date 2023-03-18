'use client'

import React from 'react';
import Header from '../home/Header';
import styles from '../home/styles.module.scss';
import Aside from '../home/Aside';
import { MenuBarProps } from '../home/page';
import Main from './Main';

const MenuBar: MenuBarProps = {
  value: 'closed' || 'open',
};

export default function Discovery() {
  const [menuBar, setMenuBar] = React.useState(MenuBar);


  return (
    <div className={styles.bodyContainer}>
      <Aside menuBar={menuBar} setMenuBar={setMenuBar}/>
      <section>
        <Header style={undefined} />
        <Main menuBar={menuBar} />
      </section>
    </div>
  );
}
