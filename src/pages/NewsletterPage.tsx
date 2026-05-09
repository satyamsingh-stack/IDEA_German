import { useLanguage } from '../contexts/LanguageContext'

export const NewsletterPage = () => {
  const { t } = useLanguage()

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('nav.newsletter')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              {t('newsletter.headline')}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {t('newsletter.description1')}
            </p>

            <h3 className="text-xl font-bold text-brand-black mb-4">
              {t('newsletter.description2')}
            </h3>

            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">{t('newsletter.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">{t('newsletter.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">{t('newsletter.item3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">{t('newsletter.item4')}</span>
              </li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-orange">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('newsletter.subscribe')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
