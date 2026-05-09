import { useLanguage } from '../contexts/LanguageContext'

export const ExplainersPage = () => {
  const { t } = useLanguage()

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('nav.explainers')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Headline */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              {t('explainers.title')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
              {t('explainers.headline')}
            </p>
          </div>

          {/* What is SOGI Law? */}
          <div className="mb-16 border-t border-gray-200 pt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
              {t('explainers.sogi.title')}
            </h3>

            <div className="space-y-6 max-w-4xl">
              <p className="text-gray-700 leading-relaxed">
                {t('explainers.sogi.intro')}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {t('explainers.sogi.what')}
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{t('explainers.sogi.aspect1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{t('explainers.sogi.aspect2')}</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed italic bg-gray-50 p-4 rounded-lg border-l-4 border-brand-orange">
                {t('explainers.sogi.simple')}
              </p>

              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.sogi.includes')}
                </h4>
                <ul className="space-y-3 ml-6 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.sogi.item1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.sogi.item2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.sogi.item3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.sogi.item4')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-orange">
                <h4 className="text-xl font-bold text-brand-black mb-3">
                  {t('explainers.sogi.why')}
                </h4>
                <p className="text-gray-700 mb-4">
                  {t('explainers.sogi.affects')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.sogi.effect1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.sogi.effect2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.sogi.effect3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.sogi.effect4')}</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">{t('explainers.sogi.note')}</p>
              </div>
            </div>
          </div>

          {/* How Does LGBTQ+ Asylum Work in Europe? */}
          <div className="mb-16 border-t border-gray-200 pt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
              {t('explainers.asylum.title')}
            </h3>

            <div className="space-y-6 max-w-4xl">
              <p className="text-gray-700 leading-relaxed">
                {t('explainers.asylum.intro')}
              </p>

              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.asylum.apply')}
                </h4>
                <ul className="space-y-3 ml-6 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.asylum.reason1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.asylum.reason2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.asylum.reason3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.asylum.reason4')}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.asylum.process')}
                </h4>
                <ol className="space-y-3 ml-6 mb-6 list-decimal">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">{t('explainers.asylum.step1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">{t('explainers.asylum.step2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">{t('explainers.asylum.step3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">{t('explainers.asylum.step4')}</span>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.asylum.challenges')}
                </h4>
                <ul className="space-y-3 ml-6 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.asylum.challenge1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.asylum.challenge2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.asylum.challenge3')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-orange">
                <h4 className="text-xl font-bold text-brand-black mb-3">
                  {t('explainers.asylum.why')}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {t('explainers.asylum.note')}
                </p>
              </div>
            </div>
          </div>

          {/* Why Are LGBTQ+ Rights Different Across Countries? */}
          <div className="mb-16 border-t border-gray-200 pt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
              {t('explainers.differences.title')}
            </h3>

            <div className="space-y-6 max-w-4xl">
              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.differences.shaped')}
                </h4>
                <ul className="flex flex-wrap gap-2 mb-6">
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.differences.factor1')}</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.differences.factor2')}</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.differences.factor3')}</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.differences.factor4')}</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.differences.factor5')}</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed italic bg-gray-50 p-4 rounded-lg border-l-4 border-brand-orange">
                {t('explainers.differences.result')}
              </p>

              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.differences.approaches')}
                </h4>
                <p className="text-gray-600 mb-4">
                  {t('explainers.differences.world')}
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.differences.level1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.differences.level2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.differences.level3')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-orange">
                <h4 className="text-xl font-bold text-brand-black mb-3">
                  {t('explainers.differences.why')}
                </h4>
                <p className="text-gray-700 mb-4">
                  {t('explainers.differences.uncertainty')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.differences.impact1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.differences.impact2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.differences.impact3')}</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">{t('explainers.differences.note')}</p>
              </div>
            </div>
          </div>

          {/* What Happens When Rights Do Not Travel Across Borders? */}
          <div className="mb-16 border-t border-gray-200 pt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
              {t('explainers.travel.title')}
            </h3>

            <div className="space-y-6 max-w-4xl">
              <p className="text-gray-700 leading-relaxed">
                {t('explainers.travel.intro')}
              </p>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.travel.example')}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.travel.consequence1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.travel.consequence2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.travel.consequence3')}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.travel.possible')}
                </h4>
                <p className="text-gray-600 mb-4">
                  {t('explainers.travel.affects')}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.travel.area1')}</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.travel.area2')}</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.travel.area3')}</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.travel.area4')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-orange">
                <h4 className="text-xl font-bold text-brand-black mb-3">
                  {t('explainers.travel.why')}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {t('explainers.travel.note')}
                </p>
              </div>
            </div>
          </div>

          {/* What is the Gap Between Law and Lived Reality? */}
          <div className="mb-12 border-t border-gray-200 pt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
              {t('explainers.gap.title')}
            </h3>

            <div className="space-y-6 max-w-4xl">
              <p className="text-gray-700 leading-relaxed">
                {t('explainers.gap.intro')}
              </p>

              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.gap.country')}
                </h4>
                <ul className="flex flex-wrap gap-2 mb-4">
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.gap.can1')}</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.gap.can2')}</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.gap.can3')}</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-brand-orange">
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.gap.yet')}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.gap.experience1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.gap.experience2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.gap.experience3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.gap.experience4')}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('explainers.gap.whyExists')}
                </h4>
                <p className="text-gray-600 mb-4">
                  {t('explainers.gap.lawsAlone')}
                </p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.gap.change1')}</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.gap.change2')}</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">{t('explainers.gap.change3')}</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-orange">
                <h4 className="text-xl font-bold text-brand-black mb-3">
                  {t('explainers.gap.whyMatters')}
                </h4>
                <p className="text-gray-700 mb-4">
                  {t('explainers.gap.helps')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.gap.helps1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.gap.helps2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('explainers.gap.helps3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
