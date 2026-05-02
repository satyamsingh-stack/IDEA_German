import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export const DirectorDetailSection = () => {
  const [openAccordion, setOpenAccordion] = useState('teaching')
  const { t } = useLanguage()

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? '' : section)
  }

  const teachingAreas = [
    t('teaching.humanRights'),
    t('teaching.publicIntlLaw'),
    t('teaching.constitutional'),
    t('teaching.anthropology'),
    t('teaching.philosophy'),
    t('teaching.technofeudalism'),
    t('teaching.postcolonialism'),
    t('teaching.othering'),
    t('teaching.migration'),
    t('teaching.neocolonialism'),
    t('teaching.heterosexism'),
    t('teaching.gender'),
    t('teaching.sexuality')
  ]

  return (
    <section id="director" className="py-12 md:py-20 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Director Profile */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          <h4 className="text-sm md:text-base font-bold text-brand-orange uppercase tracking-wider mb-2">
            {t('director.title')}
          </h4>
          <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6 md:mb-8">
            Prof. Dr. (jur.) Yeshwant Naik
          </h3>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Director Image */}
            <div className="md:col-span-1">
              <img
                src="https://ideainstitute.ch/wp-content/uploads/2025/10/11-300x368.png"
                alt="Prof. Dr. Yeshwant Naik"
                className="w-full max-w-[200px] rounded-lg shadow-md"
              />
            </div>

            {/* Director Info */}
            <div className="md:col-span-2 space-y-6">
              {/* Teaching & Research Areas Accordion */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleAccordion('teaching')}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-brand-black hover:bg-gray-50 transition"
                >
                  <span>{t('director.teachingResearch')}</span>
                  {openAccordion === 'teaching' ? (
                    <ChevronUp className="w-5 h-5 text-brand-orange" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openAccordion === 'teaching' && (
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {teachingAreas.join(' · ')}
                    </p>
                  </div>
                )}
              </div>

              {/* Publications Accordion */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleAccordion('publications')}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-brand-black hover:bg-gray-50 transition"
                >
                  <span>{t('director.publications')}</span>
                  {openAccordion === 'publications' ? (
                    <ChevronUp className="w-5 h-5 text-brand-orange" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openAccordion === 'publications' && (
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                      <div>
                        <h5 className="font-bold text-brand-black mb-2">{t('director.books')}</h5>
                        <ul className="space-y-3 text-sm">
                          <li className="text-gray-700">
                            <span className="font-semibold">2026</span> ({t('director.forthcoming')}): <em>Literature and the Legal Imaginary: Equality vs. Othering, Exclusion and Discrimination in Indian law and Literature</em>
                          </li>
                          <li className="text-gray-700">
                            <span className="font-semibold">2023</span>: <em>LGBTIQ+ curriculum in Higher Education: Issues and Concerns</em>. Münster University Publication
                          </li>
                          <li className="text-gray-700">
                            <span className="font-semibold">2022</span>: <em>The Subaltern Speak</em>. Notin Press.
                          </li>
                          <li className="text-gray-700">
                            <span className="font-semibold">2022</span>: "Transgender Family Rights Issues and Concerns: A Comparative Legal Analysis of Asia and Europe," in <em>Exploring Norms and Families Across the Globe</em>. Lexington Books.
                          </li>
                          <li className="text-gray-700">
                            <span className="font-semibold">2021</span>: <em>Domestic Violence against Male Same-Sex Partners in the EU with special reference to Refugee and Migrant Gay Men in Germany</em>. Springer.
                          </li>
                          <li className="text-gray-700">
                            <span className="font-semibold">2017</span>: <em>Homosexuality in the Jurisprudence of the Supreme Court of India</em>. Springer.
                          </li>
                          <li className="text-gray-700">
                            <span className="font-semibold">2014</span>: <em>Law Beyond Gender</em>. Sahodari Foundation.
                          </li>
                          <li className="text-gray-700">
                            <span className="font-semibold">2013</span>: <em>Textbook on International Law and Human Rights</em>. Pondicherry, India: Southern Bookhouse.
                          </li>
                          <li className="text-gray-700">
                            <span className="font-semibold">2011</span>: <em>Law and You</em>. co-authored by S. Nadkarni. India: Kare College.
                          </li>
                          <li className="text-gray-700">
                            <span className="font-semibold">2006</span>: <em>The Child</em> (Konkani language), India: Aasra Publication.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
