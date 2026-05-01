import { ResearchSection } from '../components/ResearchSection'

export const ResearchPage = () => {
  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-black mb-2">Forschung</h1>
        <div className="w-16 h-1 bg-brand-orange rounded mb-8"></div>
      </div>
      <ResearchSection />
    </div>
  )
}
