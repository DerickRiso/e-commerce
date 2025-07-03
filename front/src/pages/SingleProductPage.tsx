import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Products } from "../components/products/products";
import { ShopNav } from "../components/shop-nav/shopNav";
import { useParams } from "react-router-dom";
import "../styles/App.css";

export function SingleProduct() {

    const { id } = useParams();

    return (
        <div className="SingleProduct">
            <Header />

            <SingleProduct />
            <Products showTitle={true} title={"Related Products"} />
            <ShopNav pages={false} button={true}/>
            <Footer />
        </div>
    )
}