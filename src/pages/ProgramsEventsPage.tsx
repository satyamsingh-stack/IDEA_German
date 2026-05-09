import { useLanguage } from '../contexts/LanguageContext'

export const ProgramsEventsPage = () => {
  const { t } = useLanguage()

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('nav.programsEvents')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              {t('nav.programsEvents')}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-4xl">
              {t('programsEvents.description1')}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-4xl">
              {t('programsEvents.description2')}
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
              {t('programsEvents.activitiesTitle')}
            </h3>

            <ul className="space-y-4 mb-12 max-w-4xl">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700 text-lg leading-relaxed">
                  {t('programsEvents.activity1')}
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700 text-lg leading-relaxed">
                  {t('programsEvents.activity2')}
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700 text-lg leading-relaxed">
                  {t('programsEvents.activity3')}
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700 text-lg leading-relaxed">
                  {t('programsEvents.activity4')}
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700 text-lg leading-relaxed">
                  {t('programsEvents.activity5')}
                </span>
              </li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl border-l-4 border-brand-orange">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('programsEvents.upcoming')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
