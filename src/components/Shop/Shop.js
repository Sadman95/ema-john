import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
                {/* <h1>Products: {products.length}</h1> */}
                {
                    products.map(product => <Product
                        key={product.key} 
                        item={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Cart Section</h1>
            </div>
        </div>
    );
};

export default Shop;