import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { actions} from '../../redux';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
       window.addEventListener('keydown', handleKeydown)
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleKeydown = e => {
        if (e.code === 'Escape') {
            dispatch(actions.modal(false))
        }
    };
    
    function handleOverleyClick(e) {
        if (e.currentTarget === e.target) {
            dispatch(actions.modal(false))
        }
    }

    return createPortal(
        <div className={s.Overlay} onClick={handleOverleyClick}>
            <div className={s.Modal}>
                {children}
            </div>
        </div>, modalRoot,);
}
