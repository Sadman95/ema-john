import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    const basketIcon = <FontAwesomeIcon className="icon" icon={faShoppingBag}></FontAwesomeIcon>
    return (
        <div className="header">
            <div className="heading">
                {basketIcon}
                <img className="logo" src={logo} alt="" />
            </div>
            <nav className="nav">
                <ul className="menu">
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/review">Order Review</Link></li>
                    <li><Link to="/inventory">Manage Inventory</Link></li>
                    {
                        user.email ? 
                        <div className="name-logout">
                            <button className="btn-add" onClick={logOut}>Log Out</button>
                            <span>{user.displayName} </span>
                        </div>
                        :
                        <li><Link to="/signin">Sign In</Link></li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;