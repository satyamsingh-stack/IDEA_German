const newsletters = [
  {
    id: 1,
    title: 'IDEA Insights — Issue 1',
    date: '2025',
    description: 'Inaugural issue featuring research insights, comparative legal developments, and institutional updates.',
    thumbnail: '/images/Newsletter IDEA .png',
    pdf: null,
  },
]

export const NewsletterPage = () => {
  return (
    <div className="min-h-screen bg-white">
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

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744]">
              Newsletter Archive
            </h2>
          </div>

          <div className="space-y-6">
            {newsletters.map((nl) => (
              <div key={nl.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex-shrink-0">
                    <a href={nl.thumbnail} target="_blank" rel="noopener noreferrer">
                      <img
                        src={nl.thumbnail}
                        alt={nl.title}
                        className="w-48 h-auto rounded-lg shadow-sm border border-gray-100 hover:opacity-90 transition-opacity"
                      />
                    </a>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1a2744] mb-1">{nl.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{nl.date}</p>
                    <p className="text-black leading-relaxed mb-3 text-justify">{nl.description}</p>
                    <div className="flex gap-3">
                      <a
                        href={nl.thumbnail}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-brand-orange rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                        View
                      </a>
                      {nl.pdf && (
                        <a
                          href={nl.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-brand-orange border border-brand-orange rounded-lg hover:bg-orange-50 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          Download PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}