import { useLanguage } from '../contexts/LanguageContext'

export const PublicationsPage = () => {
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
                {t('nav.publications')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-12 md:py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Series Info */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">
                {t('publications.seriesTitle')}
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl">
              <p className="text-gray-700 text-lg leading-relaxed break-words">
                {t('publications.seriesDesc1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed break-words">
                {t('publications.seriesDesc2')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed break-words">
                {t('publications.seriesDesc3')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed break-words">
                {t('publications.seriesDesc4')}
              </p>
            </div>

            <div className="mt-10 relative bg-gradient-to-r from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange/20 transition-colors duration-300 max-w-4xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-bold text-brand-black mb-4 relative z-10">
                {t('publications.contactTitle')}
              </h3>
              <div className="space-y-2 relative z-10">
                <p className="text-gray-700 font-medium">{t('publications.contactName')}</p>
                <p className="text-gray-700">
                  <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline font-medium">
                    info@ideainstitute.de
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Research Publications */}
          <div className="mb-16 border-t border-gray-200 pt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">
                {t('publications.researchTitle')}
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-4xl break-words">
              {t('publications.researchDesc')}
            </p>

            {/* Category 1: Legal Analysis */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                {t('publications.category1')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl break-words">
                {t('publications.category1Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                {[
                  "A Critique of Germany's Prostitution Legislation",
                  "Comparative and Transnational LGBTIQ+ Legal Studies: Toward a South Asia–Anchored Global Research Framework",
                  "Jane Kaushik Judgment: A Paradigm Shift Towards Substantive Equality for Transgender Persons in India",
                  "Why Are Heterosexuals Guilty Toward Homosexuals?",
                  "LGBTQ Rights and the Anti-LGBTQ Propaganda Law in Kazakhstan: Legal, Social, and Human Rights Analysis"
                ].map((publication, index) => (
                  <li key={index} className="group flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words group-hover:text-brand-orange transition-colors duration-300">{publication}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2: Migration, Asylum & Transnational Law */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                {t('publications.category2')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl break-words">
                {t('publications.category2Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                {[
                  "Review Article: Markus Lanz TV Discussion on Migration Issues (26.03.2024)",
                  "Evolving Dynamics of Stockholm's LGBTQ+ Scene: Observations and Insights",
                  "Unpacking Planet Romeo's LGBTQ+ U.S. Presidential Election Survey Findings"
                ].map((publication, index) => (
                  <li key={index} className="group flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words group-hover:text-brand-orange transition-colors duration-300">{publication}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 3: Law & Lived Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                {t('publications.category3')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl break-words">
                {t('publications.category3Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                {[
                  "Invisible Lives: Male Sex Workers in India",
                  "Why Does Homosexuality Remain Stigmatised Despite Legalisation in Germany and Other Developed Countries?",
                  "Against Heterosexist Arrogance: Supporting the Identity Formation of LGBTIQA+ Children and Young People",
                  "Identity in Focus: Why Some Gay Voters Support Far-Right Parties in Germany"
                ].map((publication, index) => (
                  <li key={index} className="group flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words group-hover:text-brand-orange transition-colors duration-300">{publication}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 4: Violence, Protection & Legal Gaps */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                {t('publications.category4')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl break-words">
                {t('publications.category4Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                {[
                  "Human Rights Violations Against the LGBTQ+ Community in Iran",
                  "Navigating the Stigma: Tim Krüger's Death and Its Broader Implications",
                  "Austria's Constitutional Court Recognises Non-Binary People as a Matter of Human Rights"
                ].map((publication, index) => (
                  <li key={index} className="group flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words group-hover:text-brand-orange transition-colors duration-300">{publication}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 5: Policy & Commentary */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                {t('publications.category5')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl break-words">
                {t('publications.category5Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                {[
                  "Review of the EU LGBTIQ+ Equality Strategy 2020–2025 and 2026–2030",
                  "German Postdocs in Poverty While Germany Defends Academic Freedom Abroad: A Structural Failure in German Academia"
                ].map((publication, index) => (
                  <li key={index} className="group flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words group-hover:text-brand-orange transition-colors duration-300">{publication}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* German-Language Publications */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4 relative pl-4 border-l-2 border-brand-orange">
                {t('publications.germanTitle')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl break-words">
                {t('publications.germanDesc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                {[
                  "Ablehnung einer Überprüfung: Entscheidung des Obersten Gerichtshofs zum Same-Sex-Marriage in Indien",
                  "Entwickelt sich Deutschland zu einem hybriden Regime vor dem Hintergrund politischer und sozialer Veränderungen?",
                  "Navigieren des Stigmas: Der Tod von Tim Krüger und seine umfassenderen Implikationen"
                ].map((publication, index) => (
                  <li key={index} className="group flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed break-words group-hover:text-brand-orange transition-colors duration-300">{publication}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Access Section */}
          <div className="border-t border-gray-200 pt-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black tracking-tight">
                  {t('publications.accessTitle')}
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed break-words">
                {t('publications.accessDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
