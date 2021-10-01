import React from 'react';

const ReviewItem = (props) => {
    const{key, name, price, quantity} = props.product;
    const {handleRemove} = props;
    return (
        <div>
            <h1 className="product-name">{name}</h1>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button style={{backgroundColor: 'red', color: 'white'}} className="btn-add" onClick={()=> handleRemove(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;