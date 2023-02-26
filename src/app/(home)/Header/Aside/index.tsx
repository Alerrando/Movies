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
    const [menubar, setMenuBar] = useState(MenuBar);

    return(
        <aside className={`${menubar.value}`} onClick={() => menubar.value == "closed" ? setMenuBar({ value: "open" }) : setMenuBar({ value: "closed" }) }>
            <div className="aside-container">
                <header>
                    <FilmSlate size={32} />
                    <span className="closed">Movies</span>
                </header>
            </div>
        </aside>
    )
}