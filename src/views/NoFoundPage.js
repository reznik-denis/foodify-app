import { Button } from 'Components/Button';
import { useNavigate } from 'react-router-dom';


export default function NoFoundPage() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`/`);
    }

    return <><h2>This page not found. Please back to main page.</h2>
        <Button title='Go to Main' handleSubmit={handleSubmit}/>
        </>
}