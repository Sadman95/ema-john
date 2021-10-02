import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {

    const [products] = useProducts()
    const [cart, setCart] = useCart(products)

    const handleRemove = key =>{
        const removeProduct = cart.filter(product => product.key !== key);
        setCart(removeProduct);
        deleteFromDb(key)
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    cart.map(product => <ReviewItem handleRemove={handleRemove} key={product.key} product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/placed">
                    <button className="btn-add">Place Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;