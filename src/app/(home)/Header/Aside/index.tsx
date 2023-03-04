import { MenuBarProps } from "@/app/page";
import { FilmSlate, X } from "phosphor-react";
import './style.scss'

type AsideProps = {
    menuBar: MenuBarProps;
    setMenuBar: (menuBar: MenuBarProps) => void,
}

export default function Aside(props: AsideProps){
    const { menuBar, setMenuBar } = props

    return(
        <aside className={`${menuBar.value}`}>
            <div className="aside-container">
                <header onClick={() => handleMenuBar()}>
                    <div className="header-title">
                        <FilmSlate className="film" />
                        <span translate="no">Movies</span>
                    </div>

                    <X className="closed X" onClick={() => handleMenuBar()} />
                </header>
            </div>
        </aside>
    )

    function handleMenuBar(){
        menuBar.value == "open" ? setMenuBar({ value: "closed" }) : setMenuBar({ value: "open" })
    }
}