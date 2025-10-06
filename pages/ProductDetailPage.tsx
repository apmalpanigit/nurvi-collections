
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { PlusIcon } from '../components/Icons';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id || '', 10));

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.imageUrls[0]);
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (loading) {
    return <div className="text-center py-20">Loading product details...</div>;
  }
  
  if (error) {
      return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <Link to="/" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">
          &larr; Back to shop
        </Link>
      </div>
    );
  }
  
  if (!selectedImage || !selectedColor) {
      // This will show briefly while the useEffect sets the state
      return <div className="text-center py-20">Initializing...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:grid md:grid-cols-2">
        {/* Image Gallery Section */}
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
                className={`relative aspect-w-1 aspect-h-1 rounded-md overflow-hidden transition-transform duration-200 ${selectedImage === imgUrl ? 'ring-2 ring-indigo-500 ring-offset-2' : 'hover:scale-105'}`}
                aria-label={`View image ${index + 1} of ${product.name}`}
              >
                <img 
                  src={imgUrl} 
                  alt={`${product.name} thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover object-center" 
                />
                 {selectedImage !== imgUrl && <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors"></div>}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Details Section */}
        <div className="p-8 flex flex-col justify-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            {product.subcategory}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{product.name}</h1>
          <p className="text-gray-600 mt-4 text-lg">{product.description}</p>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Choose Color</h3>
            <div className="flex items-center space-x-3 mt-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`block h-8 w-8 rounded-full border border-gray-300 shadow-sm transition-all duration-200 ${selectedColor === color ? 'ring-2 ring-offset-2 ring-indigo-500' : 'hover:scale-110'}`}
                  style={{ backgroundColor: color }}
                  title={color}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-4xl font-extrabold text-gray-900">${product.price.toFixed(2)}</span>
            <button
              onClick={() => addToCart(product, selectedColor)}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
