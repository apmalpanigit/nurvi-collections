
import React from 'react';
import ProductList from '../components/ProductList';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { products, loading, error } = useProducts();

  const renderContent = () => {
    if (loading) {
      return <div className="text-center py-10">Loading products...</div>;
    }
    if (error) {
      return <div className="text-center py-10 text-red-500">{error}</div>;
    }
    return <ProductList products={products} />;
  }

  return (
    <div className="space-y-12">
      <div className="relative bg-indigo-100 rounded-lg p-8 md:p-12 text-center overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 tracking-tight">
            Discover Your Style
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-700">
            Explore our curated collection of modern and timeless fashion pieces. Quality and style, delivered.
          </p>
          <Link 
            to="/products/clothes"
            className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105"
          >
            Shop All Collections
          </Link>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Featured Products</h2>
        {renderContent()}
      </section>
    </div>
  );
};

export default HomePage;
