import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link as LinkRouter, useNavigate} from "react-router-dom";
import { AuthenticationActions, forgotPassword, loginUser } from '../store/AuthenticationSlice';
import Alert from './Alert.jsx';
import { getUsers } from '../store/userSlice.js';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loginData , error, success , loading ,token,refreshToken ,userId} = useSelector(state => state.Authentication);
  const userState = useSelector(state => state.users);
  console.log(userState);
 
  const handleChange = (e) => {
    const {name, value}  = e.target;
    dispatch(AuthenticationActions.setLoginData({name,value}));
  };
  console.log("userId :", userId);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

  useEffect(() => {
    dispatch(getUsers());
  },[])

  useEffect(() => {
   if (success) {
      if (token && refreshToken && userId) {
        // Set tokens in local storage only after successful login
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('userId', userId);
        navigate("/"); // Navigate to home only after success
      }
    }
    if(userId){
      localStorage.setItem('userId', userId);
    }
  }, [success, token, refreshToken, navigate]);
  console.log(localStorage.getItem('userId')); 
  const handleForgetPassword = () => {
    dispatch(forgotPassword(userId || localStorage.getItem('userId')));
  }

  return (
    <section className='container w-1/2 p-5 m-auto pt-20'>
        <h2 className='font-bold text-center text-3xl font-sans '>Login to Roomify</h2>
            <form action="" className='p-8 flex flex-col gap-4 justify-center' onSubmit={handleSubmit}>
                <label htmlFor="email" className='font-semibold font-sans'>Email:</label>
                <input name='email' type="email" placeholder='Enter Your Email here' className='border border-gray-light rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue' onChange={handleChange} value={loginData.email} />
                <label htmlFor="password" className='font-semibold font-sans'>Password:</label>
                <input name='password' type="password" placeholder='Enter Your Password here' className='border border-gray-light rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue'  onChange={handleChange} value={loginData.password} />
                <p className='text-xs font-bold text-blue text-right cursor-pointer' onClick={handleForgetPassword}>Forget Password ??</p>
                <input type="submit" value={loading ? "Loading..." : "Login"} className='bg-dark-blue text-white p-2 rounded-xl cursor-pointer' />
            </form>
            <p className='px-8 text-sm '>Don't Have Account ? <LinkRouter to="/sign-up" className='text-dark-blue '>Sign Up</LinkRouter></p>
           
            {
              error && <Alert/>
            }
    </section>
  )
}

export default Login