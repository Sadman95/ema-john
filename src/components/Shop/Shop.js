import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displaySearched, setDisplaySearched] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => { 
            setProducts(data)
            setDisplaySearched(data)
        }
        )
    }, [])

    useEffect(() =>{
        // problem: not update incase of more than one of a product:
        if(products.length){
            const savedCart = getStoredCart();
            const savedProduct = [];
            for (const key in savedCart) {
                console.log(key, savedCart[key])
                const matchedProducts = products.find(product => product.key === key);
                // console.log(matchedProducts)
                if(matchedProducts){
                    const quantity = savedCart[key];
                    // console.log(quantity)
                    matchedProducts.quantity = quantity;
                    console.log(matchedProducts)
                    savedProduct.push(matchedProducts);
                }
            }
            setCart(savedProduct);
        }
        
    }, [products])

    
    const handleAdd = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const sarchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplaySearched(sarchedProducts)
    }
    return (
        <>
            <div className="searchField-container">
                <input onChange={handleSearch} className="search-box" type="text" />
            </div>
            <div className="shop-container">
                <div className="products-container">
                    {/* <h1>Products: {products.length}</h1> */}
                    {
                        displaySearched.map(product => <Product
                            key={product.key} 
                            item={product}
                            handleAdd={handleAdd}
                            >
                            </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;