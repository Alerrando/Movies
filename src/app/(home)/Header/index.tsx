import Image from 'next/image'
import Aside from './Aside'
import './style.scss'

export default function Header(){
    return (
        <header>
            <Aside />
            <div className="header-container">
                <ul>
                    <li translate='no'>Movies</li>
                    <li translate='no'>Series</li>
                    <li translate='no'>Tv Shows</li>
                </ul>

                <div className="profile">
                    <Image loader={() => "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"} src="https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg" alt="img-profile" width={45} height={45} />
                </div>
            </div>
        </header>
    )
}