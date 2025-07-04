import { ProductCard } from "./product-card/productCard";
import { useEffect, useState } from "react";
import { getProducts, Product } from "../../services/productService";
import "./products.css";

let categorie = "";
const api = process.env.REACT_APP_API;
const categorieApi = `products/${categorie}/paginated?limit=`;
const allApi = "/products/paginated?limit="

type ProductsElementsProps = {
    showTitle: boolean,
    title: string,
    limit: number,
    path: string
}


export function Products(props: ProductsElementsProps) {

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        // Define o limit com props
        getProducts(`${api}/${props.path}${props.limit}`).then((data) => {
            setProducts(data);
        });
    }, [props.limit]);

    return (
        <section className="products">
            {props.title && <h2>{props.title}</h2>}

            <div className="grid-container">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        categorie={product.categorie}
                        alt={product.alt}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        new={product.new}
                        sale={product.sale}
                    />
                ))}
            </div>
        </section>
    )
}