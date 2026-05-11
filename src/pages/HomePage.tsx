import { useLanguage } from '../contexts/LanguageContext'

export const HomePage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight mb-6 tracking-tight">
              {t('home.subtitle')}
            </h1>
            <p className="text-[#1a2744] text-lg leading-relaxed break-words">
              {t('home.description')}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.whatWeDo')}
            </h2>
          </div>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4 max-w-3xl break-words">
            {t('home.whatWeDoDesc')}
          </p>
          <ul className="mb-6">
            {[1, 2, 3].map((i) => (
              <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>{t(`home.whatWeDo.${i}` as const)}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('home.whatWeDoBottom')}
          </p>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.whyThisMatters')}
            </h2>
          </div>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4 max-w-3xl break-words">
            {t('home.whyDesc')}
          </p>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4">
            {t('home.whyFor')}
          </p>
          <ul className="mb-6">
            {[1, 2, 3].map((i) => (
              <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>{t(`home.why${i}` as const)}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('home.whyBottom')}
          </p>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.ourWork')}
            </h2>
          </div>
          <ul>
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>{t(`home.ourWork${i}` as const)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.startHere')}
            </h2>
          </div>
          <ul>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>{t('home.startResearch')}</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>{t('home.startInsights')}</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>{t('home.startPublications')}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.getInvolved')}
            </h2>
          </div>
          <ul>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>{t('home.getInvolvedDesc')}</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>{t('home.newsletter')}</span>
            </li>
            <li className="text-[#1a2744] leading-relaxed flex items-start gap-2">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>{t('home.contact')}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
