import { ItemDish } from "Components/ItemDish";
import { useSelector, useDispatch} from "react-redux";
import { selectors, actions } from '../../redux';
import { Button } from "Components/Button";
import s from './listDish.module.css'


export default function ListDish() {
    const favourites = useSelector(selectors.getFavourites);
    const dispatch = useDispatch();
    
    const onClickDeleteDish = (id) => {
        const indexEl = favourites.findIndex((item) => item.id === id);
        const data = [...favourites];
        data.splice(indexEl, 1);
        dispatch(actions.deleteDish(data));
    }

    return <ul className={s.list}>
        {favourites && favourites.map(item => 
            <li key={item.id} className={s.item}>
                <ItemDish data={item} >
                    <Button title="Delete dish" handleSubmit={()=>onClickDeleteDish(item.id)}/>
                </ItemDish>
            </li>
        )}
    </ul>
}