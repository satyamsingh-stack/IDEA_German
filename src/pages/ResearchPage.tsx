import { ResearchSection } from '../components/ResearchSection'

export const ResearchPage = () => {
  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-10">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            Forschung und Schwerpunkte
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>
      <ResearchSection />
    </div>
  )
}
