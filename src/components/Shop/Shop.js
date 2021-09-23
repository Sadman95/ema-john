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
        const savedProducts = getStoredCart();
        // problem: not update incase of more than one of a product:
        if(products.length){
            const savedEmpty = [];
            for (const key in savedProducts) {
                const matched = products.find(product => product.key === key)
                console.log(matched)
                savedEmpty.push(matched);
            }
            setCart(savedEmpty);
        }
        
    }, [products])

    
    const handleAdd = (product) => {
        console.log(product)
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