import React from 'react';
import Feature from './Feature/Feature';
import './Features.css';

const Features = (props) => {
    const features = props.features;
    return (
        <div className="featureStyle">
            <h2 className="featureTitle">Features</h2>
            {
                features.map((feature, i) => <Feature key={i} feature={feature}></Feature>)
            }
            
        </div>
    );
};

export default Features;