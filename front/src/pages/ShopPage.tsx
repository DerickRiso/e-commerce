import React from 'react';
import "../styles/index.css";
import { Header } from '../components/header/header';
import { BannerShop } from '../components/banner-shop/bannerShop'
import { Products } from '../components/products/products';
import { Features } from '../components/features/features';
import { Footer } from '../components/footer/footer';
import { Filter } from '../components/filter/filter';

export function ShopPage() {
    return (
        <div className='ShopPage'>
            <Header />
            <BannerShop />
            <Filter />
            <Products title={false} button={false} pages={true} />
            
            <Features />
            <Footer />
        </div>
    )
}