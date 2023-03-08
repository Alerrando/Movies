import { MenuBarProps } from '@/app/page';
import { FilmSlate, X } from 'phosphor-react';
import * as React from 'react';
import styles from './style.module.scss';

type AsideProps = {
  menuBar: MenuBarProps;
  setMenuBar: (menuBar: MenuBarProps) => void;
};

export default function Aside(props: AsideProps) {
  const { menuBar, setMenuBar } = props;

  return (
    <aside className={`${styles[`${menuBar.value}`]} ${styles.aside}`}>
      <div className={styles['aside-container']}>
        <header className={styles.header}>
          <div className={styles['header-title']}>
            <FilmSlate
              className={styles.icon}
              onClick={() => handleMenuBar()}
            />
            <span translate="no">Movies</span>
          </div>

          <X
            className={`${styles.closed} ${styles.icon}`}
            onClick={() => handleMenuBar()}
          />
        </header>
      </div>
    </aside>
  );

  function handleMenuBar() {
    if (window.innerWidth < 764) {
      menuBar.value == 'open'
        ? setMenuBar({ value: 'closed' })
        : setMenuBar({ value: 'open' });
    }
  }
}
