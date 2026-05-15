import { useState, useEffect } from 'react';
import { Calendar, Tag, FileDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { loadContent, formatDate, getExcerpt, getCategories } from '../utils/contentLoader';

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

export const PublicationsPage = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPubs = async () => {
      try {
        const pubs = await loadContent('publications');
        setPublications(pubs);
        const cats = getCategories(pubs);
        setCategories(cats);
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

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* IDEA Legal Research Paper Series */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
                IDEA Legal Research Paper Series
              </h2>
            </div>

            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              The IDEA Legal Research Paper Series is an academic publication initiative of the IDEA Institute dedicated to comparative and transnational legal research on sexuality, gender identity, equality, migration, asylum, and related socio-legal developments.
            </p>
            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              Registered in Germany under ISSN 2943-4068, the series publishes research papers, analytical reports, policy commentary, and interdisciplinary legal scholarship produced by the Institute and affiliated researchers.
            </p>
            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              The series aims to support accessible, research-driven engagement with emerging and underexplored areas of comparative law and transnational legal studies.
            </p>
            <p className="text-black text-lg leading-relaxed mb-6 break-words text-justify">
              All publications are released under the Creative Commons Attribution License (CC BY 4.0), permitting reuse and adaptation with appropriate attribution.
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

          {/* Research Publications */}
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
          </div>
        </div>
      </section>

      {/* Dynamic Publications */}
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
              <p className="text-black text-lg">Loading publications...</p>
            </div>
          )}

          {/* No Publications */}
          {!loading && filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black text-lg">
                {publications.length === 0
                  ? 'No publications yet. Check back soon!'
                  : 'No publications in this category.'}
              </p>
            </div>
          )}

          {/* Publications List */}
          {!loading && filteredPublications.length > 0 && (
            <div className="space-y-8">
              {filteredPublications.map((pub) => (
                <article
                  key={pub.slug}
                  className="border-b border-gray-200 pb-8 last:border-b-0"
                >
                  {pub.featured_image && (
                    <img
                      src={pub.featured_image}
                      alt={pub.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}

                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2">
                    {pub.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{formatDate(pub.date)}</span>
                    </div>
                    {pub.author && (
                      <span className="text-gray-700">By {pub.author}</span>
                    )}
                    {pub.category && (
                      <div className="flex items-center gap-1">
                        <Tag size={16} />
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                          {pub.category}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-black text-lg leading-relaxed mb-4 text-justify">
                    {pub.description}
                  </p>

                  <div className="prose prose-sm max-w-none text-gray-700 line-clamp-3">
                    <ReactMarkdown>{getExcerpt(pub.content, 300)}</ReactMarkdown>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={`/publications/${pub.slug}`}
                      className="inline-block text-brand-orange hover:underline font-medium"
                    >
                      View full publication →
                    </a>
                    {pub.pdf_file && (
                      <a
                        href={pub.pdf_file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition font-medium"
                      >
                        <FileDown size={16} />
                        Download PDF
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};