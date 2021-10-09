import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="submit-form">
            <div className="form-style">
            <h1>Sign-Up</h1>
            <form onSubmit="">
                <label htmlFor="name">Name</label><br />
                <input type="name" name="name" id="name" placeholder="Your Name" />
                <br /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" placeholder="Your Email" />
                <br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" placeholder="Your Password" />
                <br /><br />
                <label htmlFor="password">Re-Enter Password</label><br />
                <input type="password" name="password" id="password" placeholder="Re-Enter Your Password" />
                <br /><br />
                <button type="submit" className="btn-add">Sign Up</button>
            </form>
            <p>Already have an account?<Link to="/signin"> Sign In</Link></p>
            
            <div>-------Or Sign Up Using---------</div>
            <br />
            <button className="btn-add">Google</button>
            </div>
        </div>
    );
};

export default SignUp;