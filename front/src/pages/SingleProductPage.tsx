import "../styles/App.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Products from "../components/products";
import ShopNav from "../components/shop-nav";
import SingleProduct from "../components/single-product";
import type SingleProductProps from "../components/single-product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/productService";
import infoProduct from "../api/productService.json"


export function SingleProductPage() {

    const { id } = useParams();

    // Exibe os dados do banco quando o ID e api responderem
    // const [infoProduct, setInfoProduct] = useState<SingleProductProps>();
    // useEffect(() => {
    //     if (id) {
    //         getSingleProduct(id).then((data) => {
    //             setInfoProduct(data);
    //         }); 
    //     } else {
    //         console.warn("Dados não encontrados")
    //     };  
    // }, [id]);

    return (
        <div className="SingleProduct">
            <Header />

            {infoProduct?.products[0] && (
                <SingleProduct
                    key={infoProduct.products[0].id}
                    id={infoProduct.products[0].id}
                    title={infoProduct.products[0].title}
                    price={infoProduct.products[0].price}
                    sale={infoProduct.products[0].sale}
                    description={infoProduct.products[0].description}
                    longDescription={infoProduct.products[0].longDescription}
                    size={infoProduct.products[0].size}
                    categorie={infoProduct.products[0].categorie}
                    tag={infoProduct.products[0].tag}
                    image={infoProduct.products[0].image}
                    alt={infoProduct.products[0].alt}
                    miniImage1={infoProduct.products[0].miniImage1}
                    miniImage2={infoProduct.products[0].miniImage2}
                    miniImage3={infoProduct.products[0].miniImage3}
                    miniImage4={infoProduct.products[0].miniImage4}
                />
            )}

            {<Products
                showTitle={true}
                title={"Related Products"}
                limit={4}
                path={`products/`}
                pagination={false}
                order="default"
                show={"4"}
                cat={""}
            />}
            <ShopNav pages={false} button={true} />
            <Footer />
        </div>
    )
}