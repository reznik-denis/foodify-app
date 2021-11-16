import s from './ItemDish.module.css'

export default function ItemDish({ children, data }) {
    const { title, description, image } = data;
    return <div className={s.thumb}>
        <img src={image} alt={title} />
        <div className={s.description}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className={s.flex}>{children}</div>
    </div>
    
}

