import s from './ItemDish.module.css'

export default function ItemDish({ children, data }) {
    const { title, description, image } = data;
    return <div className={s.thumb}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p className={s.description}>{description}</p>
        <div className={s.flex}>{children}</div>
    </div>
    
}

