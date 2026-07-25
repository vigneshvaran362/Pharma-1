const fs = require('fs');
const path = require('path');

const files = {
  'package.json': `{
  "name": "pharma-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.378.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.0"
  }
}`,
  'vite.config.js': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`,
  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005eb8',
        secondary: '#00a0e3',
        dark: '#0f172a',
      }
    },
  },
  plugins: [],
}`,
  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
  'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NovaPharma | Global Healthcare Solutions</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-slate-50 text-slate-800 font-sans antialiased;
}`,
  'src/main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)`,
  'src/App.jsx': `import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Manufacturing from './pages/Manufacturing';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;`,
  'src/data/products.json': `[
  {
    "id": 1,
    "name": "Cardizem-AR",
    "therapeutic_area": "Cardiology",
    "formulation": "Tablet",
    "description": "Beta-blocker for managing hypertension and preventing angina."
  },
  {
    "id": 2,
    "name": "NeuroCalm",
    "therapeutic_area": "Neurology",
    "formulation": "Capsule",
    "description": "GABAergic agent designed for generalized anxiety disorder management."
  },
  {
    "id": 3,
    "name": "OncoShield-50",
    "therapeutic_area": "Oncology",
    "formulation": "Injectable",
    "description": "Targeted therapy for reducing tumor recurrence in breast cancer."
  },
  {
    "id": 4,
    "name": "BactaKill",
    "therapeutic_area": "Infectious Diseases",
    "formulation": "Syrup",
    "description": "Broad-spectrum antibiotic for pediatric respiratory infections."
  },
  {
    "id": 5,
    "name": "GlucoStable",
    "therapeutic_area": "Endocrinology",
    "formulation": "Tablet",
    "description": "Extended-release metformin for Type 2 diabetes glycemic control."
  },
  {
    "id": 6,
    "name": "ImmunoBoost-C",
    "therapeutic_area": "Immunology",
    "formulation": "Capsule",
    "description": "High-dose Vitamin C and Zinc supplement for immune system support."
  }
]`,
  'src/data/blog.json': `[
  {
    "id": 1,
    "title": "Advancing R&D in Oncology: Our 2024 Pipeline Update",
    "date": "May 12, 2024",
    "author": "Dr. Sarah Jenkins",
    "category": "R&D Updates",
    "excerpt": "An inside look at our latest clinical trials and the future of targeted oncology therapies.",
    "content": "As we move into 2024, our commitment to oncology research remains steadfast. This article details the Phase III trial results for OncoShield-50 and outlines our upcoming pipeline focusing on CAR-T cell therapies..."
  },
  {
    "id": 2,
    "title": "Sustainable Manufacturing: A Net-Zero Future",
    "date": "April 28, 2024",
    "author": "Mark Chen",
    "category": "Manufacturing",
    "excerpt": "How our new solar-powered facility in Singapore is reducing our carbon footprint by 40%.",
    "content": "Pharmaceutical manufacturing requires immense energy. We recently inaugurated our new net-zero facility in Singapore, utilizing advanced solar grids and water recycling systems to minimize environmental impact..."
  },
  {
    "id": 3,
    "title": "Global Health: Expanding Access to Pediatric Care",
    "date": "April 10, 2024",
    "author": "Elena Rodriguez",
    "category": "Company News",
    "excerpt": "NovaPharma partners with WHO to distribute BactaKill syrup to underserved regions.",
    "content": "Access to healthcare is a fundamental right. Our new partnership with the World Health Organization aims to distribute 5 million units of BactaKill to regions heavily affected by pediatric respiratory diseases..."
  }
]`,
  'src/components/Layout.jsx': `import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}`,
  'src/components/Navbar.jsx': `import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Pill } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    \`text-sm font-medium transition-colors hover:text-secondary \${isActive ? 'text-secondary' : 'text-slate-600'}\`;

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
}`,
  'src/components/Footer.jsx': `import { Link } from 'react-router-dom';
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
}`,
  'src/components/ProductCard.jsx': `import { FlaskConical } from 'lucide-react';

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
}`,
  'src/components/BlogCard.jsx': `import { Calendar, User } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <article className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-6">
        <span className="text-white font-bold text-lg text-center">{post.category}</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
          <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
        </div>
        <h3 className="text-lg font-bold text-dark mb-2">{post.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
        <button className="text-sm font-semibold text-primary hover:text-secondary self-start">
          Read More →
        </button>
      </div>
    </article>
  );
}`,
  'src/pages/Home.jsx': `import { Link } from 'react-router-dom';
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
}`,
  'src/pages/About.jsx': `import { Target, Eye, Heart } from 'lucide-react';

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
}`,
  'src/pages/Manufacturing.jsx': `import { Factory, FlaskRound, ShieldCheck, Leaf } from 'lucide-react';

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
}`,
  'src/pages/Products.jsx': `import { useState, useMemo } from 'react';
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
}`,
  'src/pages/Blog.jsx': `import posts from '../data/blog.json';
import BlogCard from '../components/BlogCard';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-dark mb-4">News & Insights</h1>
        <p className="text-slate-600">Latest updates from our R&D labs, manufacturing floors, and global initiatives.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}`,
  'src/pages/Contact.jsx': `import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import products from '../data/products.json';

export default function Contact() {
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      setResult("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">Get In Touch</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Interested in partnering with us or have questions about our products? Reach out to our business development team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-dark">Headquarters</h3>
                <p className="text-sm text-slate-600 mt-1">450 Global Pkwy, Boston, MA 02108, USA</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-dark">Phone</h3>
                <p className="text-sm text-slate-600 mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-dark">Email</h3>
                <p className="text-sm text-slate-600 mt-1">partnerships@novapharma.com</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-slate-100">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    name="company_name" 
                    required 
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Interested Products</label>
                <select 
                  name="interested_product" 
                  required 
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select a product...</option>
                  {products.map(p => (
                    <option key={p.id} value={p.name}>{p.name} ({p.therapeutic_area})</option>
                  ))}
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  required 
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-secondary transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'} <Send className="w-4 h-4" />
              </button>

              {result && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-md border border-green-200">
                  <CheckCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">{result}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}`
};

// Create files and directories
Object.keys(files).forEach(filePath => {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, files[filePath].trim());
  console.log(`Created: ${filePath}`);
});

console.log('\n✅ All files generated successfully!');
console.log('Next steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev'); 
