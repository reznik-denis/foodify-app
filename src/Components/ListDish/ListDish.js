import { ItemDish } from "Components/ItemDish";
import { useSelector} from "react-redux";
import { selectors } from '../../redux';
import s from './listDish.module.css'


export default function ListDish() {
     const favourites = useSelector(selectors.getFavourites)
    return <ul className={s.list}>
        {favourites && favourites.map(item => 
            <li key={item.id} className={s.item}>
                <ItemDish data={item}/>
            </li>
        )}
    </ul>
}