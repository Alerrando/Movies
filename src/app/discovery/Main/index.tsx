import { MenuBarProps } from '@/app/home/page';
import { FiSearch } from 'react-icons/fi';
import styles from './styles.module.scss';

type MainProps = {
  menuBar: MenuBarProps;
};

export default function Main(props: MainProps) {
  const { menuBar } = props;

  return (
    <main className={`${styles.main}`}>
      <div className={styles['main-container']}>
        <header className={styles['main-header']}>
          <h1 className={styles['h1']}>All Films</h1>

          
        </header>
      </div>
    </main>
  );
}
