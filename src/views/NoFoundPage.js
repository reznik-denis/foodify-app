// import s from 'Components/ButtonCity/buttonCity.module.css'
import { useNavigate } from 'react-router-dom';


export default function NoFoundPage() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`/`);
    }

    return <><h2>This page not found. Please back to main page.</h2>
        <button type='submit' onClick={handleSubmit}>Go to Main</button>
        </>
}