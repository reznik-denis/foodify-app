import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import s from './Navigation.module.css';

// import {selectors} from '../../redux'

export default function Navigation() {
    return <nav className={s.main}>
        <NavLink to="/" className={({ isActive }) => isActive ? s.active : s.link}>Main</NavLink>
        <NavLink to={`/favourites`} className={({ isActive }) => isActive ? s.active : s.link}>Favourites</NavLink>
    </nav>
}