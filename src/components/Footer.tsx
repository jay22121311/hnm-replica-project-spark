
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container px-4 mx-auto">
        {/* Newsletter */}
        <div className="mb-12 max-w-xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Sign up for our newsletter</h3>
          <p className="mb-6 text-sm">
            Sign up now and be the first to know about exclusive offers, latest fashion news, and styling tips.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 border border-gray-300 p-3 focus:outline-none"
            />
            <button className="bg-black text-white px-4 flex items-center">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Women</a></li>
              <li><a href="#" className="hover:underline">Men</a></li>
              <li><a href="#" className="hover:underline">Kids</a></li>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Sport</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">CORPORATE INFO</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Digrwear</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Customer Service</a></li>
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Store Locator</a></li>
              <li><a href="#" className="hover:underline">Legal & Privacy</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">CONNECT WITH US</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 pt-6 border-t">
          <p>The content of this site is copyright-protected and is the property of Digrwear Inc.</p>
          <p className="mt-2">Digrwear's business concept is to offer fashion and quality at the best price in a sustainable way.</p>
          <p className="mt-2">© Digrwear 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
