import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import Navigation from '../Navigation/Navigation'
import Footer from "../Footer/Footer";
import { Button } from 'Components/Button';
import { Outlet } from 'react-router-dom';
import { actions, selectors } from '../../redux';
import s from './appBar.module.css'


export default function AppBar() {
    const dispatch = useDispatch();
    const openModal = useSelector(selectors.getModal);
    const {pathname} = useLocation();

    const onClickOpenModal = () => {
        openModal ? dispatch(actions.modal(false)) : dispatch(actions.modal(true))
    }

    return (
        <>
            <header className={s.main}>
                <Navigation />
                <div className={s.button}>
                    {pathname === '/favourites' && <Button title="Add custom dish" handleSubmit={onClickOpenModal} />}
                </div>
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