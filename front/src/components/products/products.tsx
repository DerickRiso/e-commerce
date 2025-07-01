import { ProductCard } from "./product-card/productCard";
import "./products.css";
import img from "../../assets/dining.png";

type ProductsElementsProps = {
    title: boolean,
    button: boolean,
    pages: boolean
}

export function Products(props: ProductsElementsProps) {

    return (
        <section className="products">
            {props.title && <h2>Our Products</h2>}

            <ProductCard
             img={""}
             alt={"Mesa"}
             title={"Syltherine"}
             description={"Stylish cafe chair"}
             price={"Rp 2.500.000"}
            />

            <ProductCard
             img={""}
             alt={""}
             title={""}
             description={""}
             price={""}
            />

            {props.title && <a href="#" className="show-more">Show More</a>}

            {props.pages && <div className="pages">
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <button>Next</button>
            </div>}
        </section>
    )
}