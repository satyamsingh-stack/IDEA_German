import { useLanguage } from '../contexts/LanguageContext'

export const AboutPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('about.introDesc')}
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('about.missionTitle')}
            </h2>
          </div>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4 max-w-3xl break-words">
            {t('about.missionIntro')}
          </p>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4">
            {t('about.missionDesc')}
          </p>
          <ul className="mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>{t(`about.mission.${i}` as const)}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('about.missionGoal')}
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('about.approachTitle')}
            </h2>
          </div>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4 max-w-3xl break-words">
            {t('about.approachDesc')}
          </p>
          <ul className="mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>{t(`about.approach.${i}` as const)}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('about.approachGoal')}
          </p>
        </div>
      </section>

      {/* Our Perspective Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('about.perspectiveTitle')}
            </h2>
          </div>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4 max-w-3xl break-words">
            {t('about.perspectiveDesc')}
          </p>
          <ul className="mb-6">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>{t(`about.perspective.${i}` as const)}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('about.perspectiveGoal')}
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('about.whoWeAreTitle')}
            </h2>
          </div>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-10 max-w-3xl break-words">
            {t('about.whoWeAreDesc')}
          </p>

          <div className="space-y-10">
            {/* Dr. Yeshwant Naik */}
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-1">{t('about.drNaik.title')}</h3>
              <p className="text-brand-orange font-semibold mb-3">{t('about.drNaik.role')}</p>
              <p className="text-[#1a2744] leading-relaxed mb-4 break-words">
                {t('about.drNaik.desc')}
              </p>
              <ul className="mb-4">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="break-words">{t(`about.drNaik.${i}` as const)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#1a2744] leading-relaxed break-words">
                {t('about.drNaik.4')}
              </p>
            </div>

            {/* Thomas Hornung */}
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-1">{t('about.thomasHornung.title')}</h3>
              <p className="text-brand-orange font-semibold mb-3">{t('about.thomasHornung.role')}</p>
              <p className="text-[#1a2744] leading-relaxed mb-4 break-words">
                {t('about.thomasHornung.desc')}
              </p>
              <ul>
                {[1, 2, 3].map((i) => (
                  <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="break-words">{t(`about.thomasHornung.${i}` as const)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bettina Schwenker */}
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-1">{t('about.bettinaSchwenker.title')}</h3>
              <p className="text-brand-orange font-semibold mb-3">{t('about.bettinaSchwenker.role')}</p>
              <p className="text-[#1a2744] leading-relaxed break-words">
                {t('about.bettinaSchwenker.desc')}
              </p>
            </div>

            {/* Mirko Knepper */}
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-1">{t('about.mirkoKnepper.title')}</h3>
              <p className="text-brand-orange font-semibold mb-3">{t('about.mirkoKnepper.role')}</p>
              <p className="text-[#1a2744] leading-relaxed break-words">
                {t('about.mirkoKnepper.desc')}
              </p>
            </div>

            {/* Herald Gronberg */}
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-1">{t('about.heraldGronberg.title')}</h3>
              <p className="text-brand-orange font-semibold mb-3">{t('about.heraldGronberg.role')}</p>
              <p className="text-[#1a2744] leading-relaxed break-words">
                {t('about.heraldGronberg.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Framework Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('about.collabTitle')}
            </h2>
          </div>
          <p className="text-[#1a2744] text-lg leading-relaxed mb-4 max-w-3xl break-words">
            {t('about.collabDesc')}
          </p>
          <ul className="mb-6">
            {[1, 2, 3].map((i) => (
              <li key={i} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>{t(`about.collab.${i}` as const)}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('about.collabGoal')}
          </p>
        </div>
      </section>

      {/* Research Positioning Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('about.researchTitle')}
            </h2>
          </div>
          <p className="text-[#1a2744] leading-relaxed text-lg break-words">
            {t('about.researchDesc')}
          </p>
        </div>
      </section>
    </div>
  )
}
