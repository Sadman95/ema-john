import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="shop-container">
            <div className="products-container">
                <h1>Products: {products.length}</h1>
                {
                    products.map(product => console.log(product))
                }
            </div>
            <div className="cart-container">
                <h1>Cart Section</h1>
            </div>
        </div>
    );
};

export default Shop;