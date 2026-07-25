import { useState } from 'react';
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
}