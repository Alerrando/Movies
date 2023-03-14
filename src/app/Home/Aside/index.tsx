import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineClose,
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineSetting,
} from 'react-icons/ai';
import { BsHouseDoor, BsDownload, BsPeople, BsAlarm } from 'react-icons/bs';
import { MdMovie, MdOutlineLogout } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';
import * as React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { MenuBarProps } from '../page';

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
            <MdMovie className={styles.icon} onClick={() => handleMenuBar()} />
            <span translate="no">Movies</span>
          </div>

          <AiOutlineClose
            className={`${styles.closed} ${styles.icon}`}
            onClick={() => handleMenuBar()}
          />
        </header>

        <section className={styles['aside-menu']}>
          <div className={styles['aside-menu-container']}>
            <h2 translate="no">Menu</h2>

            <ul className={styles.ul}>
              <div className={styles['menu-dashboard']}>
                <BsHouseDoor size={18} />
                <li>Home</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <AiOutlineCompass size={18} />
                <li>Discovery</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <BsAlarm size={18} />
                <li>Coming Soon</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <BsPeople size={18} />
                <li>Community</li>
              </div>
            </ul>
          </div>

          <div className={styles['aside-menu-container']}>
            <h2 translate="no">Library</h2>

            <ul className={styles.ul}>
              <div className={styles['menu-dashboard']}>
                <AiOutlineClockCircle size={18} />
                <li>Recents</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <AiOutlineHeart size={18} />
                <li>Favorites</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <AiOutlineStar size={18} />
                <li>Top Rated</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <BsDownload size={18} />
                <li>Downloaded</li>
              </div>
            </ul>
          </div>

          <div className={styles['aside-menu-container']}>
            <ul className={styles.ul}>
              <div className={styles['menu-dashboard']}>
                <AiOutlineSetting size={18} />
                <li>Settings</li>
              </div>
              <div className={styles['menu-dashboard']}>
                <BiHelpCircle size={18} />
                <li>Help</li>
              </div>
            </ul>
          </div>
        </section>

        <footer className={styles['aside-footer']}>
          <Link href="/login" className={styles['aside-footer-container']}>
            <span>Sign in</span>
            <MdOutlineLogout size={18} />
          </Link>
        </footer>
      </div>
    </aside>
  );

  function handleMenuBar() {
    if (window.innerWidth < 1024) {
      menuBar.value == 'open'
        ? setMenuBar({ value: 'closed' })
        : setMenuBar({ value: 'open' });
    }
  }
}
