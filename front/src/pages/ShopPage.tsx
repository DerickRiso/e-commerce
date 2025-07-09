import React, { useState } from 'react';
import "../styles/index.css";
import { Header } from '../components/header/header';
import { BannerShop } from '../components/banner-shop/bannerShop'
import { Products } from '../components/products/products';
import { Features } from '../components/features/features';
import { Footer } from '../components/footer/footer';
import { Filter } from '../components/filter/filter';
import { ShopNav } from '../components/shop-nav/shopNav';

const allApi = "products"

export function ShopPage() {

    const [show, setShow] = useState("8");

    return (
        <div className='ShopPage'>
            <Header />
            <BannerShop />
            <Filter value={show} onChange={setShow}/>
            <Products 
                showTitle={false} 
                title={""} 
                limit={8} 
                path={allApi}
                pagination={true}
                show={show}
            />
            <ShopNav pages={true} button={false}/>
            <Features />
            <Footer />
        </div>
    )
}