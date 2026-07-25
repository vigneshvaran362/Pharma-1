import { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [area, setArea] = useState('All');
  const [formulation, setFormulation] = useState('All');

  const areas = useMemo(() => ['All', ...new Set(products.map(p => p.therapeutic_area))], []);
  const formulations = useMemo(() => ['All', ...new Set(products.map(p => p.formulation))], []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      (area === 'All' || p.therapeutic_area === area) &&
      (formulation === 'All' || p.formulation === formulation)
    );
  }, [area, formulation]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-dark mb-4">Product Catalog</h1>
        <p className="text-slate-600">Browse our comprehensive range of pharmaceutical products.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center gap-2 text-slate-700 font-medium mr-4">
          <Filter className="w-5 h-5" /> Filter By:
        </div>
        
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-xs text-slate-500 mb-1">Therapeutic Area</label>
          <select 
            value={area} 
            onChange={(e) => setArea(e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          >
            {areas.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <label className="text-xs text-slate-500 mb-1">Formulation</label>
          <select 
            value={formulation} 
            onChange={(e) => setFormulation(e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          >
            {formulations.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-slate-500">
          No products match your selected filters.
        </div>
      )}
    </div>
  );
}