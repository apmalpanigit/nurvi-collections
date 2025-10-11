import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingBagIcon } from "./Icons";

const Header: React.FC = () => {
  const { cartCount } = useCart();

  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `text-base sm:text-lg font-medium transition-colors duration-200 ${
      isActive ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-friendly flex layout */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:h-20">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight"
            >
              Nurvi <span className="text-indigo-600">Collections</span>
            </Link>

            {/* Cart icon (visible on all screens) */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors sm:hidden"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Nav links + desktop cart */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-3 sm:mt-0">
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <NavLink to="/products/mens" className={navLinkClass}>
                Men's
              </NavLink>
              <NavLink to="/products/womens" className={navLinkClass}>
                Women's
              </NavLink>
              <NavLink to="/products/kids" className={navLinkClass}>
                Kid's
              </NavLink>
              <NavLink to="/products/jewellery" className={navLinkClass}>
                Jewellery
              </NavLink>
            </nav>

            {/* Desktop cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors hidden sm:inline-flex"
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
