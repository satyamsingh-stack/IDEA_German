import { useLanguage } from '../contexts/LanguageContext'

export const PublicationsSection = () => {
  const { t } = useLanguage()

  const publications = [
    {
      title: t('pub.1.title'),
      category: t('pub.1.category')
    },
    {
      title: t('pub.2.title'),
      category: t('pub.2.category')
    },
    {
      title: t('pub.3.title'),
      category: t('pub.3.category')
    },
    {
      title: t('pub.4.title'),
      category: t('pub.4.category')
    },
    {
      title: t('pub.5.title'),
      category: t('pub.5.category')
    }
  ]

  return (
    <section id="publications" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-brand-black mb-4">{t('publications.title')}</h2>
        <p className="text-gray-700 mb-8 md:mb-12 text-lg">
          {t('publications.series')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition group"
            >
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-brand-orange text-white text-xs font-semibold">
                  {pub.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-brand-black group-hover:text-brand-orange transition mb-3">
                {pub.title}
              </h3>
              <button className="text-brand-orange font-semibold text-sm hover:underline">
                {t('director.readMore')}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white rounded-lg transition font-semibold"
          >
            {t('director.showAll')}
          </a>
        </div>
      </div>
    </section>
  )
}
