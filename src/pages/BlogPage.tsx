import { useLanguage } from '../contexts/LanguageContext'

export const BlogPage = () => {
  const { t } = useLanguage()

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('nav.blog')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              {t('blog.title')}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-4xl">
              {t('blog.headline')}
            </p>

            <div className="mb-8">
              <ul className="flex flex-wrap gap-3 mb-8">
                <li className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                  {t('blog.topic1')}
                </li>
                <li className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                  {t('blog.topic2')}
                </li>
                <li className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                  {t('blog.topic3')}
                </li>
                <li className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                  {t('blog.topic4')}
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-brand-orange max-w-4xl">
              <p className="text-gray-700 text-xl leading-relaxed font-medium">
                {t('blog.comingSoon')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
