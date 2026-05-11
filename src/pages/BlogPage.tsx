export const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4 break-words">
            This section features accessible commentary and analysis on current legal and social developments relating to:
          </p>
          <ul className="mb-6">
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>sexuality and gender identity</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>migration and asylum</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>comparative legal developments</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>equality and non-discrimination law</span>
            </li>
          </ul>
          <p className="text-[#1a2744] text-lg leading-relaxed break-words">
            Blog articles and commentary – coming soon.
          </p>
        </div>
      </section>
    </div>
  )
}
