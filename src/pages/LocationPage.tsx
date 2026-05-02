import { useLanguage } from '../contexts/LanguageContext'

export const LocationPage = () => {
  const { t } = useLanguage()
  const mapsUrl = "https://www.google.com/maps?ll=47.187348,8.451873&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=Sinserstrasse+67+6330+Cham+Switzerland"

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('page.location')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-column layout: Content left, Map on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {/* Left: Text Content */}
            <div className="leading-relaxed">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('location.intro1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('location.intro2')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('location.intro3')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('location.intro4')}
              </p>

              {/* Address Section */}
              <div className="mt-6 p-5 bg-gray-50 border-l-4 border-brand-orange">
                <p className="text-base md:text-lg font-semibold text-brand-black mb-2">
                  {t('location.address')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('location.addressLine2')}<br />
                  {t('location.city')}
                </p>
              </div>
            </div>

            {/* Right: Clickable Google Map with address pin visible */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg h-full min-h-[300px] lg:min-h-0 group relative"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-brand-black border border-brand-orange/30">
                  {t('location.mapLink')}
                </div>
              </div>
              <iframe
                src={`https://maps.google.com/maps?q=Sinserstrasse+67+6330+Cham+Switzerland&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                title="IDEA Institute Location"
                onClick={(e) => e.preventDefault()}
              ></iframe>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
