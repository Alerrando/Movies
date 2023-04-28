import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './style.module.scss';

type HeaderProps = {
  style: React.CSSProperties | undefined,
};

export default function Header(props: HeaderProps) {
  const { style } = props;

  return (
    <header className={styles.header} style={style}>
      <div className={styles.headerContainer}>
        <div className={styles['search-container']}>
            <FiSearch size={18} />
            <input type="text" placeholder="Search" />
        </div>

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
