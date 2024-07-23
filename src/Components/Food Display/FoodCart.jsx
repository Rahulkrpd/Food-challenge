import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import decrement from "../../assets/images/icon-decrement-quantity.svg";
import increment from "../../assets/images/icon-increment-quantity.svg";

const FoodDisplay = () => {
  const { data, cartItems, handleAdd, handleRemove } = useContext(StoreContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative border border-transparent p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:border-2 hover:border-orange-600 hover:shadow-xl hover:z-5 hover:scale-105"
        >
          <div className="mb-5">
            <img src={item.image.mobile} alt={item.name} className="w-full h-50 object-cover rounded-md" />
          </div>

          {cartItems[item.id] && cartItems[item.id].quantity ? (
            <div className="flex items-center justify-center w-full mb-4">
              <div className="flex items-center justify-center w-1/2 border-1 border-gray-300 rounded-lg p-2 cursor-pointer bg-orange-400 hover:bg-orange-400 hover:border-orange-400 transition-colors duration-300 ease-in-out">
                <img
                  onClick={() => handleRemove(item.id)}
                  src={decrement}
                  alt="-"
                  className="w-3 h-3 mr-2 invert mx-4"
                />
                <span className="text-lg font-semibold text-gray-600">
                  {cartItems[item.id].quantity}
                </span>
                <img
                  onClick={() => handleAdd(item.id)}
                  src={increment}
                  alt="+"
                  className="w-3 h-3 ml-2 invert border-gray-400 mx-4 rounded-full"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full mb-4">
              <div
                onClick={() => handleAdd(item.id)}
                className="flex items-center justify-center w-1/2 border-2 border-gray-300 rounded-lg p-2 cursor-pointer bg-white hover:bg-orange-400 hover:border-orange-400 transition-colors duration-300 ease-in-out"
              >
                <img
                  src={cartIcon}
                  alt="Add to Cart"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-lg font-semibold text-gray-700 hidden sm:inline hover:text-white">
                  Add to Cart
                </span>
              </div>
            </div>
          )}

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-500 mb-2">{item.category}</p>
            <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodDisplay;
