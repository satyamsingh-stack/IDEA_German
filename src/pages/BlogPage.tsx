import { useState, useEffect } from 'react';
import { Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { loadContent, formatDate, getExcerpt, getCategories } from '../utils/contentLoader';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  featured_image?: string;
  slug: string;
  content: string;
}

export const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const posts = await loadContent('blogs');
        setBlogPosts(posts);
        const cats = getCategories(posts);
        setCategories(cats);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              Blog
            </h1>
          </div>
          <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
            This section features accessible commentary and analysis on current legal and social developments relating to:
          </p>
          <ul className="mb-6">
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>sexuality and gender identity</span>
            </li>
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>migration and asylum</span>
            </li>
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>comparative legal developments</span>
            </li>
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>equality and non-discrimination law</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="mb-8">
              <p className="text-black font-medium mb-3">Filter by Category:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === ''
                      ? 'bg-brand-orange text-white'
                      : 'bg-gray-200 text-black hover:bg-gray-300'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedCategory === cat
                        ? 'bg-brand-orange text-white'
                        : 'bg-gray-200 text-black hover:bg-gray-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <p className="text-black text-lg">Loading blog posts...</p>
            </div>
          )}

          {/* No Posts */}
          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black text-lg">
                {blogPosts.length === 0
                  ? 'No blog posts yet. Check back soon!'
                  : 'No posts in this category.'}
              </p>
            </div>
          )}

          {/* Blog Posts List */}
          {!loading && filteredPosts.length > 0 && (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-gray-200 pb-8 last:border-b-0"
                >
                  {post.featured_image && (
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}

                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2">
                    {post.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    {post.author && (
                      <span className="text-gray-700">By {post.author}</span>
                    )}
                    {post.category && (
                      <div className="flex items-center gap-1">
                        <Tag size={16} />
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-black text-lg leading-relaxed mb-4 text-justify">
                    {post.description}
                  </p>

                  <div className="prose prose-sm max-w-none text-gray-700 line-clamp-3">
                    <ReactMarkdown>{getExcerpt(post.content, 300)}</ReactMarkdown>
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-brand-orange hover:underline font-medium"
                  >
                    Read full article →
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
