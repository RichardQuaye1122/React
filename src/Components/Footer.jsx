import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">QUAYE'S HAVEN</h3>
            <p className="text-gray-400">
              Your trusted destination for quality products and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+233 541 371 336</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@quayeshaven.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} QUAYE'S HAVEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;