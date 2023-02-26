import { FilmSlate } from "phosphor-react";
import './style.scss'

export default function Header(){
    return (
        <header>
            <div className="header-container">
                <FilmSlate size={32} />
            </div>
        </header>
    )
}