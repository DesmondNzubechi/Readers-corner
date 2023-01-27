import React from "react";
 import { ReactDOM } from "react";
import './Register.css';
import { Link, Outlet } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineMail} from "react-icons/ai";
import { BiUserCheck } from 'react-icons/bi';
import { RiEmpathizeFill, RiLockPasswordFill } from 'react-icons/ri';
import { BsCalendar2DateFill, BsFillCalendarDateFill, BsFillTelephonePlusFill} from 'react-icons/bs';

 const SignUpPage = () => {
    return(
        <React.Fragment>
        
            <div className="formy" >
                <div className="signHere">
                    <h1>Sign Up Here</h1>
                </div>
                <div className="form">
               <div className="signUpForm">
                <form>
                    <div>
                        <label ><AiOutlineUserAdd className="icon"/> First Name :</label>
                        <input  type='text' placeholder='' /></div>
                    <div>
                    <label ><BiUserCheck className="icon"/>Last Name:</label> <input type='text' placeholder='' /></div>
                    <div> 
                    <label ><AiOutlineMail className="icon"/> Email Adress: </label> <input type='email' placeholder='' /></div>
                    <div> 
                    <label ><BsFillTelephonePlusFill className="icon" />     Mobile No :</label><input type='tel' placeholder='' /></div>
                   <div>
                   <label ><BsFillCalendarDateFill className="icon"/> Date of birth:</label>
                    <input type='date' placeholder='' /></div>
                    <div>
                   <label >< RiLockPasswordFill className="icon"/>Password :</label>
                   <input type='password'  placeholder='' /></div>
                   <div> 
                   <label >< RiLockPasswordFill className="icon"/>Confirm Password :</label>
                    <input type='password' placeholder='' /></div>
                  
                    <button className="signU" type="submit">Sign Up</button>
                  
                 
                    <p className="Already">Already have an account < Link  className="link" to='/signIn'>Sign in</Link></p>
                  
                </form>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
 }

 export default SignUpPage;