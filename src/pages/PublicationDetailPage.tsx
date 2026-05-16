import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Tag, FileDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { loadPublication, formatDate } from '../utils/contentLoader';

interface Publication {
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  featured_image?: string;
  pdf_file?: string;
  slug: string;
  content: string;
}

export const PublicationDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [publication, setPublication] = useState<Publication | null>(null);
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
        const data = await loadPublication(slug);
        if (data) {
          setPublication(data);
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
        <p className="text-black text-lg">Loading publication...</p>
      </div>
    );
  }

  if (error || !publication) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1a2744] mb-4">Publication Not Found</h1>
          <p className="text-black text-lg mb-6">The publication you're looking for doesn't exist or has been removed.</p>
          <a href="/publikationen" className="text-brand-orange hover:underline font-medium">
            ← Back to Publications
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {publication.featured_image && (
          <img
            src={publication.featured_image}
            alt={publication.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        )}

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
          {publication.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{formatDate(publication.date)}</span>
          </div>
          {publication.author && (
            <span className="text-gray-700">By {publication.author}</span>
          )}
          {publication.category && (
            <div className="flex items-center gap-1">
              <Tag size={16} />
              <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                {publication.category}
              </span>
            </div>
          )}
        </div>

        {publication.description && (
          <p className="text-black text-lg leading-relaxed mb-6 text-justify border-l-4 border-brand-orange pl-4">
            {publication.description}
          </p>
        )}

        <div className="prose prose-lg max-w-none text-gray-800">
          <ReactMarkdown>{publication.content}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <a
            href="/publikationen"
            className="text-brand-orange hover:underline font-medium"
          >
            ← Back to Publications
          </a>
          {publication.pdf_file && (
            <a
              href={publication.pdf_file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-medium"
            >
              <FileDown size={18} />
              Download PDF
            </a>
          )}
        </div>
      </article>
    </div>
  );
};
