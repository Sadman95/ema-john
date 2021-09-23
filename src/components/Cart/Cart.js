import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    let total = 0;
    for (const item of props.cart) {
        total = total + item.price;
    }
    return (
        <div className="cart">
            <h2>Cart</h2>
            <h4>Items: {props['cart'].length}</h4>
            <h4>Total: ${total}</h4>

        </div>
    );
};

export default Cart;