import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
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
    // placeorder handler:
    const history = useHistory();
    const handlePlaceOrder = () =>{
        // setCart([]);
        clearTheCart();
        history.push('/placeorder');
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
                    <button onClick={handlePlaceOrder} className="btn-add">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;