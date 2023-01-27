import React from "react";
import { Link } from "react-router-dom";
import './Register.css';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';

const SignIn = () => {
    return(
        <div className="signin">
                <form>
                <div className="signHere">
                    <h1>Sign In Here</h1>
                </div>
                    <div>
                        <label for='Email'><AiOutlineMail className="icon"/> Email:</label>
                        <input type="email" id="Email" required />
                    </div>
                    <div>
                        <label for='Password'> < RiLockPasswordFill className="icon"/> Password:</label>
                        <input type="Password" id="Password" required />
                    </div>
                    <button className=" signI" type="submit">Sign In</button>
                  
                    <p className="noAcct">Don't have an account yet  <Link className="signUpp" to='/signUp'>Sign Up</Link></p>
                </form>
            </div>
    )
};

export default SignIn;