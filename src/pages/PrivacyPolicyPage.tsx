import { useLanguage } from '../contexts/LanguageContext'

export const PrivacyPolicyPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-8 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('footer.privacy')}</h1>
            <div className="w-20 h-1 bg-orange-400 rounded-full"></div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
               <p className="text-gray-600 leading-relaxed mb-6 bg-gray-50 rounded-xl p-6 border border-gray-100 text-justify">
                 {t('privacy.intro')}
               </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                {t('privacy.responsible')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p className="font-medium text-gray-900">Inclusion Diversity Equality Action (IDEA) Institute of Legal Research</p>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="font-medium text-gray-900">{t('privacy.switzerland')}</p>
                    <p>Sinserstrasse 67, CH–6330 Cham, Zug</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:info@ideainstitute.ch" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition">
                        info@ideainstitute.ch
                      </a>
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="font-medium text-gray-900">{t('privacy.germany')}</p>
                    <p>Ernst-Reuter-Str. 12, 79618 Rheinfelden (Baden)</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:info@ideainstitute.de" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition">
                        info@ideainstitute.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                {t('privacy.dataCollection')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                   {t('privacy.dataCollection1')}
                 </p>
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('privacy.dataCollection2')}
                 </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                {t('privacy.dataUse')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('privacy.dataUseText')}
                 </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                {t('privacy.storage')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('privacy.storageText')}
                 </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                {t('privacy.rights')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('privacy.rightsText')}
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
