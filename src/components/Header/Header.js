import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const basketIcon = <FontAwesomeIcon className="icon" icon={faShoppingBag}></FontAwesomeIcon>
    return (
        <div className="header">
            <div className="heading">
                {basketIcon}
                <img className="logo" src={logo} alt="" />
            </div>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/orders">Order Review</a></li>
                    <li><a href="/inventory">Manage Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;