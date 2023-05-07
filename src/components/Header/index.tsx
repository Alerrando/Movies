import Image from 'next/image';
import * as React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { handleMenuBarHeader } from 'slice';

type HeaderProps = {
  style: React.CSSProperties | undefined,
};

export default function Header(props: HeaderProps) {
  const { MenuBarHeader } = useSelector((root: RootState) => root.Slice);
  const dispatch = useDispatch();
  const { style } = props;

  return (
    <header className={styles.header} style={style}>
      <div className={styles.headerContainer}>
        <div className={styles['search-container']}>
            <FiSearch size={18} />
            <input type="text" placeholder="Search" />
        </div>

        <div className={`${styles[`${MenuBarHeader.value}`]} ${styles['profile-menu']}`}>
          <div className={styles['profile-menu-container']}>
            <div className={`${styles.profile}`}>
              <Image
                loader={() => "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"}
                src="https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"
                alt="img-profile"
                fill
                unoptimized
                onClick={() => dispatch(handleMenuBarHeader())}
              />
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
