import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingBagIcon } from "./Icons";

const Header: React.FC = () => {
  const { cartCount } = useCart();

  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `text-lg font-medium transition-colors duration-200 ${
      isActive ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-3xl font-bold text-gray-900 tracking-tight"
          >
            Nurvi <span className="text-indigo-600">Collections</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/products/mens" className={navLinkClass}>
              Men's
            </NavLink>
            <NavLink to="/products/womens" className={navLinkClass}>
              Women's
            </NavLink>
            <NavLink to="/products/kids" className={navLinkClass}>
              Kid's
            </NavLink>
          </nav>
          <div className="flex items-center">
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ShoppingBagIcon className="h-7 w-7" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
