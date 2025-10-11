import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { PlusIcon } from "../components/Icons";
import ShareButton from "../components/ShareButton";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id || "", 10));
  const productUrl = `${window.location.origin}/product/${product?.id}`;
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (product) setSelectedImage(product.imageUrls[0]);
  }, [product]);

  if (loading)
    return <div className="text-center py-20">Loading product details...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <Link
          to="/"
          className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
        >
          &larr; Back to shop
        </Link>
      </div>
    );
  }

  if (!selectedImage) {
    // This will show briefly while the useEffect sets the state
    return <div className="text-center py-20">Initializing...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:grid md:grid-cols-2">
        {/* Image gallery */}
        <div className="p-4 md:p-6">
          <div className="aspect-w-1 aspect-h-1 w-full bg-gray-100 rounded-lg overflow-hidden shadow-inner">
            <img
              className="h-full w-full object-cover object-center transition-opacity duration-300"
              src={selectedImage}
              alt={product.name}
            />
          </div>
          <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-2">
            {product.imageUrls.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(imgUrl)}
                className={`relative aspect-w-1 aspect-h-1 rounded-md overflow-hidden transition-transform duration-200 ${
                  selectedImage === imgUrl
                    ? "ring-2 ring-indigo-500 ring-offset-2"
                    : "hover:scale-105"
                }`}
                aria-label={`View image ${index + 1} of ${product.name}`}
              >
                <img
                  src={imgUrl}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                {selectedImage !== imgUrl && (
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product details */}
        <div className="p-8 flex flex-col justify-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            {product.subcategory}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {product.name}
          </h1>
          <p className="text-gray-600 mt-4 text-lg">{product.description}</p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              ₹{product.price.toFixed(2)}
            </span>

            <div className="flex flex-wrap justify-start sm:justify-end gap-3">
              <ShareButton
                title={product.name}
                text={`Check out this product: ${product.name}`}
                url={productUrl}
              />
              <button
                onClick={() => addToCart(product)}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PlusIcon className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
