import s from './button.module.css';

export default function Button({ title, handleSubmit }) {
    return <button className={s.button} type='submit' onClick={handleSubmit}>{title}</button>
}