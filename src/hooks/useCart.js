import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = products =>{
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        // problem: not update incase of more than one of a product:
        if(products.length){
            const savedCart = getStoredCart();
            const savedProduct = [];
            for (const key in savedCart) {
                console.log(key, savedCart[key])
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
        }
        
    }, [products])
    
    return [cart, setCart];
}

export default useCart;