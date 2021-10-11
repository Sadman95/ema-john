import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/giphy.gif'

const OrderPlaced = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h1>Yeah!your order is placed successfuly</h1>&nbsp;
                <Link to="/shipping">
                <button className="btn-add">Go For Shipping</button>
                </Link>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default OrderPlaced;