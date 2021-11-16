import s from "./footer.module.css";
import LazyLoad from 'react-lazyload';
import GitHub from "static/image/github.png";
import Linkedin from "static/image/linkedin.png";

export default function Footer() {
    return <div className={s.title}>
        <div >
            <p>Made by Reznik Denis</p>
        </div>
        <div className={s.flex}>
            <a href="https://github.com/reznik-denis">
                <LazyLoad height={40} once>
                     <img src={GitHub} alt="GitHub" width="40"/>
                 </LazyLoad>
            </a>
            <a href="https://www.linkedin.com/in/reznik-do/">
                <LazyLoad height={40} once>
                    <img src={Linkedin} alt="Linkedin" width="40"/>
                </LazyLoad>
            </a>
        </div>
    </div>
}