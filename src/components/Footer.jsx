import { Link } from 'react-router-dom';
import { Pill, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
            <Pill className="w-6 h-6 text-secondary" />
            NovaPharma
          </Link>
          <p className="text-sm">Advancing global health through innovative pharmaceutical solutions since 1998.</p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link to="/manufacturing" className="hover:text-secondary">Manufacturing</Link></li>
            <li><Link to="/products" className="hover:text-secondary">Products</Link></li>
            <li><Link to="/blog" className="hover:text-secondary">Blog & News</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-secondary">Terms of Service</a></li>
            <li><a href="#" className="hover:text-secondary">Compliance</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 text-secondary" /> 450 Global Pkwy, Boston, MA</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" /> info@novapharma.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} NovaPharma Inc. All rights reserved.
      </div>
    </footer>
  );
}