import styles from './styles.module.scss'
import { GrClose } from 'react-icons/gr'

type FilterProps = {
    setFilterMenu: (filterMenu: boolean) => void,
}

export default function Filter({ setFilterMenu }: FilterProps){
    return(
        <div className={styles.filter}>
            <div className={styles['filter-container']}>
                <header className={styles['filter-header']}>
                    <GrClose size={26} onClick={() => setFilterMenu(false)} />
                </header>
            </div>
        </div>
    )
}