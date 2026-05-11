import { useLanguage } from '../contexts/LanguageContext'

export const AboutSection = () => {
  const { t } = useLanguage()

  return (
    <section id="innovation" className="py-8 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: Image left, Text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Left: Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/secondPage.webp"
              alt={t('page.innovation')}
              className="w-full h-auto md:h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="leading-relaxed">
            {/* Main Description */}
            <div className="mb-6 md:mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-3 md:mb-4">
                {t('innovation.description1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('innovation.description2')}
              </p>
            </div>

            {/* Initiative PRIDE IN LAW */}
            <div className="mt-6 md:mt-12 p-5 bg-gray-50 border-l-4 border-brand-orange">
              <p className="text-xl md:text-2xl font-bold text-brand-black mb-3">
                {t('innovation.prideInLaw')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                {t('innovation.prideInLawText1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('innovation.prideInLawText2')}
              </p>
            </div>

            {/* Programme and Teaching */}
            <div className="mt-6 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-4 md:mb-6">{t('innovation.programs')}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('innovation.programsIntro')}
              </p>
              <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700 mb-4 md:mb-6 ml-4">
                <li>{t('innovation.program1')}</li>
                <li>{t('innovation.program2')}</li>
                <li>{t('innovation.program3')}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-3">
                {t('innovation.coordinator')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('innovation.contact')}{' '}
                <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline font-medium">
                  info@ideainstitute.de
                </a>
                ,{' '}
                <a href="mailto:info@ideainstitute.ch" className="text-brand-orange hover:underline font-medium">
                  info@ideainstitute.ch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
