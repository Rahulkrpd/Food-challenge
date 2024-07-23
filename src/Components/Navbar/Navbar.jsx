import  { useState, useContext } from 'react';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../CartCountBadge/CartCountBadge";
import LoginPopUp from '../LoginPopUp/LoginPopUp';
import CartPopup from '../Cart/CartPopUp';
import { StoreContext } from '../context/StoreContext';
import { Navigate } from 'react-router-dom';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(StoreContext);

  const cartHandler=()=>{
    
    setShowCart(true)
  }

  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-medium">Dessert</h1>

          <div className="relative w-full max-w-[500px] mx-5 flex items-center">
            <input className="bg-[#f2f2f5] border-none outline-none px-6 py-3 rounded-full w-full" type="text" placeholder="Search Products..." />
            <IoIosSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20} />
          </div>

          <div className="flex gap-4">
            <div className="icon_wrapper" onClick={() => setShowLogin(true)}>
              <AiOutlineUser />
            </div>
            <div className="icon_wrapper relative" onClick={cartHandler}>
              <AiOutlineShoppingCart />
              {/* {Object.keys(cartItems).length > 0 && <CartCountBadge size="w-[25px] h-[25px]" />} */}
            </div>
          </div>
        </div>
      </div>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      {showCart && <CartPopup setShowCart={setShowCart} />}
    </div>
  );
};

export default Navbar;
