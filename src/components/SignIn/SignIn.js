import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router';
import './Form.css'

const SignIn = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleSignIn = () =>{
        signInWithGoogle()
        .then((result) =>{
            history.push(redirect_uri);
        })
    }

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
            <button onClick={handleSignIn} className="btn-add">Google</button>
            </div>
        </div>
    );
};

export default SignIn;