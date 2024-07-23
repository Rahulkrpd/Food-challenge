import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import crossIcon from "../../assets/images/icon-remove-item.svg";
import emptyCart from "../../assets/images/illustration-empty-cart.svg";

const CartPopup = ({ setShowCart }) => {
  const { cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity } = useContext(StoreContext);

  const totalPrice = Object.keys(cartItems).reduce((total, itemId) => {
    const item = cartItems[itemId];
    if (item && item.price && item.quantity) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);

  const cartIsEmpty = Object.keys(cartItems).length === 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 p-4 sm:p-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold">Cart</h2>
          <img onClick={() => setShowCart(false)} src={crossIcon} alt="Close" className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        {cartIsEmpty ? (
          <div className="flex flex-col items-center justify-center">
            <img src={emptyCart} alt="Empty Cart" className="w-16 h-16 sm:w-24 sm:h-24 mb-4" />
            <p className="text-base sm:text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div>
            {Object.keys(cartItems).map(itemId => {
              const item = cartItems[itemId];
              if (!item || !item.image || !item.name || typeof item.price === 'undefined' || typeof item.quantity === 'undefined') {
                console.error("Invalid item structure:", item);
                return null;
              }
              return (
                <div key={itemId} className="flex items-center mb-4">
                  <img src={item.image.thumbnail} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded" />
                  <div className="flex-grow ml-2 sm:ml-4">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price ? item.price.toFixed(2) : 'N/A'} x {item.quantity || 0} = ${item.price ? (item.price * (item.quantity || 0)).toFixed(2) : 'N/A'}
                    </p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => decreaseQuantity(itemId)} className="px-2 py-1 border border-gray-400 rounded">-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(itemId)} className="px-2 py-1 border border-gray-400 rounded">+</button>
                      <button onClick={() => removeItemFromCart(itemId)} className="px-2 py-1 ml-2 sm:ml-4 bg-red-500 text-white rounded">Remove</button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mt-4 flex justify-between items-center font-bold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
