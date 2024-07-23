import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import crossIcon from "../../assets/images/icon-remove-item.svg"

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Sign Up");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login/register", error);
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
      <form onSubmit={onLogin} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={crossIcon} alt="Close" className="cursor-pointer w-6 h-6" />
        </div>
        <div className="space-y-4">
          {currState === "Login" ? null : (
            <input 
              name='name' 
              onChange={onChangeHandler} 
              value={data.name} 
              type="text" 
              placeholder='Your name' 
              required 
              className="w-full p-2 border border-gray-300 rounded"
            />
          )}
          <input 
            name='email' 
            onChange={onChangeHandler} 
            value={data.email} 
            type="email" 
            placeholder='Your email' 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input 
            name='password' 
            onChange={onChangeHandler} 
            value={data.password} 
            type="password" 
            placeholder='Password' 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded mt-4">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-center mt-4">
          <input type="checkbox" required className="mr-2" />
          <p className="text-sm">By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        <p className="mt-4 text-sm">
          {currState === "Login" ? (
            <>Create a new account? <span onClick={() => setCurrState("Sign Up")} className="text-blue-500 cursor-pointer">Click here</span></>
          ) : (
            <>Already have an account? <span onClick={() => setCurrState("Login")} className="text-blue-500 cursor-pointer">Login here</span></>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopUp;
