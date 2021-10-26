import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url = 'http://localhost:5000/products';
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data.products))
    } ,[])

    return [products];
}

export default useProducts;