import { FilmSlate, X } from "phosphor-react";
import { useState } from "react";
import './style.scss'

type MenuBarProps = {
    value: string;
}

const MenuBar: MenuBarProps = {
    value: "closed" || "open"
}

export default function Aside(){
    const [menuBar, setMenuBar] = useState(MenuBar);

    return(
        <aside className={`${menuBar.value}`}>
            <div className="aside-container">
                <header onClick={() => handleMenuBar()}>
                    <div className="header-title">
                        <FilmSlate size={32} />
                        <span className="closed" translate="no">Movies</span>
                    </div>

                    <X size={32} className="closed X" onClick={() => handleMenuBar()} />
                </header>
            </div>
        </aside>
    )

    function handleMenuBar(){
        menuBar.value == "open" ? setMenuBar({ value: "closed" }) : setMenuBar({ value: "open" })
    }
}