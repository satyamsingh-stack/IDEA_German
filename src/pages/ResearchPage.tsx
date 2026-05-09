import { useLanguage } from '../contexts/LanguageContext'

export const ResearchPage = () => {
  const { t } = useLanguage()

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('nav.research')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Research Focus */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              {t('research.focusTitle')}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-4xl">
              {t('research.focusDesc')}
            </p>

            {/* Research Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Comparative Legal Systems */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {t('research.category1')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('research.category1Desc')}
                </p>
              </div>

              {/* Migration, Asylum & Transnational Law */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {t('research.category2')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('research.category2Desc')}
                </p>
              </div>

              {/* Law and Lived Experience */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {t('research.category3')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('research.category3Desc')}
                </p>
              </div>

              {/* Violence and Legal Protection */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {t('research.category4')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('research.category4Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Research Approach */}
          <div className="mb-16 border-t border-gray-200 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              {t('research.approachTitle')}
            </h2>

            <div className="mb-8 max-w-4xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('research.approachDesc')}
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.approach1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.approach2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.approach3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.approach4')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.approach5')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 max-w-4xl border-l-4 border-brand-orange">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('research.approachDesc2')}
              </p>
            </div>
          </div>

          {/* Research Projects */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              {t('research.projectsTitle')}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-4xl">
              {t('research.projectsDesc')}
            </p>

            {/* Ongoing Projects */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                {t('research.ongoingTitle')}
              </h3>
              <ul className="space-y-4 max-w-4xl">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.project1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.project2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.project3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.project4')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.project5')}</span>
                </li>
              </ul>
            </div>

            {/* Completed Projects */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                {t('research.completedTitle')}
              </h3>
              <ul className="space-y-4 max-w-4xl">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.project6')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{t('research.project7')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
