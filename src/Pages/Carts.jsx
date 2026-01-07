import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Carts = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/products')}
        className="mb-6 text-blue-600 hover:text-blue-700 flex items-center gap-2"
      >
        ← Continue Shopping
      </button>

      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-xl mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
                <div className="bg-gray-100 w-20 h-20 rounded flex items-center justify-center text-3xl">
                  {item.image}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="font-bold text-lg">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carts;