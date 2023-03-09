'use client'

import * as React from 'react';
import Aside from './Home/Aside';
import Header from './Home/Header';
import Main from './Home/Main';

export type MenuBarProps = {
  value: string;
};

const MenuBar: MenuBarProps = {
  value: 'closed' || 'open',
};

export default function Home() {
  const [menuBar, setMenuBar] = React.useState(MenuBar);


  return (
    <div className="body-container">
      <Aside menuBar={menuBar} setMenuBar={setMenuBar} />
      <section>
        <Header currentPage={'page1'} />
        <Main menuBar={menuBar} />
      </section>
    </div>
  );
}
