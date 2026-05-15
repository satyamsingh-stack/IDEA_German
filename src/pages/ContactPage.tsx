import { useLanguage } from '../contexts/LanguageContext'

export const ContactPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="relative py-4 md:py-8 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-6">{t('contact.switzerlandTitle')}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{t('contact.switzerlandInstitute')}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{t('contact.switzerlandStreet')}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{t('contact.switzerlandPostal')}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{t('contact.switzerlandCountry')}</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('contact.emailLabel')}: <a href="mailto:info@ideainstitute.ch" className="text-brand-orange hover:underline font-medium">{t('contact.switzerlandEmail')}</a>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-6">{t('contact.germanyTitle')}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{t('contact.germanyInstitute')}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{t('contact.germanyStreet')}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{t('contact.germanyPostal')}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{t('contact.germanyCountry')}</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('contact.emailLabel')}: <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline font-medium">{t('contact.germanyEmail')}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}