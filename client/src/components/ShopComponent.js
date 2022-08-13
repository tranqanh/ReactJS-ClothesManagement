import React from "react";
import 'bootstrap-social/bootstrap-social.css';
import Header from "./Header";
import Footer from "./Footer";
import 'font-awesome/css/font-awesome.css';
import Product from "./Product";
import ProductDetail from "./ProductDetailComponents";
import myproducts from "./data";

function Shop() {
    return (
        <>
            <Header/>
            <ProductDetail/>
            <Footer/>
        </>
    )
}

export default Shop;