import { useState, useEffect } from 'react';
import { loadContent } from '../utils/contentLoader';

interface NewsletterItem {
  label_text: string;
  featured_image: string;
  slug: string;
}

export const NewsletterPage = () => {
  const [newsletters, setNewsletters] = useState<NewsletterItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNewsletters = async () => {
      try {
        const items = await loadContent('newsletter');
        setNewsletters(
          items.map(item => ({
            label_text:      item.label_text || '',
            featured_image:  item.featured_image || '',
            slug:            item.slug,
          }))
        );
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
            <ol className="space-y-4 pl-5" start={1}>
              {newsletters.map(nl => {
                const label = nl.label_text.replace(/^"+|"+$/g, '').replace(/^'+|'+$/g, '').trim();

                return (
                  <li key={nl.slug} className="flex items-start gap-3 min-w-0 w-full">
                    {/* Round orange bullet */}
                    <span
                      className="mt-1.5 inline-block w-2 h-2 rounded-full bg-brand-orange flex-shrink-0"
                      aria-hidden="true"
                    />
                    <a
                      href={nl.featured_image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-orange hover:underline font-medium break-words min-w-0 flex-1"
                      style={{ overflowWrap: 'anywhere', wordBreak: 'normal' }}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </section>
    </div>
  );
};