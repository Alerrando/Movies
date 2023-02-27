import { MenuBarProps } from '@/app/page';
import './style.scss'

type MainProps = {
    menuBar: MenuBarProps;
}

export default function Main(props: MainProps) {
    const { menuBar } = props;

    return(
        <main className={`${menuBar.value}`}>
            <div className="main-container">
                <h1>Hello World</h1>
            </div>
        </main>
    )
}