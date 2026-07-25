import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, Microscope, ShieldCheck } from 'lucide-react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pioneering Tomorrow's Healthcare Solutions
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              From research to manufacturing, NovaPharma is dedicated to delivering high-quality, life-saving pharmaceuticals globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-white text-primary px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Scale</h3>
            <p className="text-slate-600 text-sm">Operating in over 50 countries with certified manufacturing facilities worldwide.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">R&D Innovation</h3>
            <p className="text-slate-600 text-sm">Investing 20% of annual revenue back into cutting-edge pharmaceutical research.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
            <p className="text-slate-600 text-sm">FDA and EMA compliant processes ensuring the highest safety standards.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-dark">Featured Products</h2>
              <p className="text-slate-600 mt-2">A selection of our key pharmaceutical formulations.</p>
            </div>
            <Link to="/products" className="text-primary font-semibold hidden md:flex items-center gap-2 hover:text-secondary">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}