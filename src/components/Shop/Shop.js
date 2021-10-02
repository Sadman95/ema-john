import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displaySearched, setDisplaySearched] = useState([])
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => { 
            setProducts(data)
            setDisplaySearched(data)
        }
        )
    }, [])

    const [cart, setCart] = useCart(products);
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
                <input onChange={handleSearch} className="search-box" type="text" placeholder="search your favorite product i.e laptop" />
            </div>
            <div className="shop-container">
                <div className="products-container">
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