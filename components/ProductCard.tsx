import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { PlusIcon } from "./Icons";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Add the product with the first available color by default
    if (product.colors && product.colors.length > 0) {
      addToCart(product, product.colors[0]);
    } else {
      // Fallback for products without colors, though the data structure implies they exist
      console.warn(
        "Product has no colors, cannot add to cart with color preference."
      );
    }
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1 bg-gray-200">
          <img
            src={product.imageUrls[0]}
            alt={product.name}
            className="w-full h-full object-center object-cover group-hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 capitalize">
            {product.category}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4 flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900">
          ₹ {product.price.toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          className="inline-flex items-center justify-center p-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="h-5 w-5" />
          <span className="sr-only">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
