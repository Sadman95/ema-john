import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Form.css'

const SignIn = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div className="submit-form">
            <div className="form-style">
            <h1>Sign-In</h1>
            <form onSubmit="">
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" placeholder="Your Email" />
                <br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" placeholder="Your Password" />
                <br /><br />
                <button type="submit" className="btn-add">Sign In</button>
            </form>
            <p>New to ema-john?<Link to="/signup"> Create Account</Link></p>
            <p>-------Or Sign In Using---------</p>
            <button onClick={signInWithGoogle} className="btn-add">Google</button>
            </div>
        </div>
    );
};

export default SignIn;