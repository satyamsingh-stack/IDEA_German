import { useLanguage } from '../contexts/LanguageContext'

export const HeroSection = () => {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center bg-white pt-24 md:pt-32 pb-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-brand-orange/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Mobile Image - shown above content on mobile (order-1), hidden on desktop */}
          <div className="lg:hidden flex justify-center order-1">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/firstPage.jpeg"
                alt={t('hero.imageAlt')}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Left Content - on mobile it comes after image (order-2), on desktop it's first (order-1) */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full border border-brand-orange/20">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">{t('hero.badge')}</span>
            </div>

            {/* H1 Section */}
            <div className="animate-fadeIn">
               <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-black leading-[1.1] mb-6 font-serif">
                {t('hero.welcome')}
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base font-normal">
                {t('hero.description')}
              </p>
            </div>

            {/* Profil und Mission Section */}
            <div className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
              <p className="text-base sm:text-lg font-bold text-brand-black mb-6 uppercase tracking-wider">
                {t('hero.profileMission')}
              </p>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
                  {t('hero.mission1')}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
                  {t('hero.mission2')}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
                  {t('hero.mission3')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - Desktop Only - shown on desktop as second column (order-2), hidden on mobile */}
          <div className="hidden lg:flex justify-center lg:justify-end items-center animate-fadeIn order-2 lg:order-2" style={{animationDelay: '0.3s'}}>
            <div className="relative group w-full max-w-2xl">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-brand-orange rounded-tl-xl"></div>
                <img
                  src="/images/firstPage.jpeg"
                  alt={t('hero.imageAlt')}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
