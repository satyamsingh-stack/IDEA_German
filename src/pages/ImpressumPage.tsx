import { useLanguage } from '../contexts/LanguageContext'

export const ImpressumPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-8 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('footer.imprint')}</h1>
            <div className="w-20 h-1 bg-orange-400 rounded-full"></div>
          </div>

          <div className="p-8 md:p-12">
            {/* Legal Notice */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                {t('impressum.legalNotice')}
              </h2>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-medium text-gray-600 mb-3">{t('impressum.publishedBy')}</h3>
                <div className="space-y-2 text-gray-700 leading-relaxed">
                  <p className="font-medium text-gray-900">Inclusion Diversity Equality Action (IDEA) gGmbH,</p>
                  <p className="font-medium text-gray-900">{t('impressum.institute')}</p>
                  <p>Sinserstrasse 67,</p>
                  <p>CH – 6330 Cham, Zug,</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:kontakt@ideainstitute.ch" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition">
                      kontakt@ideainstitute.ch
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Text & Content */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                {t('impressum.textContent')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <p className="text-gray-700 leading-relaxed text-justify">
                   {t('impressum.textContentDesc')}
                 </p>
              </div>
            </div>

            {/* Concept & Implementation */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                {t('impressum.concept')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-gray-700 leading-relaxed">
                  <p className="font-medium text-gray-900 mb-1">Inclusion Diversity Equality Action (IDEA) gGmbH</p>
                  <p className="font-medium text-gray-900 mb-1">{t('impressum.institute')}</p>
                  <p>Sinserstrasse 67</p>
                  <p>CH – 6330 Cham, Zug</p>
                </div>
              </div>
            </div>

            {/* Warranty and Disclaimer */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                {t('impressum.disclaimer')}
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                   <p className="text-gray-700 leading-relaxed text-justify">
                     {t('impressum.disclaimer1')}
                   </p>
                 </div>
                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                   <p className="text-gray-700 leading-relaxed text-justify">
                     {t('impressum.disclaimer2')}
                   </p>
                 </div>
                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                   <p className="text-gray-700 leading-relaxed text-justify">
                     {t('impressum.disclaimer3')}
                   </p>
                 </div>
              </div>
            </div>

            {/* Copyright */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                {t('impressum.copyright')}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <div className="space-y-4 text-gray-700 leading-relaxed">
                   <p className="text-justify">
                     {t('impressum.copyrightText1')}
                   </p>
                   <p className="text-justify">
                     {t('impressum.copyrightText2')}
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2026 Institute of Legal Research. {t('footer.allRights')}
          </p>
        </div>
      </div>
    </div>
  )
}
