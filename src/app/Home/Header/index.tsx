import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import styles from './style.module.scss';

type HeaderProps = {
  style: React.CSSProperties | undefined,
};

export default function Header(props: HeaderProps) {
  const { style } = props;

  return (
    <header className={styles.header} style={style}>
      <div className={styles.headerContainer}>
        <ul className={`${styles.ul}`}>
          <Link className={styles.a} href='/home'>
            <li translate="no" className={styles.li}>Home</li>
          </Link>

          <Link className={styles.a} href='/movies'>
            <li translate="no" className={styles.li}>
              Movies
            </li>
          </Link>

          <Link className={styles.a} href="/series">
            <li translate="no" className={styles.li}>
              Series
            </li>
          </Link>

          <Link className={styles.a} href="/tv-shows">
            <li translate="no" className={styles.li}>
              Tv Shows
            </li>
          </Link>

        </ul>

        <div className={styles.profile}>
          <Image
            loader={() => "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"}
            src="https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"
            alt="img-profile"
            fill
          />
        </div>
      </div>
    </header>
  );
}
