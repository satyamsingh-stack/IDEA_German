import { PublicationsSection } from '../components/PublicationsSection'

export const PublicationsPage = () => {
  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-black mb-8">Publikationen</h1>
      </div>
      <PublicationsSection />
    </div>
  )
}
