import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    let {cart} = props;
// sub-total:
    let total_price = 0;
    let total_quantity = 0;
    for (const product of cart) {
        if(!product.quantity){
            product.quantity = 1;
        }
        else{
            total_price = total_price + product.price * product.quantity;
            // **** //
            total_quantity = total_quantity? total_quantity+1:total_quantity+product.quantity;   
        }
        }
        
// shipping:
    // reducer method: {
   const reducer = (previous_amount, product) => previous_amount + product.shipping;
   let shipping = cart.reduce(reducer,0) ;
    // }

   /*  let shipping = 0;
    for (const product of cart) {
        shipping = shipping + product.shipping;
    } */

// tax:
    let tax = total_price*0.2;
// grand-total:
    let grand_total = total_price + shipping + tax;
    return (
        <div className="cart">
            <h2>Cart</h2>
            
            <h4>Items: {total_quantity}</h4>
            <h4>Sub total: ${total_price.toFixed(2)}</h4>
            <h4>Shipping charge: ${shipping.toFixed(2)}</h4>
            <h4>Tax: ${tax.toFixed(2)}</h4>
            <h4>Grand total: ${grand_total.toFixed(2)}</h4>
            <Link to="/review">
            <button className="btn-add">Review Items</button>
            </Link>
        </div>
    );
};

export default Cart;