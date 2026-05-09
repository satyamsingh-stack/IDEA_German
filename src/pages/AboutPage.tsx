import { useLanguage } from '../contexts/LanguageContext'

export const AboutPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-orange-50/30 to-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.03)_0%,transparent_50%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6 tracking-tight">
              {t('about.title')}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto break-words">
              {t('about.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange/20 transition-colors duration-300">
            <p className="text-gray-700 leading-relaxed text-lg break-words">
              {t('about.introDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-orange-50/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,102,0,0.04)_0%,transparent_40%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              {t('about.missionTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl break-words">
            {t('about.missionIntro')}
          </p>
          <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange/20 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-6 bg-brand-orange rounded-full"></div>
              <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider">
                {t('about.missionDesc')}
              </p>
            </div>
            <ul className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="text-gray-700 leading-relaxed flex items-start gap-3">
                  <span className="text-brand-orange font-bold text-lg mt-0.5">▸</span>
                  <span>{t(`about.mission.${i}` as const)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed font-medium text-lg break-words">
                {t('about.missionGoal')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              {t('about.approachTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl break-words">
            {t('about.approachDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[1, 2, 3].map((i) => (
                <div key={i} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-brand-orange font-bold text-xl">{i}</span>
                </div>
                <p className="text-gray-700 leading-relaxed break-words">
                  {t(`about.approach.${i}` as const)}
                </p>
              </div>
            ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[4, 5].map((i) => (
                  <div key={i} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-brand-orange font-bold text-xl">{i}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed break-words">
                      {t(`about.approach.${i}` as const)}
                    </p>
                  </div>
              ))}
            </div>
            <div className="relative bg-gradient-to-r from-brand-black to-gray-900 p-6 md:p-8 rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl"></div>
              <p className="text-gray-300 leading-relaxed italic relative z-10">
                {t('about.approachGoal')}
              </p>
            </div>
        </div>
      </section>

      {/* Our Perspective Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,102,0,0.03)_0%,transparent_40%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              {t('about.perspectiveTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl break-words">
            {t('about.perspectiveDesc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-orange/20 transition-all duration-300 text-center">
                <p className="text-sm font-semibold text-brand-black group-hover:text-brand-orange transition-colors duration-300 break-words">
                  {t(`about.perspective.${i}` as const)}
                </p>
              </div>
            ))}
          </div>
          <div className="relative bg-gradient-to-r from-brand-black to-gray-900 p-6 md:p-8 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl"></div>
            <p className="text-gray-300 leading-relaxed relative z-10">
              {t('about.perspectiveGoal')}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              {t('about.whoWeAreTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-3xl break-words">
            {t('about.whoWeAreDesc')}
          </p>

          <div className="space-y-6">
            {/* Dr. Yeshwant Naik */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">YN</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.drNaik.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.drNaik.role')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4 break-words">
                    {t('about.drNaik.desc')}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                        <span className="break-words">{t(`about.drNaik.${i}` as const)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100 break-words">
                    {t('about.drNaik.4')}
                  </p>
                </div>
              </div>
            </div>

            {/* Thomas Hornung */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:from-brand-orange/20 group-hover:to-brand-orange/10 transition-all duration-300">
                  <span className="text-gray-600 group-hover:text-brand-orange font-bold text-xl transition-colors duration-300">TH</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.thomasHornung.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.thomasHornung.role')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4 break-words">
                    {t('about.thomasHornung.desc')}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></span>
                        <span className="break-words">{t(`about.thomasHornung.${i}` as const)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bettina Schwenker */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:from-brand-orange/20 group-hover:to-brand-orange/10 transition-all duration-300">
                  <span className="text-gray-600 group-hover:text-brand-orange font-bold text-xl transition-colors duration-300">BS</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.bettinaSchwenker.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.bettinaSchwenker.role')}</p>
                  <p className="text-gray-700 leading-relaxed break-words">
                    {t('about.bettinaSchwenker.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Mirko Knepper */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:from-brand-orange/20 group-hover:to-brand-orange/10 transition-all duration-300">
                  <span className="text-gray-600 group-hover:text-brand-orange font-bold text-xl transition-colors duration-300">MK</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.mirkoKnepper.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.mirkoKnepper.role')}</p>
                  <p className="text-gray-700 leading-relaxed break-words">
                    {t('about.mirkoKnepper.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Herald Gronberg */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:from-brand-orange/20 group-hover:to-brand-orange/10 transition-all duration-300">
                  <span className="text-gray-600 group-hover:text-brand-orange font-bold text-xl transition-colors duration-300">HG</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-brand-black mb-1">{t('about.heraldGronberg.title')}</h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mb-3">{t('about.heraldGronberg.role')}</p>
                  <p className="text-gray-700 leading-relaxed break-words">
                    {t('about.heraldGronberg.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Framework Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-orange-50/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.04)_0%,transparent_40%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              {t('about.collabTitle')}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl break-words">
            {t('about.collabDesc')}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {[1, 2, 3].map((i) => (
                <div key={i} className="group bg-white px-5 py-3 rounded-xl border border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all duration-300">
                  <p className="text-gray-700 text-sm font-medium break-words">
                    {t(`about.collab.${i}` as const)}
                  </p>
                </div>
            ))}
          </div>
          <div className="relative bg-gradient-to-r from-brand-black to-gray-900 p-6 md:p-8 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl"></div>
            <p className="text-gray-300 leading-relaxed relative z-10">
              {t('about.collabGoal')}
            </p>
          </div>
        </div>
      </section>

      {/* Research Positioning Section */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              {t('about.researchTitle')}
            </h2>
          </div>
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange/20 transition-colors duration-300">
            <p className="text-gray-700 leading-relaxed text-lg break-words">
              {t('about.researchDesc')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}