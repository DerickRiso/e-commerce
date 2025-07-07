import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Products } from "../components/products/products";
import { ShopNav } from "../components/shop-nav/shopNav";
import { useParams } from "react-router-dom";
import "../styles/App.css";
import { SingleProduct } from "../components/single-product/singleProduct";
import { SingleProductProps } from "../components/single-product/singleProduct";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/productService";

export function SingleProductPage() {

    const { categorie } = useParams();
    const { id } = useParams();

    // Exibe os dados do banco quando o ID e api responderem
    const [infoProduct, setInfoProduct] = useState<SingleProductProps>();
    useEffect(() => {
            if (id) {
                getSingleProduct(id).then((data) => {
                setInfoProduct(data);
            });
        };  
    }, [id]);

    return (
        <div className="SingleProduct">
            <Header />

            {infoProduct && <SingleProduct
                id={infoProduct.id}
                title={infoProduct.title}
                price={infoProduct.price}
                sale={infoProduct.sale}
                description={infoProduct.description}
                longDescription={infoProduct.longDescription}
                size={infoProduct.size}
                categorie={infoProduct.categorie}
                tag={infoProduct.tag}
                image={infoProduct.image}
                alt={infoProduct.alt}
                miniImage1={infoProduct.miniImage1}
                miniImage2={infoProduct.miniImage2}
                miniImage3={infoProduct.miniImage3}
                miniImage4={infoProduct.miniImage4}
            />}
    
            {infoProduct && <Products
                showTitle={true} 
                title={"Related Products"} 
                limit={4}
                path={`products/${infoProduct.categorie}/paginated?limit=`}
            />}
            <ShopNav pages={false} button={true}/>
            <Footer />
        </div>
    )
}