import { ProductCard } from "./product-card/productCard";
import { useEffect, useState } from "react";
import { getProducts, Product } from "../../services/productService";
import "./products.css";

const api = process.env.REACT_APP_API;
const allApi = "/products/paginated?limit="

type ProductsElementsProps = {
    showTitle: boolean,
    title: string,
    limit: number,
    path: string
}

export function Products(props: ProductsElementsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fullPath = `${api}/${props.path}/paginated?limit=${props.limit}&page=${currentPage}`;
        getProducts(fullPath).then((res) => {
            setProducts(res.data);
            setTotalPages(res.totalPage);
            
        });
    }, [props.path, props.limit, currentPage, totalPages]);

    function nextPage() {
        if(currentPage === totalPages) {
            return
        }
        setPage((prev) => prev + 1)
    }

    function prevPage() {
        setPage((prev) => Math.max(prev - 1, 1))
    }

    return (
        <section className="products">
            {props.title && <h2>{props.title}</h2>}

            <div className="grid-container">
                {products && products.map(product => (
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
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage} de {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Próxima</button>
            </div>
        </section>
    )
}