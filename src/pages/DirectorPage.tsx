import { useLanguage } from '../contexts/LanguageContext'

export const DirectorPage = () => {
  const { t } = useLanguage()

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('nav.director')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-2">
                {t('director.title')}
              </h2>
            </div>

            {/* Name & Title */}
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-2">
                {t('director.name')}
              </h3>
              <p className="text-brand-orange font-semibold text-lg uppercase tracking-wider">
                {t('director.role')}
              </p>
            </div>

            {/* Biography */}
            <div className="mb-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('director.bio1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('director.bio2')}
              </p>
            </div>

            {/* Research Interests */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                {t('director.researchInterests')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'director.interest1',
                  'director.interest2',
                  'director.interest3',
                  'director.interest4',
                  'director.interest5',
                  'director.interest6'
                ].map((key) => (
                  <span
                    key={key}
                    className="bg-gray-100 px-5 py-2 rounded-full text-gray-700 font-medium"
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
            </div>

            {/* Methodological Approach */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                {t('director.methodology')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('director.methodIntro')}
              </p>
              <ul className="space-y-3">
                {[
                  'director.method1',
                  'director.method2',
                  'director.method3',
                  'director.method4'
                ].map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-gray-700 leading-relaxed">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selected Publications */}
            <div>
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                {t('director.publications')}
              </h3>

              {/* Books & Monographs */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('director.booksTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.book1', 'director.book2', 'director.book3'].map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Edited Volumes & Book Chapters */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('director.editedTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.chapter1', 'director.chapter2', 'director.chapter3', 'director.chapter4'].map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Research Reports */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('director.reportsTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.report1'].map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commentary & Public Writing */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('director.commentaryTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.comment1', 'director.comment2'].map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Journal Articles */}
              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4">
                  {t('director.articlesTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.article1'].map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
