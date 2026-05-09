import { useLanguage } from '../contexts/LanguageContext'

export const PublicationsPage = () => {
  const { t } = useLanguage()

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('nav.publications')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-8">
              {t('publications.seriesTitle')}
            </h2>

            <div className="space-y-6 max-w-4xl">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('publications.seriesDesc1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('publications.seriesDesc2')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('publications.seriesDesc3')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('publications.seriesDesc4')}
              </p>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-xl max-w-4xl">
              <h3 className="text-xl font-bold text-brand-black mb-4">
                {t('publications.contactTitle')}
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">{t('publications.contactName')}</p>
                <p className="text-gray-700">
                  <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline">
                    info@ideainstitute.de
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              {t('publications.researchTitle')}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-4xl">
              {t('publications.researchDesc')}
            </p>

            {/* Comparative Legal Analysis */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                {t('publications.category1')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl">
                {t('publications.category1Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">A Critique of Germany's Prostitution Legislation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Comparative and Transnational LGBTIQ+ Legal Studies: Toward a South Asia–Anchored Global Research Framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Jane Kaushik Judgment: A Paradigm Shift Towards Substantive Equality for Transgender Persons in India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Why Are Heterosexuals Guilty Toward Homosexuals?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">LGBTQ Rights and the Anti-LGBTQ Propaganda Law in Kazakhstan: Legal, Social, and Human Rights Analysis</span>
                </li>
              </ul>
            </div>

            {/* Migration, Asylum & Transnational Law */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                {t('publications.category2')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl">
                {t('publications.category2Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Review Article: Markus Lanz TV Discussion on Migration Issues (26.03.2024)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Evolving Dynamics of Stockholm's LGBTQ+ Scene: Observations and Insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Unpacking Planet Romeo's LGBTQ+ U.S. Presidential Election Survey Findings</span>
                </li>
              </ul>
            </div>

            {/* Law & Lived Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                {t('publications.category3')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl">
                {t('publications.category3Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Invisible Lives: Male Sex Workers in India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Why Does Homosexuality Remain Stigmatised Despite Legalisation in Germany and Other Developed Countries?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Against Heterosexist Arrogance: Supporting the Identity Formation of LGBTIQA+ Children and Young People</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Identity in Focus: Why Some Gay Voters Support Far-Right Parties in Germany</span>
                </li>
              </ul>
            </div>

            {/* Violence, Protection & Legal Gaps */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                {t('publications.category4')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl">
                {t('publications.category4Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Human Rights Violations Against the LGBTQ+ Community in Iran</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Navigating the Stigma: Tim Krüger's Death and Its Broader Implications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Austria's Constitutional Court Recognises Non-Binary People as a Matter of Human Rights</span>
                </li>
              </ul>
            </div>

            {/* Policy & Commentary */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                {t('publications.category5')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl">
                {t('publications.category5Desc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Review of the EU LGBTIQ+ Equality Strategy 2020–2025 and 2026–2030</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">German Postdocs in Poverty While Germany Defends Academic Freedom Abroad: A Structural Failure in German Academia</span>
                </li>
              </ul>
            </div>

            {/* German-Language Publications */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                {t('publications.germanTitle')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-4xl">
                {t('publications.germanDesc')}
              </p>
              <ul className="space-y-3 max-w-4xl">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Ablehnung einer Überprüfung: Entscheidung des Obersten Gerichtshofs zum Same-Sex-Marriage in Indien</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Entwickelt sich Deutschland zu einem hybriden Regime vor dem Hintergrund politischer und sozialer Veränderungen?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">Navigieren des Stigmas: Der Tod von Tim Krüger und seine umfassenderen Implikationen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Accessing Publications */}
          <div className="border-t border-gray-200 pt-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
                {t('publications.accessTitle')}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('publications.accessDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
