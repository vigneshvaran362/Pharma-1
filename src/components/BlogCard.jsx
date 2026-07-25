import { Calendar, User } from 'lucide-react';

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
}