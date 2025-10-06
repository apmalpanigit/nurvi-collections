
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <HashRouter>
          <div className="bg-gray-50 min-h-screen flex flex-col font-sans text-gray-800">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:category" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
