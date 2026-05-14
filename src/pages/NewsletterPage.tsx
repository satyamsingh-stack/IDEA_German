const newsletters = [
  {
    title: 'IDEA Insights — Issue 1',
    image: '/images/Newsletter IDEA .png',
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

          <ul>
            {newsletters.map((nl, index) => (
              <li key={index} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <a
                  href={nl.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  {nl.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}