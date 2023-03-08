import { MenuBarProps } from '@/app/page';
import { Compass, FilmSlate, Heart, House, UsersThree, X } from 'phosphor-react';
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

        <section className={styles['aside-menu']}>
          <div className={styles["aside-menu-container"]}>
            <h2 translate='no'>Menu</h2>

            <ul className={styles.ul}>
              <div className={styles['menu-dashboard']}>
                <House size={22} />
                <li>Home</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <Compass size={22} />
                <li>Discovery</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <Heart size={22} />
                <li>Favorites</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <UsersThree size={22} />
                <li>Community</li>
              </div>
            </ul>
          </div>
        </section>
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
