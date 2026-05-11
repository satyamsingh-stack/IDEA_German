import { useLanguage } from '../contexts/LanguageContext'

export const DirectorPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="relative py-12 md:py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Name & Role */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-3 leading-tight">
                {t('director.name')}
              </h2>
              <p className="text-[#1a2744] text-lg leading-relaxed">
                {t('director.role')}
              </p>
            </div>

            {/* Biography */}
            <div className="mb-12">
              <p className="text-[#1a2744] text-lg leading-relaxed mb-4 break-words">
                {t('director.bio1')}
              </p>
              <p className="text-[#1a2744] text-lg leading-relaxed break-words">
                {t('director.bio2')}
              </p>
            </div>

            {/* Research Interests */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#1a2744] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
                {t('director.researchInterests')}
              </h3>
              <ul>
                {[
                  'director.interest1',
                  'director.interest2',
                  'director.interest3',
                  'director.interest4',
                  'director.interest5',
                  'director.interest6'
                ].map((key) => (
                  <li key={key} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="break-words">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodological Approach */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#1a2744] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
                {t('director.methodology')}
              </h3>
              <p className="text-[#1a2744] text-lg leading-relaxed mb-6 break-words">
                {t('director.methodIntro')}
              </p>
              <ul>
                {[
                  'director.method1',
                  'director.method2',
                  'director.method3',
                  'director.method4'
                ].map((key) => (
                  <li key={key} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="break-words">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selected Publications */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a2744] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
                {t('director.publications')}
              </h3>

              {/* Books & Monographs */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#1a2744] mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.booksTitle')}
                </h4>
                <ul>
                  {['director.book1', 'director.book2', 'director.book3'].map((key) => (
                    <li key={key} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span className="break-words">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Edited Volumes & Book Chapters */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#1a2744] mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.editedTitle')}
                </h4>
                <ul>
                  {['director.chapter1', 'director.chapter2', 'director.chapter3', 'director.chapter4'].map((key) => (
                    <li key={key} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span className="break-words">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Research Reports */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#1a2744] mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.reportsTitle')}
                </h4>
                <ul>
                  {['director.report1'].map((key) => (
                    <li key={key} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span className="break-words">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commentary & Public Writing */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#1a2744] mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.commentaryTitle')}
                </h4>
                <ul>
                  {['director.comment1', 'director.comment2'].map((key) => (
                    <li key={key} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span className="break-words">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Journal Articles */}
              <div>
                <h4 className="text-xl font-bold text-[#1a2744] mb-4 relative pl-4 border-l-2 border-brand-orange">
                  {t('director.articlesTitle')}
                </h4>
                <ul>
                  {['director.article1'].map((key) => (
                    <li key={key} className="text-[#1a2744] leading-relaxed flex items-start gap-2">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span className="break-words">{t(key)}</span>
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
