import { useLanguage } from '../contexts/LanguageContext'

export const BlogPage = () => {
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
                {t('nav.blog')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-12 md:py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">
                {t('blog.title')}
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-4xl break-words">
              {t('blog.headline')}
            </p>

            <div className="mb-8">
              <ul className="flex flex-wrap gap-3 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="group bg-gradient-to-r from-gray-50 to-white px-6 py-3 rounded-full text-gray-700 font-medium border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all duration-300">
                    {t(`blog.topic${i}`)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative bg-gradient-to-r from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange/20 transition-colors duration-300 max-w-4xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl"></div>
              <p className="text-gray-700 text-xl leading-relaxed font-medium relative z-10">
                {t('blog.comingSoon')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
