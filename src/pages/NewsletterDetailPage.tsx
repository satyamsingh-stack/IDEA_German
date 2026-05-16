import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { loadNewsletter, formatDate } from '../utils/contentLoader';

interface Newsletter {
  title: string;
  description: string;
  date: string;
  issue_number: number;
  featured_image?: string;
  slug: string;
  content: string;
}

export const NewsletterDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [newsletter, setNewsletter] = useState<Newsletter | null>(null);
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
        const data = await loadNewsletter(slug);
        if (data) {
          setNewsletter(data);
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
        <p className="text-black text-lg">Loading newsletter...</p>
      </div>
    );
  }

  if (error || !newsletter) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1a2744] mb-4">Newsletter Not Found</h1>
          <p className="text-black text-lg mb-6">The newsletter issue you're looking for doesn't exist or has been removed.</p>
          <a href="/newsletter" className="text-brand-orange hover:underline font-medium">
            ← Back to Newsletter
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {newsletter.featured_image && (
          <img
            src={newsletter.featured_image}
            alt={newsletter.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        )}

        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold">
            Issue {newsletter.issue_number}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
          {newsletter.title}
        </h1>

        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{formatDate(newsletter.date)}</span>
          </div>
        </div>

        {newsletter.description && (
          <p className="text-black text-lg leading-relaxed mb-8 text-justify border-l-4 border-brand-orange pl-4">
            {newsletter.description}
          </p>
        )}

        <div className="prose prose-lg max-w-none text-gray-800">
          <ReactMarkdown>{newsletter.content}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <a
            href="/newsletter"
            className="text-brand-orange hover:underline font-medium"
          >
            ← Back to Newsletter Archive
          </a>
        </div>
      </article>
    </div>
  );
};
