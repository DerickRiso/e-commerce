import { useNavigate } from "react-router-dom";
import { Categorie, Product } from "../../../services/productService";
import "./product-card.css";

export function ProductCard(props: Product) {

    const navigate = useNavigate();
    function navigateTo(path: string) {
        navigate(`${path}`);
    }

    function calcPercent() {
        let res = 0
        if(props.sale === props.price) {
            return res;
        } else {
            let percent = Math.floor((props.sale / props.price) * 100);
            res = 100 - percent;
            return res;
        }
    }

    return (
        <aside className="product-card" 
        onClick={() => {
            navigateTo(`/shop/${props.id}`)
        }}>
            
            {calcPercent() > 0 && <span id="discount">
                -{calcPercent()}%
            </span>}
            {props.new && <span id="new">
                New
            </span>}

            <img src={props.image} alt={props.alt} />
            <div className="title">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            
            <div className="prices">
                {/* Caso haja promoção, mostra o valor menor */}
                {props.price !== props.sale && 
                    <p>
                        <strong>R${props.sale}</strong>
                    </p>
                }

                {props.price !== props.sale ? (
                    <p className="risked">R${props.price}</p>
                ) : (
                    <p>
                        <strong>R${props.price}</strong>
                    </p>
                )}
            </div>
        </aside>
    )
}