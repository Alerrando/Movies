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
import { useDispatch, useSelector } from 'react-redux';
import { handleMenuBarAside } from '../../../slice/index'
import { RootState } from 'store';

export default function Aside() {
  const { MenuBarAside } = useSelector((state: RootState) => state.Slice);
  const dispatch = useDispatch();

  return (
    <aside className={`${styles[`${MenuBarAside.value}`]} ${styles.aside} enter`}>
      <div className={styles['aside-container']}>
        <header className={styles.header}>
          <div className={styles['header-title']}>
            <MdMovie className={styles.icon} onClick={() => dispatch(handleMenuBarAside())} />
            <span translate="no" data-testid="Movies-Aside">Movies</span>
          </div>
          
          <AiOutlineClose
            className={`${styles.closed} ${styles.icon}`}
            onClick={() => dispatch(handleMenuBarAside())}
          />
        </header>

        <section className={styles['aside-menu']}>
          <div className={styles['aside-menu-container']}>
            <h2 translate="no">Menu</h2>

            <ul className={styles.ul}>
              <Link href="/" className={styles['menu-dashboard']}>
                <BsHouseDoor size={18} />
                <li>Home</li>
              </Link>

              <Link href="/discovery" className={styles['menu-dashboard']}>
                <AiOutlineCompass size={18} />
                <li>Discovery</li>
              </Link>
              <Link href="/coming-soon" className={styles['menu-dashboard']}>
                <BsAlarm size={18} />
                <li>Coming Soon</li>
              </Link>
              <Link href="/community" className={styles['menu-dashboard']}>
                <BsPeople size={18} />
                <li>Community</li>
              </Link>
            </ul>
          </div>

          <div className={styles['aside-menu-container']}>
            <h2 translate="no">Library</h2>

            <ul className={styles.ul}>
              <Link href="/recents" className={styles['menu-dashboard']}>
                <AiOutlineClockCircle size={18} />
                <li>Recents</li>
              </Link>
              <Link href="/favorites" className={styles['menu-dashboard']}>
                <AiOutlineHeart size={18} />
                <li>Favorites</li>
              </Link>
              <Link href="/top-rated" className={styles['menu-dashboard']}>
                <AiOutlineStar size={18} />
                <li>Top Rated</li>
              </Link>
              <Link href="/downloaded" className={styles['menu-dashboard']}>
                <BsDownload size={18} />
                <li>Downloaded</li>
              </Link>
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
}
