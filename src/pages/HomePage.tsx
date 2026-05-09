import { useLanguage } from '../contexts/LanguageContext'

export const HomePage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Main Title Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-orange-50/30 to-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.03)_0%,transparent_50%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight mb-6 tracking-tight">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
              {t('home.subtitle')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t('home.description')}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                {t('home.whatWeDo')}
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              {t('home.whatWeDoDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              { key: 1, icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { key: 2, icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" },
              { key: 3, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            ].map((item) => (
            <div key={item.key} className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-orange/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">
                {t(`home.whatWeDo.${item.key}`)}
              </h3>
            </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-brand-orange/30 transition-colors duration-300">
            <p className="text-gray-700 leading-relaxed">
              {t('home.whatWeDoBottom')}
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-orange-50/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,102,0,0.04)_0%,transparent_40%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                {t('home.whyThisMatters')}
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              {t('home.whyDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="group relative bg-white p-6 md:p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400"></div>
              <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">
                {t('home.whyFor')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('home.why1')}
              </p>
            </div>
            <div className="group relative bg-white p-6 md:p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400"></div>
              <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">
                {t('home.whyFor')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('home.why2')}
              </p>
            </div>
            <div className="group relative bg-white p-6 md:p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400"></div>
              <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">
                {t('home.whyFor')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('home.why3')}
              </p>
            </div>
          </div>
          <div className="relative bg-gradient-to-r from-brand-black to-gray-900 p-6 md:p-8 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl"></div>
            <p className="text-gray-300 leading-relaxed relative z-10">
              {t('home.whyBottom')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,102,0,0.03)_0%,transparent_40%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                {t('home.ourWork')}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {[
              { key: 1 },
              { key: 2 },
              { key: 3 },
              { key: 4 },
            ].map((item) => (
            <div key={item.key} className="group bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-orange/20 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-base font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.key}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-black mb-1 group-hover:text-brand-orange transition-colors duration-300">
                    {t(`home.ourWork${item.key}`)}
                  </h3>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                {t('home.startHere')}
              </h2>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/forschung"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-sm uppercase tracking-[0.15em] shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">👉</span>
              {t('home.startResearch')}
            </a>
            <a
              href="/insights"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-sm uppercase tracking-[0.15em] shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">👉</span>
              {t('home.startInsights')}
            </a>
            <a
              href="/publikationen"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-sm uppercase tracking-[0.15em] shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">👉</span>
              {t('home.startPublications')}
            </a>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50/50 to-white border-t border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.03)_0%,transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                {t('home.getInvolved')}
              </h2>
            </div>
          </div>
          <div className="space-y-5 text-center max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('home.getInvolvedDesc')}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('home.newsletter')}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('home.contact')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}