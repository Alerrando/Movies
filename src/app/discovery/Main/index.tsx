import styles from './styles.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import Filter from './Filter';

export default function Main() {
  const [filterMenu, setFilterMenu] = useState<boolean>(false);

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles['main-container']}>
          <header className={styles['main-header']}>
            <h1 className={styles['h1']}>All Films</h1>

            <AiOutlineMenu size={32} onClick={() => setFilterMenu(true)} />
          </header>
        </div>
      </main>

      {filterMenu ? <Filter setFilterMenu={setFilterMenu} /> : null}
    </>
  );
}
