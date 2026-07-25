import { FlaskConical } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
        <FlaskConical className="w-6 h-6 text-primary" />
      </div>
      <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-full w-fit mb-2">
        {product.therapeutic_area}
      </span>
      <h3 className="text-lg font-bold text-dark mb-1">{product.name}</h3>
      <p className="text-xs text-slate-500 mb-3 font-medium">Formulation: {product.formulation}</p>
      <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
    </div>
  );
}