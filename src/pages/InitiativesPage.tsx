import { useLanguage } from '../contexts/LanguageContext'

export const InitiativesPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6">
              {t('initiatives.title')}
            </h1>
            <div className="w-16 h-0.5 bg-brand-orange mx-auto mb-6"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('initiatives.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* PRIDE IN LAW Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-2">
            {t('initiatives.prideInLawTitle')}
          </h2>
          <div className="w-12 h-0.5 bg-brand-orange mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            {t('initiatives.prideInLawDesc')}
          </p>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-brand-black mb-4">
              {t('initiatives.prideInLawSupports')}
            </h3>
            <ul className="space-y-4 max-w-2xl">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="text-gray-700 leading-relaxed flex items-start gap-3">
                  <span className="text-brand-orange font-bold">•</span>
                  <span>{t(`initiatives.prideInLaw.${i}` as const)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
            <p className="text-gray-700 leading-relaxed">
              {t('initiatives.prideInLaw.origin')}
            </p>
          </div>

          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-lg">
            <p className="text-gray-300 leading-relaxed">
              {t('initiatives.prideInLawTrademark')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}