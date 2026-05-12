import { useLanguage } from '../contexts/LanguageContext'

export const TermsAndConditionsPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-8 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('footer.terms')}</h1>
            <div className="w-20 h-1 bg-orange-400 rounded-full"></div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                {t('terms.scope')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-medium text-gray-600 mb-3">{t('terms.scopeTitle')}</h3>
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('terms.scopeText')}
                 </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                {t('terms.contract')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('terms.contractText')}
                 </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                {t('terms.digitalProducts')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('terms.digitalProductsText')}
                 </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                {t('terms.usageRights')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('terms.usageRightsText')}
                 </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                {t('terms.disclaimer')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('terms.disclaimerText')}
                 </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                {t('terms.applicableLaw')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('terms.applicableLawText')}
                 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2026 Institute of Legal Research. {t('footer.allRights')}
          </p>
        </div>
      </div>
    </div>
  )
}
