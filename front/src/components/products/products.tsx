import { ProductCard } from "./product-card/productCard";
import { useEffect, useState } from "react";
import { requestApi, Product } from "../../services/productService";
import "./products.css";
import img from "../../assets/dining.png";

type ProductsElementsProps = {
    title: boolean
}

export function Products(props: ProductsElementsProps) {

    // Converte a response em array de objetos
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        requestApi("http://localhost:3001/products").then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <section className="products">
            {props.title && <h2>Our Products</h2>}

            <div className="grid-container">
                {products.map(product => (
                    <ProductCard
                        img={img}   //TODO: Preciso de imagens no banco de dados para funcionar totalmente
                                    //TODO: Adicionar campo categoria
                        alt={product.alt}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        new={product.new}   // Fazer esses indicadores aparecer
                        sale={product.sale} //
                    />
                ))}
            </div>
        </section>
    )
}