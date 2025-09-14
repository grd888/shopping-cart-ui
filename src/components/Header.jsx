import { useCart } from "../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white shadow-m4 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>
      <div className="relative">
        <FaShoppingCart className="text-2xl text-gray-700" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center   text-xs w-5 h-5  text-white bg-red-500 rounded-full">
            {itemCount}
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;
