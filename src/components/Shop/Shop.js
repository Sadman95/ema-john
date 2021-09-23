import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    
    const handleAdd = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {/* <h1>Products: {products.length}</h1> */}
                {
                    products.map(product => <Product
                        key={product.key} 
                        item={product}
                        handleAdd={handleAdd}
                        >
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Cart</h2>
                <h5>Items added: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;