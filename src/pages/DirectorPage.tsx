import { useLanguage } from '../contexts/LanguageContext'

export const DirectorPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="pt-20 md:pt-28 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-[0.15em]">
                {t('nav.director')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-12 md:py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-2 tracking-tight">
                {t('director.title')}
              </h2>
            </div>

            {/* Photo & Name */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 leading-tight">
                {t('director.name')}
              </h3>
              <div className="inline-block">
                <p className="text-brand-orange font-semibold text-lg uppercase tracking-[0.15em] relative">
                  {t('director.role')}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-orange"></span>
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="mb-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-4 break-words">
                {t('director.bio1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed break-words">
                {t('director.bio2')}
              </p>
            </div>

            {/* Research Interests */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
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
                    className="group bg-gradient-to-r from-gray-50 to-white px-5 py-2 rounded-full text-gray-700 font-medium border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all duration-300"
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
            </div>

            {/* Methodological Approach */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
                {t('director.methodology')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 break-words">
                {t('director.methodIntro')}
              </p>
              <ul className="space-y-3">
                {[
                  'director.method1',
                  'director.method2',
                  'director.method3',
                  'director.method4'
                ].map((key) => (
                  <li key={key} className="flex items-start gap-3 group">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selected Publications */}
            <div>
              <h3 className="text-2xl font-bold text-brand-black mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
                {t('director.publications')}
              </h3>

              {/* Books & Monographs */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.booksTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.book1', 'director.book2', 'director.book3'].map((key) => (
                    <li key={key} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="text-gray-700 leading-relaxed break-words">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Edited Volumes & Book Chapters */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.editedTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.chapter1', 'director.chapter2', 'director.chapter3', 'director.chapter4'].map((key) => (
                    <li key={key} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="text-gray-700 leading-relaxed break-words">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Research Reports */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.reportsTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.report1'].map((key) => (
                    <li key={key} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="text-gray-700 leading-relaxed break-words">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commentary & Public Writing */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.commentaryTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.comment1', 'director.comment2'].map((key) => (
                    <li key={key} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="text-gray-700 leading-relaxed break-words">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Journal Articles */}
              <div>
                <h4 className="text-xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.articlesTitle')}
                </h4>
                <ul className="space-y-3">
                  {['director.article1'].map((key) => (
                    <li key={key} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="text-gray-700 leading-relaxed break-words">{t(key)}</span>
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
