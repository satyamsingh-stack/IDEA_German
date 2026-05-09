import { useLanguage } from '../contexts/LanguageContext'

export const ResearchPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="pt-20 md:pt-28 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-[0.15em]">
                {t('nav.research')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-12 md:py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Research Focus */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">
                {t('research.focusTitle')}
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-4xl break-words">
              {t('research.focusDesc')}
            </p>

            {/* Research Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { key: 1, color: 'from-orange-50/50 to-white' },
                { key: 2, color: 'from-orange-50/50 to-white' },
                { key: 3, color: 'from-orange-50/50 to-white' },
                { key: 4, color: 'from-orange-50/50 to-white' },
              ].map((item) => (
                <div key={item.key} className="group relative bg-gradient-to-br from-white to-gray-50/50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl font-bold text-brand-black mb-4 relative">
                    {t(`research.category${item.key}`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed break-words">
                    {t(`research.category${item.key}Desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Approach */}
          <div className="mb-16 border-t border-gray-200 pt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">
                {t('research.approachTitle')}
              </h2>
            </div>

            <div className="mb-8 max-w-4xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-6 break-words">
                {t('research.approachDesc')}
              </p>

              <ul className="space-y-4 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words">{t(`research.approach${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative bg-gradient-to-r from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange/20 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl"></div>
              <p className="text-gray-700 leading-relaxed break-words relative z-10">
                {t('research.approachDesc2')}
              </p>
            </div>
          </div>

          {/* Research Projects */}
          <div className="border-t border-gray-200 pt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">
                {t('research.projectsTitle')}
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-4xl break-words">
              {t('research.projectsDesc')}
            </p>

            {/* Ongoing Projects */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-6 relative pl-4 border-l-2 border-brand-orange">
                {t('research.ongoingTitle')}
              </h3>
              <ul className="space-y-4 max-w-4xl">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words group-hover:text-brand-orange transition-colors duration-300">{t(`research.project${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Completed Projects */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-6 relative pl-4 border-l-2 border-brand-orange">
                {t('research.completedTitle')}
              </h3>
              <ul className="space-y-4 max-w-4xl">
                {[6, 7].map((i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words group-hover:text-brand-orange transition-colors duration-300">{t(`research.project${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
