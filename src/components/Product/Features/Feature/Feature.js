import React from 'react';
import './Feature.css'

const Feature = (props) => {
    const {description, value} = props.feature;
    return (
        <div>
            <h3 className="description">{description}:
            <small>{value}</small> 
            </h3>
             
        </div>
    );
};

export default Feature;