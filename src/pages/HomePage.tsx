import { useLanguage } from '../contexts/LanguageContext'

export const HomePage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Main Title Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight mb-6">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8">
              {t('home.subtitle')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t('home.description')}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              {t('home.whatWeDo')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('home.whatWeDoDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">
                {t('home.whatWeDo.1')}
              </h3>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">
                {t('home.whatWeDo.2')}
              </h3>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">
                {t('home.whatWeDo.3')}
              </h3>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              {t('home.whatWeDoBottom')}
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              {t('home.whyThisMatters')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('home.whyDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
                {t('home.whyFor')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('home.why1')}
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
                {t('home.whyFor')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('home.why2')}
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                {t('home.whyFor')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('home.why3')}
              </p>
            </div>
          </div>
          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-lg">
            <p className="text-gray-300 leading-relaxed">
              {t('home.whyBottom')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              {t('home.ourWork')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-black mb-1">
                  {t('home.ourWork1')}
                </h3>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-black mb-1">
                  {t('home.ourWork2')}
                </h3>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-black mb-1">
                  {t('home.ourWork3')}
                </h3>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-black mb-1">
                  {t('home.ourWork4')}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              {t('home.startHere')}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/forschung"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition font-semibold text-sm uppercase tracking-wider"
            >
              <span>👉</span> {t('home.startResearch')}
            </a>
            <a
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition font-semibold text-sm uppercase tracking-wider"
            >
              <span>👉</span> {t('home.startInsights')}
            </a>
            <a
              href="/publikationen"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition font-semibold text-sm uppercase tracking-wider"
            >
              <span>👉</span> {t('home.startPublications')}
            </a>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              {t('home.getInvolved')}
            </h2>
          </div>
          <div className="space-y-4 text-center">
            <p className="text-gray-700 leading-relaxed">
              {t('home.getInvolvedDesc')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('home.newsletter')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('home.contact')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}