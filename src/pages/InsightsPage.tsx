
export const InsightsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Insights Intro */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] leading-tight mb-4">
            Understanding Law, Rights, and Lived Realities
          </h1>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4 break-words">
            The Insights section brings together accessible legal analysis, educational explainers, commentary, and public-facing resources developed by the IDEA Institute.
          </p>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4 break-words">
            It is designed to make complex legal and social issues more understandable for a broader audience while maintaining academic depth and clarity.
          </p>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4">
            The section includes:
          </p>
           <ul className="mb-6">
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>legal explainers</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>blog articles and commentary</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>frequently asked questions (FAQ)</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>selected newsletter insights</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>programmes and events information</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
