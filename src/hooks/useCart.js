import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () =>{
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        const savedCart = getStoredCart();
        // console.log(savedCart);
        const savedKeys = Object.keys(savedCart);
        fetch('http://localhost:5000/products/byKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(savedKeys)
        })
        .then(res => res.json())
        .then(products => {
        // problem: not update incase of more than one of a product:
        if(products.length){            
            const savedProduct = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key])
                const matchedProducts = products.find(product => product.key === key);
                // console.log(matchedProducts)
                if(matchedProducts){
                    const quantity = savedCart[key];
                    // console.log(quantity)
                    matchedProducts.quantity = quantity;
                    // console.log(matchedProducts)
                    savedProduct.push(matchedProducts);
                }           
            }
            setCart(savedProduct);
        }}
        )
        
        
    }, [])
    
    return [cart, setCart];
}

export default useCart;