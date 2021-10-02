import React from 'react';
import img from '../../images/giphy.gif'

const OrderPlaced = () => {
    return (
        <div>
            <h1>Yeah!your order is placed successfuly</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default OrderPlaced;