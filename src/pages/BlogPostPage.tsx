import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { loadBlogPost, formatDate } from '../utils/contentLoader';

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

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError(true);
      return;
    }

    const load = async () => {
      try {
        const data = await loadBlogPost(slug);
        if (data) {
          setPost(data);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-black text-lg">Loading article...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1a2744] mb-4">Article Not Found</h1>
          <p className="text-black text-lg mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <a href="/blog" className="text-brand-orange hover:underline font-medium">
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {post.featured_image && (
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        )}

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
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

        {post.description && (
          <p className="text-black text-lg leading-relaxed mb-8 text-justify border-l-4 border-brand-orange pl-4">
            {post.description}
          </p>
        )}

        <div className="prose prose-lg max-w-none text-gray-800">
          <ReactMarkdown>{post.body || post.content || post.description || ''}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <a
            href="/blog"
            className="text-brand-orange hover:underline font-medium"
          >
            ← Back to Blog
          </a>
        </div>
      </article>
    </div>
  );
};
