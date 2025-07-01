import "./product-card.css";

type ProductCardProps = {
    img: string,
    alt: string,
    title: string,
    description: string,
    price: string,
    new: boolean,
    sale: string
}

export function ProductCard(props: ProductCardProps) {
    return (
        <aside className="product-card">
            {props.new && <span>New</span>}
            <img src={props.img} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <span>{props.sale}</span>
        </aside>
    )
}