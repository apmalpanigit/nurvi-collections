
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { useProducts } from '../context/ProductContext';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { products, loading, error } = useProducts();

  const baseProducts = useMemo(() => products.filter(p => 
    category === 'clothes' ? true : p.category === category
  ), [category, products]);

  const [filters, setFilters] = useState({
    subcategory: 'all',
    material: 'all',
  });
  const [sortOrder, setSortOrder] = useState('default');

  const filterOptions = useMemo(() => {
    if (!baseProducts) return { subcategories: [], materials: [] };
    const subcategories = new Set<string>();
    const materials = new Set<string>();
    
    baseProducts.forEach(p => {
      subcategories.add(p.subcategory);
      materials.add(p.material);
    });

    return {
      subcategories: Array.from(subcategories).sort(),
      materials: Array.from(materials).sort(),
    };
  }, [baseProducts]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const displayedProducts = useMemo(() => {
    let filtered = [...baseProducts];

    if (filters.subcategory !== 'all') {
      filtered = filtered.filter(p => p.subcategory === filters.subcategory);
    }
    if (filters.material !== 'all') {
      filtered = filtered.filter(p => p.material === filters.material);
    }

    switch (sortOrder) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  }, [baseProducts, filters, sortOrder]);
  
  const resetFilters = () => {
    setFilters({ subcategory: 'all', material: 'all' });
    setSortOrder('default');
  };

  const categoryTitle = category === 'clothes' ? 'All Collections' : 
    category ? category.charAt(0).toUpperCase() + category.slice(1) + "'s Collection" : "Products";

  const renderContent = () => {
    if (loading) {
        return <div className="text-center py-10">Loading products...</div>;
    }
    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }
    return <ProductList products={displayedProducts} />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{categoryTitle}</h1>
      
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-sm mb-8 sticky top-20 z-40 border border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            
            <div className="col-span-1">
                <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
                <select id="subcategory" name="subcategory" value={filters.subcategory} onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="all">All</option>
                    {filterOptions.subcategories.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                </select>
            </div>
            
             <div className="col-span-1">
                <label htmlFor="material" className="block text-sm font-medium text-gray-700">Material</label>
                <select id="material" name="material" value={filters.material} onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="all">All</option>
                    {filterOptions.materials.map(mat => <option key={mat} value={mat}>{mat}</option>)}
                </select>
            </div>
            
            <div className="col-span-1">
                <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700">Sort By</label>
                <select id="sortOrder" name="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
             
            <div className="col-span-1 flex items-end h-full">
                 <button onClick={resetFilters} className="w-full h-10 px-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors rounded-md border border-gray-300 hover:bg-gray-50">
                     Reset
                 </button>
            </div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default ProductsPage;
