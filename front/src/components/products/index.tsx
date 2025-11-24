import './style.css';
import data from '../../api/productService.json'
import ProductCard from ".././product-card";
import { useEffect, useState } from "react";
import { getProducts, Product } from "../../services/productService";
import type { Categorie } from '../../services/productService';

const api = process.env.REACT_APP_API;

type ProductsElementsProps = {
    showTitle: boolean,
    title: string,
    limit: number,
    path: string,
    pagination: boolean,
    show: string
    order: string
    cat: string
}

type MockProduct = {
    id: number;
    img: string;
    alt: string;
    title: string;
    description: string;
    price: number;
    new: boolean;
    sale: number;
    categorie: Categorie;
}

export function Products(props: ProductsElementsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setPage] = useState(1);
    const [limit, setLimit] = useState(Number(props.show))
    const [totalPages, setTotalPages] = useState(1);

    let fullPath = `${api}/${props.path}/paginated?limit=${limit}&page=${currentPage}`;

    // Verifica os filtros e modifica a URL
    switch (props.cat) {
        case "dining":
            fullPath = `${api}/products/dining/paginated?limit=${limit}&page=${currentPage}`;
            break;

        case "living":
            fullPath = `${api}/products/living/paginated?limit=${limit}&page=${currentPage}`;
            break;

        case "bedroom":
            fullPath = `${api}/products/bedroom/paginated?limit=${limit}&page=${currentPage}`;
            break;

        case "new":
            fullPath = `${api}/products/new/true/paginated?limit=${limit}&page=${currentPage}`;
            break;

        case "sale":
            fullPath = `${api}/products/sale/paginated?limit=${limit}&page=${currentPage}`;
            break;
    }

    if (props.order !== "default") {
        fullPath = `${api}/products/${props.order}/paginated?limit=${limit}&page=${currentPage}`;
    }

    // // Exibe os produtos
    // useEffect(() => {
    //     getProducts(fullPath).then((res) => {
    //         setProducts(res.data);
    //         setTotalPages(res.totalPage);
    //     });
    // }, [props.path, limit, currentPage, props.cat, props.order]);

    // Muda o limit e exibe
    useEffect(() => {
        setLimit(Number(props.show))
    }, [props.show])

    // Muda de página
    function nextPage() {
        if (currentPage === totalPages) {
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
                {/* Necessita de banco de dados */}
                {/* {products && products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        categorie={product.categorie}
                        alt={product.alt}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        isNew={product.isNew}
                        sale={product.sale}
                    />
                ))} */}

                {data?.products.map((mock) => {
                    const categorie = mock.categorie as unknown as Categorie; // Converte explicitamente para o tipo esperado
                    return (
                        <ProductCard
                            key={mock.id}
                            id={mock.id}
                            image={mock.img}
                            categorie={categorie}
                            alt={mock.alt}
                            title={mock.title}
                            description={mock.description}
                            price={mock.price}
                            isNew={mock.new}
                            sale={mock.sale}
                        />
                    )
                })}
            </div>

            {props.pagination && <div className="pages">
                <div>
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}>
                        Previous
                    </button>

                    {totalPages >= currentPage && currentPage > 1 && (
                        <button onClick={() => setPage(currentPage - 1)}>
                            {currentPage - 1}
                        </button>
                    )}

                    {totalPages >= currentPage && (
                        <button onClick={() => setPage(currentPage)}>
                            {currentPage}
                        </button>
                    )}

                    {totalPages >= currentPage + 1 && (
                        <button onClick={() => setPage(currentPage + 1)}>
                            {currentPage + 1}
                        </button>
                    )}

                    {totalPages >= currentPage + 2 && (
                        <button onClick={() => setPage(currentPage + 2)}>
                            {currentPage + 2}
                        </button>
                    )}


                    <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>}

            {props.pagination && <div className="pagination">
                <span>Página {currentPage} de {totalPages}</span>
            </div>}
        </section>
    )
}

export default Products;