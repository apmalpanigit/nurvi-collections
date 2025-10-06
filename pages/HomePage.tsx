import React from "react";
import ProductList from "../components/ProductList";
import { useProducts } from "../context/ProductContext";
import { Link } from "react-router-dom";

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
  };

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
          Featured Products
        </h2>
        {renderContent()}
      </section>
    </div>
  );
};

export default HomePage;
