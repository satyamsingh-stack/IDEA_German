import { useLanguage } from '../contexts/LanguageContext'

export const InitiativesPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('initiatives.intro')}
          </p>
        </div>
      </section>

      {/* PRIDE IN LAW Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('initiatives.prideInLawTitle')}
            </h2>
          </div>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-6 max-w-3xl break-words">
            {t('initiatives.prideInLawDesc')}
          </p>

          <p className="text-[#1a2744] text-lg leading-relaxed mb-4">
            {t('initiatives.prideInLawSupports')}
          </p>
          <ul className="mb-6">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span className="break-words">{t(`initiatives.prideInLaw.${i}` as const)}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#1a2744] leading-relaxed text-lg mb-4 break-words">
            {t('initiatives.prideInLaw.origin')}
          </p>

          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('initiatives.prideInLawTrademark')}
          </p>
        </div>
      </section>
    </div>
  )
}
