import Image from 'next/image';
import * as React from 'react';
import styles from './style.module.scss';

type HeaderProps = {
  currentPage: string;
};

export default function Header(props: HeaderProps) {
  const { currentPage } = props;

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <ul className={`${styles[currentPage]} ${styles.ul}`}>
          <li translate="no" className={styles.li}>
            Home
          </li>
          <li translate="no" className={styles.li}>
            Movies
          </li>
          <li translate="no" className={styles.li}>
            Series
          </li>
          <li translate="no" className={styles.li}>
            Tv Shows
          </li>
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
