import Navigation from '../Navigation/Navigation'
import Footer from "../Footer/Footer";
import { Outlet } from 'react-router-dom'
import s from './appBar.module.css'


export default function AppBar() {
    return (
        <>
            <header className={s.main}>
                <Navigation />
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}