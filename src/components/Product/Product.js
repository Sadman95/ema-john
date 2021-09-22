import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.item)
    const {name, img, price, seller, stock} = props.item;
    return (
        <div className="product-details">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="product-name">{name}</h2>
                <h1 className="product-price">Price: ${price}</h1>
                <p><small>By: {seller}</small></p>
                <p><small><b>{stock} available in stock</b></small></p>
            </div>
        </div>
    );
};

export default Product;