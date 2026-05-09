import { useLanguage } from '../contexts/LanguageContext'

export const NewsletterPage = () => {
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
                {t('nav.newsletter')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-12 md:py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">
                {t('newsletter.headline')}
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 break-words">
              {t('newsletter.description1')}
            </p>

            <h3 className="text-xl font-bold text-brand-black mb-4">
              {t('newsletter.description2')}
            </h3>

            <ul className="space-y-3 mb-10">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="group flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-gray-700 break-words">{t(`newsletter.item${i}`)}</span>
                </li>
              ))}
            </ul>

            <div className="relative bg-gradient-to-r from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange/20 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl"></div>
              <p className="text-gray-700 text-lg leading-relaxed break-words relative z-10">
                {t('newsletter.subscribe')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
