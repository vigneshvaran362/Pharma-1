import posts from '../data/blog.json';
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
}