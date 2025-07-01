import { ProductCard } from "./product-card/productCard"
import "./products.css";
import img from "../../assets/dining.png"

export function Products() {
    return (
        <section className="products">
            <h2>Our Products</h2>
            <ProductCard
             img={img}
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

            <a href="#" className="show-more">Show More</a>
        </section>
    )
}