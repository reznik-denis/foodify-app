import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function random() {
    return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            toast.error("Random dish not find");
            return Promise.reject(new Error('Random dish not find'))
        }).then(data => data);
}