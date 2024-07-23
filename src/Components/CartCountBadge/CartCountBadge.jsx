import  { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const CartCountBadge = () => {
   const {cartItems} = useContext(StoreContext)
  const cartSize = Object.keys(cartItems).length;
  
  const itemCount = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`${cartSize} absolute top-0 right-0 bg-orange-500 text-white rounded-full flex items-center justify-center`}>
      {itemCount}
    </div>
  );
};

export default CartCountBadge;
