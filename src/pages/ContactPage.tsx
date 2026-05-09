import { useLanguage } from '../contexts/LanguageContext'

export const ContactPage = () => {
  const { t } = useLanguage()

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('nav.contact')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-8 text-center">
              {t('contact.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Germany Address */}
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-brand-black mb-4">
                  {t('contact.germanyTitle')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('contact.address')}
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                      {t('contact.germanyAddress')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('contact.email')}
                    </h4>
                    <p className="text-gray-700">
                      <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline font-medium">
                        {t('contact.germanyEmail')}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Switzerland Address */}
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-brand-black mb-4">
                  {t('contact.switzerlandTitle')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('contact.address')}
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                      {t('contact.switzerlandAddress')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('contact.email')}
                    </h4>
                    <p className="text-gray-700">
                      <a href="mailto:info@ideainstitute.ch" className="text-brand-orange hover:underline font-medium">
                        {t('contact.switzerlandEmail')}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}