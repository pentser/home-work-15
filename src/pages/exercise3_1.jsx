


import { useLocation } from 'react-router-dom';
import "./pages.css";

function Exercise3_1() {



 const location=useLocation();
  const { cart_ar } = location.state || {};  



  const total = cart_ar.reduce((acc, cart) => acc + cart.price, 0);

  const handleBuy = () => {
    alert('Purchasing items...');
    // Put your purchasing logic here
    cart_ar=[];
    
  };

  return (
    <div className="flex max-w-sm border border-gray-500 p-4">
      {/* LEFT SIDE: Cart Title */}
      <div className="mr-4 flex-none">
        <h2 className="m-0 text-2xl font-bold">
          Cart <span role="img" aria-label="cart">🛒</span>
        </h2>
      </div>
      
      {/* RIGHT SIDE: Items & Actions */}
      <div className="flex-1 border-l border-gray-300 pl-4">
        {/* Items list */}
        {cart_ar.map((cart, idx) => (
          <div
            key={idx}
            className="mb-2 flex justify-between rounded bg-blue-500 p-2 text-white"
          >
            <div>{cart.name}</div>
            <div>{cart.price}</div>
          </div>
        ))}

        {/* Total */}
        <h3 className="my-4 text-lg font-semibold">
          Total = {total}
        </h3>

        {/* Buy Button */}
        <button
          onClick={handleBuy}
          className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Exercise3_1;


