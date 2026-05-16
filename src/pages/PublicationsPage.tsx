import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadContent, getCategories } from '../utils/contentLoader';

interface Publication {
  title: string;
  description: string;
  date: string;
  category?: string;
  pdf_file?: string;
  featured_image?: string;
  label_text?: string;
  pdf_link?: string;
  slug: string;
  content: string;
}

/** Category order — only sections with publications are rendered. */
const CATEGORIES = [
  'Comparative Legal Analysis',
  'Migration, Asylum & Transnational Law',
  'Law & Lived Experience',
  'Violence, Protection & Legal Gaps',
  'Policy & Commentary',
  'German Publications',
  'Research Papers',
] as const;

/** Subtitle text for each category heading. */
const CATEGORY_SUBTITLES: Record<string, string> = {
  'Comparative Legal Analysis':
    'Research examining legal developments across jurisdictions and comparative legal systems.',
  'Migration, Asylum & Transnational Law':
    'Research exploring migration, mobility, asylum systems, and cross-border legal developments.',
  'Law & Lived Experience':
    'Socio-legal research examining the relationship between formal legal protections and everyday realities.',
  'Violence, Protection & Legal Gaps':
    'Research analysing violence, exclusion, and institutional protection failures affecting sexual and gender minorities.',
  'Policy & Commentary':
    'Critical legal and social commentary on contemporary developments in law, policy, and public discourse.',
  'German Publications':
    'Selected German-language research and commentary.',
};

export const PublicationsPage = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPubs = async () => {
      try {
        const pubs = await loadContent('publications');
        pubs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPublications(pubs);
        setCategories(getCategories(pubs));
      } catch (error) {
        console.error('Error loading publications:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPubs();
  }, []);

  const filteredPublications = selectedCategory
    ? publications.filter(pub => pub.category === selectedCategory)
    : publications;

  const groupedByCategory = CATEGORIES.map(cat => ({
    category: cat,
    items: filteredPublications.filter(pub => pub.category === cat),
  })).filter(g => g.items.length > 0);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Intro Section (unchanged) ── */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
                IDEA Legal Research Paper Series
              </h2>
            </div>
            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              The IDEA Legal Research Paper Series is an academic publication initiative of the IDEA
              Institute dedicated to comparative and transnational legal research on sexuality, gender
              identity, equality, migration, asylum, and related socio-legal developments.
            </p>
            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              Registered in Germany under ISSN 2943-4068, the series publishes research papers,
              analytical reports, policy commentary, and interdisciplinary legal scholarship produced
              by the Institute and affiliated researchers.
            </p>
            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              The series aims to support accessible, research-driven engagement with emerging and
              underexplored areas of comparative law and transnational legal studies.
            </p>
            <p className="text-black text-lg leading-relaxed mb-6 break-words text-justify">
              All publications are released under the Creative Commons Attribution License (CC BY 4.0),
              permitting reuse and adaptation with appropriate attribution.
            </p>
            <p className="text-black text-lg leading-relaxed mb-2">
              For inquiries, submissions, or collaboration, please contact:
            </p>
            <p className="text-black font-medium">Dr. Yeshwant Naik</p>
            <p className="text-black">
              <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline font-medium">
                info@ideainstitute.de
              </a>
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
                Research Publications
              </h2>
            </div>
            <p className="text-black text-lg leading-relaxed mb-8 break-words text-justify">
              The IDEA Institute produces academic and analytical work across its core research areas.
            </p>
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
                  {categories.map(cat => (
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
          </div>
        </div>
      </section>

      {/* ── Category-grouped Publications Listing ── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="text-center py-12">
              <p className="text-black text-lg">Loading publications…</p>
            </div>
          )}

          {!loading && publications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black text-lg">No publications yet. Check back soon!</p>
            </div>
          )}

          {!loading && publications.length > 0 && groupedByCategory.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black text-lg">No publications in this category.</p>
            </div>
          )}

          {!loading &&
            groupedByCategory.map(({ category, items }) => (
              <div key={category} className="mb-12 last:mb-0">
                {/* Category heading with orange rule */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a2744]">{category}</h3>
                </div>

                {/* Subtitle */}
                {CATEGORY_SUBTITLES[category] && (
                  <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify pl-5">
                    {CATEGORY_SUBTITLES[category]}
                  </p>
                )}

                {/* Numbered publication list */}
                <ol className="space-y-2 pl-5" start={1}>
                  {items.map(pub => {
                    const label = (pub.label_text || pub.title || '').trim();
                    const href = pub.pdf_link || pub.pdf_file || `/publications/${pub.slug}`;
                    const isExternal = !!pub.pdf_link || !!pub.pdf_file;

                    return (
                      <li key={pub.slug} className="flex items-start gap-3">
                        {/* Thumbnail (optional) */}
                        {pub.featured_image && (
                          <img
                            src={pub.featured_image}
                            alt=""
                            className="mt-1 w-12 h-12 object-cover rounded flex-shrink-0"
                          />
                        )}
                        <span className="flex-1">
                          {isExternal ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-orange hover:underline font-medium break-words"
                            >
                              {label}
                            </a>
                          ) : (
                            <Link to={href} className="text-brand-orange hover:underline font-medium break-words">
                              {label}
                            </Link>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
        </div>
      </section>

      {/* ── Accessing Publications Footer (unchanged) ── */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 pt-8">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">Accessing Publications</h3>
            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              Publications are available through the Institute's publication platform and are organised
              according to thematic research areas.
            </p>
            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              Additional publication details, abstracts, and downloadable versions will be made
              available progressively through the website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
