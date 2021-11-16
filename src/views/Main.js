import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


import { ItemDish } from "Components/ItemDish"
import { Button } from 'Components/Button';
import { Loader } from 'Components/Loader';
import { actions, selectors } from '../redux';
import { useSelector, useDispatch } from "react-redux";
import { operation } from '../redux';


export default function Main() {
    const data = useSelector(selectors.getRandom);
    const loading = useSelector(selectors.getLoader);
    const favourites = useSelector(selectors.getFavourites)
    const dispatch = useDispatch();

    const onClickSkip = () => {
        dispatch(operation.random())
    }

    const onClickLike = () => {
        favourites && favourites.find(({ id }) => data.id === id)
            ? toast.error("You have already added this dish!") 
            : dispatch(actions.favourites(data));
    }
    return <div>
        {loading ? <Loader/> : <ItemDish data={data}>
            <Button title="Skip" handleSubmit={onClickSkip} />
            <Button title="Like" handleSubmit={onClickLike}/>
        </ItemDish> }   
    </div>
}