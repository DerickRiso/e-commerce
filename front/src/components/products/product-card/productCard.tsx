import "./product-card.css";

type ProductCardProps = {
    img: string,
    alt: string,
    title: string,
    description: string,
    price: string
}

export function ProductCard(props: ProductCardProps) {
    return (
        <aside className="product-card">
            <img src={props.img} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </aside>
    )
}