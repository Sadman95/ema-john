import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    const history = useHistory();

    useEffect(()=>{
        fetch(`http://localhost:5000/products/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage?.getItem('idToken')}`
            }
        })
        .then(res => {
            if(res.status === 200){
                return res.json();
            }
            else if(res.status === 401){
                history.push('/signin')
            }
        })
        .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h1>Orders Available: {orders.length}</h1>
        </div>
    );
};

export default Orders;