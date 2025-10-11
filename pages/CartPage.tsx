import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  WhatsAppIcon,
} from "../components/Icons";
import { WHATSAPP_PHONE_NUMBER } from "../constants";
import type { CartItem } from "../types";

// Define the CartItemRow component inside the same file but outside the main component
const CartItemRow: React.FC<{ item: CartItem }> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <img
        src={item.imageUrls[0]}
        alt={item.name}
        className="h-24 w-24 rounded-md object-cover"
      />
      <div className="ml-4 flex-grow">
        <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
        <p className="text-gray-500">₹{item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-full text-gray-500 hover:bg-gray-200"
        >
          <MinusIcon className="h-5 w-5" />
        </button>
        <span className="w-10 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-full text-gray-500 hover:bg-gray-200"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="w-24 text-right font-semibold">
        ₹{(item.price * item.quantity).toFixed(2)}
      </div>
      <div className="ml-4">
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-red-500 hover:text-red-700"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

const CartPage: React.FC = () => {
  const { cartItems, totalPrice, cartCount } = useCart();

  const handleCheckout = () => {
    const header = `Hello Nurvi-Collections! \n I'd like to place an order for the following items:\n\n`;
    const itemsText = cartItems
      .map(
        (item) =>
          `- ${item.name} (ID: ${item.id}, (x${item.quantity}) - ₹${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");
    const footer = `\n\n*Total: ₹${totalPrice.toFixed(2)}*`;
    const message = encodeURIComponent(header + itemsText + footer);
    window.open(
      `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  if (cartCount === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="mt-2 text-gray-500">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
      <div>
        {cartItems.map((item) => (
          <CartItemRow key={`${item.id}`} item={item} />
        ))}
      </div>
      <div className="mt-8 flex flex-col items-end">
        <div className="text-2xl font-bold">
          <span>Total: </span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          Shipping & taxes calculated at checkout.
        </p>
        <button
          onClick={handleCheckout}
          className="mt-6 w-full md:w-auto inline-flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-all hover:scale-105"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Checkout on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default CartPage;
