import { useNavigate } from "react-router-dom";
import { Categorie, Product } from "../../../services/productService";
import "./product-card.css";

export function ProductCard(props: Product) {

    const navigate = useNavigate();
    function navigateTo(path: string) {
        navigate(`${path}`);
    }

    return (
        <aside className="product-card" onClick={() => {
            navigateTo(`/${props.id}`)
        }}>
            {props.new && <span>New</span>}
            <img src={props.img} alt={props.alt} />
            <div className="title">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="prices">
                {/* Caso haja promoção, mostra o valor menor */}
                {props.price !== props.sale && 
                    <p><strong>R${props.sale}
                </strong></p>}
                {props.price !== props.sale ? (
                    <p className="risked">R${props.price}</p>
                ) : (
                    <p><strong>R${props.price}</strong></p>
                )}
            </div>
        </aside>
    )
}