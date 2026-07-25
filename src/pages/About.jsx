import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark mb-4">About NovaPharma</h1>
        <p className="max-w-2xl mx-auto text-slate-600">
          For over two decades, NovaPharma has been at the forefront of medical innovation, dedicated to improving patient outcomes worldwide.
        </p>
      </div>

      <div className="prose lg:prose-lg max-w-none mb-16 text-slate-700">
        <p>
          Founded in 1998, NovaPharma began as a small research lab focused on cardiovascular treatments. Today, we have grown into a global pharmaceutical leader, operating state-of-the-art manufacturing facilities across four continents. Our commitment remains unchanged: to develop and deliver high-quality, affordable medicines that make a real difference in patients' lives.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
          <Target className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-slate-600 text-sm">To discover, develop, and deliver innovative medicines that help patients live longer, healthier lives.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
          <Eye className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-slate-600 text-sm">To be the most trusted and valued healthcare partner for patients, providers, and communities globally.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
          <Heart className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Values</h3>
          <p className="text-slate-600 text-sm">Integrity, transparency, and a patient-first approach guide every decision we make.</p>
        </div>
      </div>
    </div>
  );
}