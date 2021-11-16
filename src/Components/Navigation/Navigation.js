import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

export default function Navigation() {
    return <nav className={s.main}>
        <NavLink to="/" className={({ isActive }) => isActive ? s.active : s.link}>Main</NavLink>
        <NavLink to={`/favourites`} className={({ isActive }) => isActive ? s.active : s.link}>Favourites</NavLink>
    </nav>
}