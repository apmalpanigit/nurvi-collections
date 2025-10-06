
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products found in this category.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
