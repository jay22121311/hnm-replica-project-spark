
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white z-50 border-b">
      <div className="container mx-auto px-4">
        {/* Top Banner */}
        <div className="hidden md:flex justify-center py-2 text-xs font-medium">
          <span>Members get free shipping above $40</span>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-3">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-initial text-center md:text-left">
            <Link to="/" className="text-2xl font-bold tracking-widest">
              H&amp;M
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            <a href="#" className="font-medium hover:text-hmred">Ladies</a>
            <a href="#" className="font-medium hover:text-hmred">Men</a>
            <a href="#" className="font-medium hover:text-hmred">Divided</a>
            <a href="#" className="font-medium hover:text-hmred">Baby</a>
            <a href="#" className="font-medium hover:text-hmred">Kids</a>
            <a href="#" className="font-medium hover:text-hmred">H&M HOME</a>
            <a href="#" className="font-medium hover:text-hmred">Sport</a>
            <a href="#" className="font-medium hover:text-hmred">Sustainability</a>
          </nav>

          {/* Header Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search size={20} />
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User size={20} />
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <Heart size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-hmred text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="py-2 hidden md:block">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products" 
              className="w-full py-2 pl-10 pr-4 bg-hmgray border-none rounded-none focus:outline-none focus:ring-0"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-20 pb-4 px-6 overflow-y-auto md:hidden animate-fade-in">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <X size={24} />
          </Button>
          
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Search products" 
              className="w-full py-3 pl-10 pr-4 bg-hmgray border-none rounded-none"
            />
            <Search className="absolute left-9 top-24 text-gray-500" size={18} />
          </div>
          
          <nav className="flex flex-col space-y-6">
            <a href="#" className="text-xl font-medium">Ladies</a>
            <a href="#" className="text-xl font-medium">Men</a>
            <a href="#" className="text-xl font-medium">Divided</a>
            <a href="#" className="text-xl font-medium">Baby</a>
            <a href="#" className="text-xl font-medium">Kids</a>
            <a href="#" className="text-xl font-medium">H&M HOME</a>
            <a href="#" className="text-xl font-medium">Sport</a>
            <a href="#" className="text-xl font-medium">Sustainability</a>
          </nav>
          
          <div className="mt-8 pt-6 border-t">
            <Link to="/login" className="flex items-center gap-2 py-3" onClick={toggleMenu}>
              <User size={20} />
              <span className="font-medium">My Account</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
