import { useLanguage } from '../contexts/LanguageContext'

export const ContactPage = () => {
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
                {t('nav.contact')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-12 md:py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">
                {t('contact.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {/* Germany Address */}
              <div className="group bg-gradient-to-br from-white to-gray-50/50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-brand-black mb-6">
                  {t('contact.germanyTitle')}
                </h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('contact.address')}
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line break-words">
                      {t('contact.germanyAddress')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('contact.email')}
                    </h4>
                    <p className="text-gray-700">
                      <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline font-medium group-hover:text-orange-600 transition-colors">
                        {t('contact.germanyEmail')}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Switzerland Address */}
              <div className="group bg-gradient-to-br from-white to-gray-50/50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-brand-black mb-6">
                  {t('contact.switzerlandTitle')}
                </h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('contact.address')}
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line break-words">
                      {t('contact.switzerlandAddress')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('contact.email')}
                    </h4>
                    <p className="text-gray-700">
                      <a href="mailto:info@ideainstitute.ch" className="text-brand-orange hover:underline font-medium group-hover:text-orange-600 transition-colors">
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