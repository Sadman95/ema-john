import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props)
    let {cart} = props;
// sub-total:
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
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
    let tax = total*0.2;
// grand-total:
    let grand_total = total + shipping + tax;
    return (
        <div className="cart">
            <h2>Cart</h2>
            <h4>Items: {props['cart'].length}</h4>
            <h4>Sub total: ${total.toFixed(2)}</h4>
            <h4>Shipping charge: ${shipping.toFixed(2)}</h4>
            <h4>Tax: ${tax.toFixed(2)}</h4>
            <h4>Grand total: ${grand_total.toFixed(2)}</h4>

        </div>
    );
};

export default Cart;