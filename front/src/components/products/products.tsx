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
    path: string,
    pagination: boolean,
    show: string
}

export function Products(props: ProductsElementsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setPage] = useState(1);
    const [limit, setLimit] = useState(Number(props.show))
    const [totalPages, setTotalPages] = useState(1);

    // Exibe os produtos
    useEffect(() => {
        const fullPath = `${api}/${props.path}/paginated?limit=${limit}&page=${currentPage}`;

        getProducts(fullPath).then((res) => {
            setProducts(res.data);
            setTotalPages(res.totalPage);
        });
    }, [props.path, limit, currentPage]);

    // Muda o limit e exibe
    useEffect(() => {
        setLimit(Number(props.show))
    }, [props.show])

    // Muda de página
    function nextPage() {
        if(currentPage === totalPages) {
            return
        }
        setPage((prev) => prev + 1)
    }

    function prevPage() {
        setPage((prev) => Math.max(prev - 1, 1))
    }
    
    let view1 = true
    let view2 = true
    let view3 = true

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

            {props.pagination && <div className="pages">
                <div>
                    <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>

                    {view1 && <button onClick={() => {
                        currentPage > 1? setPage(currentPage - 1) : setPage(currentPage)
                    }}>
                        {currentPage < totalPages? currentPage : view1 = false}
                    </button>}

                    {view2 && <button onClick={() => {
                        currentPage < totalPages? setPage(currentPage + 1) : setPage(currentPage)
                    }}>
                        {currentPage < totalPages? currentPage+1 : view2 = false}
                    </button>}

                    {view3 && <button onClick={() => {
                        currentPage < totalPages? setPage(currentPage + 1) : setPage(currentPage)
                    }}>
                        {currentPage < totalPages? currentPage+2 : view3 = false}
                    </button>}

                    <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>}
            
            {props.pagination && <div className="pagination">
                <span>Página {currentPage} de {totalPages}</span>
            </div>}
        </section>
    )
}