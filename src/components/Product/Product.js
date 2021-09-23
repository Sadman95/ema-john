import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name, img, price, seller, stock} = props.item;
    const cartIcon = <FontAwesomeIcon style={{marginRight: "5px"}} icon={faShoppingCart}></FontAwesomeIcon>;
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
                <button onClick={()=>props.handleAdd(props.item)} className="btn-add">{cartIcon}Add to cart</button>
            </div>
        </div>
    );
};

export default Product;