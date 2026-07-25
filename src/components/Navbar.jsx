import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Pill } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-slate-600'}`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
            <Pill className="w-6 h-6" />
            NovaPharma
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/manufacturing" className={navLinkClass}>Manufacturing</NavLink>
            <NavLink to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-primary">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col space-y-3">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClass} end>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={navLinkClass}>About Us</NavLink>
            <NavLink to="/manufacturing" onClick={() => setIsOpen(false)} className={navLinkClass}>Manufacturing</NavLink>
            <NavLink to="/products" onClick={() => setIsOpen(false)} className={navLinkClass}>Products</NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)} className={navLinkClass}>Blog</NavLink>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium text-center">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}