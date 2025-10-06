import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-gray-500">
          &copy; {currentYear} Nurvi-Collections. All rights reserved. Developed
          by Akshay Malpani.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
