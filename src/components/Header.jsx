import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <header className="bg-white shadow-m4 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>
      <div className="relative">
        <button
          className="cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaShoppingCart className="text-2xl text-gray-700" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex items-center justify-center   text-xs w-5 h-5  text-white bg-red-500 rounded-full">
              {itemCount}
            </span>
          )}
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-80 bg-white rounded shadow-lg border z-50">
            <div className="p-4">
              <h2 className="text-lg mb-2 font-semibold">Cart Items</h2>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Your cart is empty</p>
              ) : (
                <>
                  <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center py-2"
                      >
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                        <button
                          className="text-red-500 text-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between font-semibold mt-4">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                  <button
                    className="w-full bg-red-500 text-white py-2 px-4 rounded mt-4"
                    onClick={() => clearCart()}
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
