import { useLanguage } from '../contexts/LanguageContext'

export const AboutPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6">
              {t('about.title')}
            </h1>
            <div className="w-16 h-0.5 bg-brand-orange mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t('about.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              {t('about.introDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            {t('about.missionTitle')}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {t('about.missionIntro')}
          </p>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              {t('about.missionDesc')}
            </p>
            <ul className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="text-gray-700 leading-relaxed flex items-start gap-3">
                  <span className="text-brand-orange font-bold">•</span>
                  <span>{t(`about.mission.${i}` as const)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed font-medium">
                {t('about.missionGoal')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            {t('about.approachTitle')}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {t('about.approachDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-orange font-bold text-lg">{i}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t(`about.approach.${i}` as const)}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[4, 5].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-orange font-bold text-lg">{i}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t(`about.approach.${i}` as const)}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-orange">
            <p className="text-gray-700 leading-relaxed italic">
              {t('about.approachGoal')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Perspective Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            {t('about.perspectiveTitle')}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {t('about.perspectiveDesc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-center">
                <p className="text-sm font-semibold text-brand-black">
                  {t(`about.perspective.${i}` as const)}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-lg">
            <p className="text-gray-300 leading-relaxed">
              {t('about.perspectiveGoal')}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            {t('about.whoWeAreTitle')}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            {t('about.whoWeAreDesc')}
          </p>

          <div className="space-y-8">
            {/* Dr. Yeshwant Naik */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">YN</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.drNaik.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.drNaik.role')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('about.drNaik.desc')}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                        {t(`about.drNaik.${i}` as const)}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">
                    {t('about.drNaik.4')}
                  </p>
                </div>
              </div>
            </div>

            {/* Thomas Hornung */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-bold text-xl">TH</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.thomasHornung.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.thomasHornung.role')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('about.thomasHornung.desc')}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        {t(`about.thomasHornung.${i}` as const)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bettina Schwenker */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-bold text-xl">BS</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.bettinaSchwenker.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.bettinaSchwenker.role')}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.bettinaSchwenker.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Mirko Knepper */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-bold text-xl">MK</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.mirkoKnepper.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.mirkoKnepper.role')}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.mirkoKnepper.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Herald Gronberg */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-bold text-xl">HG</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.heraldGronberg.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.heraldGronberg.role')}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.heraldGronberg.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Framework Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            {t('about.collabTitle')}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {t('about.collabDesc')}
          </p>
          <div className="flex flex-wrap gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 px-5 py-3 rounded-lg border border-gray-200">
                <p className="text-gray-700 text-sm">
                  {t(`about.collab.${i}` as const)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              {t('about.collabGoal')}
            </p>
          </div>
        </div>
      </section>

      {/* Research Positioning Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            {t('about.researchTitle')}
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              {t('about.researchDesc')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}