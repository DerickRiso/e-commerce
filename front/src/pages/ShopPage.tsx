import "../styles/index.css";
import Header from '../components/header';
import BannerShop from '../components/banner-shop'
import Products from '../components/products';
import Features from '../components/features';
import Footer from '../components/footer';
import Filter from '../components/filter';
import ShopNav from '../components/shop-nav';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const allApi = "products"

export function ShopPage() {

    // Usa uma query para definir categoria, se não tiver define all
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category");

    const [show, setShow] = useState("8");
    const [filter, setFilter] = useState(category || "all");
    const [order, setOrder] = useState("default")

    return (
        <div className='ShopPage'>
            <Header />
            <BannerShop />
            <Filter
                value={show} 
                filter={filter} 
                order={order}
                onChange={(newValue) => {
                    setShow(newValue);
                }}
                onSelect={(newSelect) => {
                    setFilter(newSelect);
                }}
                onOrder={(newOrder) => {
                    setOrder(newOrder);
                }}
            />
            <Products 
                showTitle={false} 
                title={""} 
                limit={8} 
                path={allApi}
                pagination={true}
                show={show}
                order={order}
                cat={filter}
            />
            <ShopNav pages={true} button={false}/>
            <Features />
            <Footer />
        </div>
    )
}