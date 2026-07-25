import { Factory, FlaskRound, ShieldCheck, Leaf } from 'lucide-react';

export default function Manufacturing() {
  return (
    <div className="bg-white">
      <div className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Global Manufacturing Capabilities</h1>
          <p className="text-blue-100 max-w-2xl">
            Our manufacturing network is designed for scale, precision, and compliance. We produce over 2 billion doses annually across our global facilities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">State-of-the-Art Facilities</h2>
            <p className="text-slate-600 mb-4">
              Our facilities in the US, Europe, and Asia are all FDA and EMA approved. We utilize continuous manufacturing processes and advanced robotics to ensure precision and sterility.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> cGMP Compliant</li>
              <li className="flex items-center gap-2"><FlaskRound className="w-5 h-5 text-primary" /> Advanced Sterile Fill-Finish</li>
              <li className="flex items-center gap-2"><Factory className="w-5 h-5 text-primary" /> High-Volume Solid & Liquid Dose</li>
            </ul>
          </div>
          <div className="bg-slate-100 h-80 rounded-lg flex items-center justify-center">
            <Factory className="w-32 h-32 text-slate-300" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded-lg flex items-center justify-center order-2 md:order-1">
            <Leaf className="w-32 h-32 text-slate-300" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-dark mb-4">Sustainable Production</h2>
            <p className="text-slate-600 mb-4">
              We are committed to reducing our environmental footprint. Our newest facility in Singapore operates entirely on renewable energy, and we have reduced water consumption by 35% across all sites through advanced recycling technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}