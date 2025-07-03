import { ProductCard } from "./product-card/productCard";
import { useEffect, useState } from "react";
import { getProducts, Product } from "../../services/productService";
import "./products.css";

const api = process.env.REACT_APP_API;

type ProductsElementsProps = {
    showTitle: boolean,
    title: string
}

export function Products(props: ProductsElementsProps) {

    // Converte a response em array de objetos
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        getProducts(`${api}/products`).then((data) => {
            setProducts(data);
        });
    }, []);

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