import { useState, useEffect } from 'react';
import { Calendar, Mail } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { loadContent, formatDate, getExcerpt } from '../utils/contentLoader';

interface Newsletter {
  title: string;
  description: string;
  date: string;
  issue_number: number;
  featured_image?: string;
  slug: string;
  content: string;
}

export const NewsletterPage = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNewsletters = async () => {
      try {
        const items = await loadContent('newsletter');
        setNewsletters(items);
      } catch (error) {
        console.error('Error loading newsletters:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNewsletters();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              IDEA Insights
            </h1>
          </div>
          <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
            IDEA Insights is the monthly newsletter of the Institute, featuring accessible updates on comparative LGBTQ+ law, migration, asylum, and transnational legal developments.
          </p>
          <p className="text-black text-lg leading-relaxed mb-4 text-justify">
            The newsletter includes:
          </p>
          <ul className="mb-6">
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>key research insights</span>
            </li>
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>comparative legal and policy developments</span>
            </li>
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>short explainers and commentary</span>
            </li>
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>research publications and institutional updates</span>
            </li>
          </ul>
          <p className="text-black text-lg leading-relaxed break-words text-justify mb-8">
            Subscribe to receive accessible legal insights, research updates, and news from the Institute.
          </p>

          {/* Subscribe Section */}
          <div className="bg-gray-50 border-l-4 border-brand-orange p-6 mb-8 rounded">
            <div className="flex items-start gap-3">
              <Mail className="text-brand-orange mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-[#1a2744] mb-2">Subscribe to IDEA Insights</h3>
                <p className="text-black text-sm mb-4">
                  Get the latest legal insights, research updates, and institutional news delivered to your inbox monthly.
                </p>
                <a
                  href="mailto:info@ideainstitute.de?subject=Subscribe%20to%20IDEA%20Insights"
                  className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition font-medium text-sm"
                >
                  <Mail size={16} />
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              Newsletter Archive
            </h2>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <p className="text-black text-lg">Loading newsletters...</p>
            </div>
          )}

          {/* No Newsletters */}
          {!loading && newsletters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black text-lg">
                No newsletters yet. Check back soon for updates!
              </p>
            </div>
          )}

          {/* Newsletters List */}
          {!loading && newsletters.length > 0 && (
            <div className="space-y-8">
              {newsletters.map((newsletter) => (
                <article
                  key={newsletter.slug}
                  className="border-b border-gray-200 pb-8 last:border-b-0 hover:shadow-lg transition rounded-lg p-4"
                >
                  {newsletter.featured_image && (
                    <img
                      src={newsletter.featured_image}
                      alt={newsletter.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}

                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                    <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                      Issue {newsletter.issue_number}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2">
                    {newsletter.title}
                  </h2>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{formatDate(newsletter.date)}</span>
                    </div>
                  </div>

                  <p className="text-black text-lg leading-relaxed mb-4 text-justify">
                    {newsletter.description}
                  </p>

                  <div className="prose prose-sm max-w-none text-gray-700 line-clamp-4 mb-4">
                    <ReactMarkdown>{getExcerpt(newsletter.content, 400)}</ReactMarkdown>
                  </div>

                  <a
                    href={`/newsletter/${newsletter.slug}`}
                    className="inline-block text-brand-orange hover:underline font-medium"
                  >
                    Read full newsletter →
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