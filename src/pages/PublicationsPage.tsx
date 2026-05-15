import { useState, useEffect } from 'react'
import { getAdminPublications, AdminPublication } from '../utils/adminStorage'

export const PublicationsPage = () => {
  const [adminPubs, setAdminPubs] = useState<AdminPublication[]>([])

  useEffect(() => {
    setAdminPubs(getAdminPublications())
  }, [])

  const getAdminPubsForCategory = (cat: string) =>
    adminPubs.filter(p => p.category === cat)

  const renderAdminPublications = (category: string) => {
    const pubs = getAdminPubsForCategory(category)
    if (pubs.length === 0) return null
    return pubs.map(pub => (
      <li key={pub.id} className="text-black leading-relaxed flex items-start gap-2 text-justify">
        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
        <a href={pub.dataUrl} target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
          {pub.title}
        </a>
      </li>
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* IDEA Legal Research Paper Series */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
                IDEA Legal Research Paper Series
              </h2>
            </div>

            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              The IDEA Legal Research Paper Series is an academic publication initiative of the IDEA Institute dedicated to comparative and transnational legal research on sexuality, gender identity, equality, migration, asylum, and related socio-legal developments.
            </p>
            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              Registered in Germany under ISSN 2943-4068, the series publishes research papers, analytical reports, policy commentary, and interdisciplinary legal scholarship produced by the Institute and affiliated researchers.
            </p>
            <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
              The series aims to support accessible, research-driven engagement with emerging and underexplored areas of comparative law and transnational legal studies.
            </p>
            <p className="text-black text-lg leading-relaxed mb-6 break-words text-justify">
              All publications are released under the Creative Commons Attribution License (CC BY 4.0), permitting reuse and adaptation with appropriate attribution.
            </p>

            <p className="text-black text-lg leading-relaxed mb-2">
              For inquiries, submissions, or collaboration, please contact:
            </p>
            <p className="text-black font-medium">Dr. Yeshwant Naik</p>
            <p className="text-black">
              <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline font-medium">
                info@ideainstitute.de
              </a>
            </p>
          </div>

          {/* Research Publications */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
                Research Publications
              </h2>
            </div>
             <p className="text-black text-lg leading-relaxed mb-8 break-words text-justify">
               The IDEA Institute produces academic and analytical work across its core research areas.
             </p>

              {/* Comparative Legal Analysis */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                  Comparative Legal Analysis
                </h3>
                <p className="text-black leading-relaxed mb-4 text-justify">
                  Research examining legal developments across jurisdictions and comparative legal systems.
                </p>
                <ul>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Comparative Legal Analysis/A critique of Germany Prostitution.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      A Critique of Germany's Prostitution Legislation
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Comparative Legal Analysis/Comparative and Transnational LGBTQ+ Legal Studies.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Comparative and Transnational LGBTIQ+ Legal Studies: Toward a South Asia–Anchored Global Research Framework
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Comparative Legal Analysis/Jane Kaushik Judgment.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Jane Kaushik Judgment: A Paradigm Shift Towards Substantive Equality for Transgender Persons in India
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Comparative Legal Analysis/Why are heterosexuals guilty toward homosexuals.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Why Are Heterosexuals Guilty Toward Homosexuals?
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Comparative Legal Analysis/LGBTQ Rights and the Anti-LGBTQ Propaganda Law in Kazakhstan.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      LGBTQ Rights and the Anti-LGBTQ Propaganda Law in Kazakhstan: Legal, Social, and Human Rights Analysis
                    </a>
                  </li>
                  {renderAdminPublications('Comparative Legal Analysis')}
                </ul>
              </div>

              {/* Migration, Asylum & Transnational Law */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                  Migration, Asylum &amp; Transnational Law
                </h3>
                <p className="text-black leading-relaxed mb-4 text-justify">
                  Research exploring migration, mobility, asylum systems, and cross-border legal developments.
                </p>
                <ul>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Migration, Asylum & Transnational Law/Review Artikel TV Show.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Review Article: Markus Lanz TV Discussion on Migration Issues (26.03.2024)
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Migration, Asylum &amp; Transnational Law/Evolving Dynamics of Stockholm’s LGBTQ+ Scene.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Evolving Dynamics of Stockholm's LGBTQ+ Scene: Observations and Insights
                    </a>
                  </li>
<li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Migration, Asylum &amp; Transnational Law/UNPACKING PLANET ROMEO'S LGBTQ+.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Unpacking Planet Romeo's LGBTQ+ U.S. Presidential Election Survey Findings
                    </a>
                  </li>
                  {renderAdminPublications('Migration, Asylum & Transnational Law')}
                </ul>
              </div>

              {/* Law & Lived Experience */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                  Law &amp; Lived Experience
                </h3>
                <p className="text-black leading-relaxed mb-4 text-justify">
                  Socio-legal research examining the relationship between formal legal protections and everyday realities.
                </p>
                <ul>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Law & Lived Experience/Invisible Lives Male Sex Worker.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Invisible Lives: Male Sex Workers in India
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Law & Lived Experience/Why Is Homosexuality Still Stigmatized Despite Legalization in Germany.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Why Does Homosexuality Remain Stigmatised Despite Legalisation in Germany and Other Developed Countries?
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Law & Lived Experience/Against Heterosexist Arrogance.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Against Heterosexist Arrogance: Supporting the Identity Formation of LGBTIQA+ Children and Young People
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Law & Lived Experience/Identity in Focus.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Identity in Focus: Why Some Gay Voters Support Far-Right Parties in Germany
                    </a>
                  </li>
                  {renderAdminPublications('Law & Lived Experience')}
                </ul>
              </div>

              {/* Violence, Protection & Legal Gaps */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                  Violence, Protection &amp; Legal Gaps
                </h3>
                <p className="text-black leading-relaxed mb-4 text-justify">
                  Research analysing violence, exclusion, and institutional protection failures affecting sexual and gender minorities.
                </p>
                <ul>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Violence, Protection & Legal Gaps/Human Rights Violations Against the LGBTQ+ Community in Iran.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Human Rights Violations Against the LGBTQ+ Community in Iran
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Violence, Protection & Legal Gaps/Navigating the Stigma Tim Krüger's Death.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Navigating the Stigma: Tim Krüger's Death and Its Broader Implications
                    </a>
                  </li>
<li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Violence, Protection & Legal Gaps/Austria's Constitutional Court Recognizes Non-Binary People.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Austria's Constitutional Court Recognises Non-Binary People as a Matter of Human Rights
                    </a>
                  </li>
                  {renderAdminPublications('Violence, Protection & Legal Gaps')}
                </ul>
              </div>

              {/* Policy & Commentary */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                  Policy &amp; Commentary
                </h3>
                <p className="text-black leading-relaxed mb-4 text-justify">
                  Critical legal and social commentary on contemporary developments in law, policy, and public discourse.
                </p>
                <ul>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/Policy and Commentary/Review of the EU LGBTIQ+ Equality Strategy 2020-2025 and 2026 -2030.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Review of the EU LGBTIQ+ Equality Strategy 2020–2025 and 2026–2030
                    </a>
                  </li>
                  {renderAdminPublications('Policy & Commentary')}
                </ul>
              </div>

              {/* German Publications */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                  German Publications
                </h3>
                <p className="text-black leading-relaxed mb-4 text-justify">
                  Selected German-language research and commentary.
                </p>
                <ul>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/German Publications/Ablehnung einer Überprüfung Entscheidung des Obersten Gerichtshofs zum Same-Sex-.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Ablehnung einer Überprüfung: Entscheidung des Obersten Gerichtshofs zum Same-Sex-Marriage in Indien
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/German Publications/Entwickelt sich Deutschland zu einem hybriden Regime.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Entwickelt sich Deutschland zu einem hybriden Regime vor dem Hintergrund politischer und sozialer Veränderungen?
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/German Publications/Navigating the Stigma Tim Krüger's Death.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Navigieren des Stigmas: Der Tod von Tim Krüger und seine umfassenderen Implikationen
                    </a>
                  </li>
                  <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <a href="/images/Publications/German Publications/Wider der heterosexistischen Arroganz.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                      Wider der heterosexistischen Arroganz
                    </a>
                  </li>
                  {renderAdminPublications('German Publications')}
                </ul>
              </div>
          </div>

          {/* Accessing Publications */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
                Accessing Publications
              </h2>
            </div>
            <p className="text-black text-lg leading-relaxed break-words text-justify">
              Publications are available through the Institute's publication platform and are organised according to thematic research areas.
            </p>
            <p className="text-black text-lg leading-relaxed break-words mt-4 text-justify">
              Additional publication details, abstracts, and downloadable versions will be made available progressively through the website.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}