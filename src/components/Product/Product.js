import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Features from './Features/Features';
import './Product.css'


const Product = (props) => {
    // console.log(props.item['features'])
    const {name, img, price, seller, stock, features} = props.item;
    const cartIcon = <FontAwesomeIcon style={{marginRight: "5px"}} icon={faShoppingCart}></FontAwesomeIcon>;
    return (
        <div className="product-details">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="product-name">{name}</h2>
                <div className="details">
                    <div>
                        <h1 className="product-price">Price: ${price}</h1>
                        <p><small>By: {seller}</small></p>
                        <p><small><b>{stock} available in stock</b></small></p>
                        <button onClick={()=>props.handleAdd(props.item)} className="btn-add">{cartIcon}Add to cart</button>
                    </div>
                    <div>
                        <Features features={features}></Features>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Product;