import './style.css'
import share from "../../assets/icons/share.png"
import heart from "../../assets/icons/Heart-white.png"
import compare from "../../assets/icons/compare.png"
import { Product } from "../../services/productService"
import { useNavigate } from "react-router-dom"



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
        <aside className="product-card">

            <div className="hover-product">
                <button onClick={() => {
                    navigateTo(`/shop/${props.id}`)
                }}>See Details</button>
                <div>
                    <span>
                        <img src={share} />
                        Share
                    </span>
                    <span>
                        <img src={compare} />
                        Compare
                    </span>
                    <span>
                        <img src={heart} />
                        Like
                    </span>
                </div>
            </div>
            
            {calcPercent() > 0 && <span id="discount">
                -{calcPercent()}%
            </span>}
            {props.isNew && <span id="new">
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
                        <strong>R$ {props.sale},00</strong>
                    </p>
                }

                {props.price !== props.sale ? (
                    <p className="risked">R$ {props.price},00</p>
                ) : (
                    <p>
                        <strong>R$ {props.price},00</strong>
                    </p>
                )}
            </div>
        </aside>
    )
}

export default ProductCard;