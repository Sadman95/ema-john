import React from 'react';
import Feature from './Feature/Feature';
import './Features.css';

const Features = (porps) => {
    const features = porps.features;
    return (
        <div className="featureStyle">
            <h2 className="featureTitle">Features</h2>
            {
                features.map(feature => <Feature feature={feature}></Feature>)
            }
            
        </div>
    );
};

export default Features;