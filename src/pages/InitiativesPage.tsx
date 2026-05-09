import { useLanguage } from '../contexts/LanguageContext'

export const InitiativesPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-orange-50/30 to-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.03)_0%,transparent_50%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6 tracking-tight">
              {t('initiatives.title')}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 mx-auto mb-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange/20 transition-colors duration-300">
            <p className="text-gray-700 leading-relaxed text-lg break-words">
              {t('initiatives.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* PRIDE IN LAW Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-orange-50/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,102,0,0.04)_0%,transparent_40%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              {t('initiatives.prideInLawTitle')}
            </h2>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-3xl break-words">
            {t('initiatives.prideInLawDesc')}
          </p>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-brand-black mb-6 relative pl-4 border-l-2 border-brand-orange">
              {t('initiatives.prideInLawSupports')}
            </h3>
            <ul className="space-y-4 max-w-2xl">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="group flex items-start gap-3">
                  <span className="text-brand-orange font-bold text-lg mt-0.5 group-hover:scale-110 transition-transform duration-300">▸</span>
                  <span className="text-gray-700 leading-relaxed break-words">{t(`initiatives.prideInLaw.${i}` as const)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
            <p className="text-gray-700 leading-relaxed break-words">
              {t('initiatives.prideInLaw.origin')}
            </p>
          </div>

          <div className="relative bg-gradient-to-r from-brand-black to-gray-900 p-6 md:p-8 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl"></div>
            <p className="text-gray-300 leading-relaxed relative z-10">
              {t('initiatives.prideInLawTrademark')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}