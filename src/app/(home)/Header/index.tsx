import { MenuBarProps } from '@/app/page';
import Image from 'next/image'
import Aside from './Aside'
import './style.scss'

type HeaderProps = {
    currentPage: string;
    menuBar: MenuBarProps;
    setMenuBar: (menuBar: MenuBarProps) => void,
}

export default function Header(props: HeaderProps){
    const { currentPage, menuBar, setMenuBar } = props;

    return (
        <header>
            <Aside menuBar={menuBar} setMenuBar={setMenuBar} />
            <div className="header-container">
                <ul className={`${currentPage}`}>
                    <li translate='no'>Home</li>
                    <li translate='no'>Movies</li>
                    <li translate='no'>Series</li>
                    <li translate='no'>Plans</li>
                </ul>

                <div className="profile">
                    <Image loader={() => "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"} src="https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg" alt="img-profile" width={45} height={45} />
                </div>
            </div>
        </header>
    )
}