'use client'

import React from 'react';
import styles from '../(home)/styles.module.scss';
import Aside from '../(home)/Aside';
import Main from './Main';
import Header from '../(home)/Header';
import { MenuBarProps } from '../(home)/page';

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
        <Main />
      </section>
    </div>
  );
}
