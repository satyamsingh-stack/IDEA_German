export const PublicationsPage = () => {
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

            <p className="text-black text-lg leading-relaxed mb-4 break-words">
              The IDEA Legal Research Paper Series is an academic publication initiative of the IDEA Institute dedicated to comparative and transnational legal research on sexuality, gender identity, equality, migration, asylum, and related socio-legal developments.
            </p>
            <p className="text-black text-lg leading-relaxed mb-4 break-words">
              Registered in Germany under ISSN 2943-4068, the series publishes research papers, analytical reports, policy commentary, and interdisciplinary legal scholarship produced by the Institute and affiliated researchers.
            </p>
            <p className="text-black text-lg leading-relaxed mb-4 break-words">
              The series aims to support accessible, research-driven engagement with emerging and underexplored areas of comparative law and transnational legal studies.
            </p>
            <p className="text-black text-lg leading-relaxed mb-6 break-words">
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
            <p className="text-black text-lg leading-relaxed mb-8 break-words">
              The IDEA Institute produces academic and analytical work across its core research areas.
            </p>

            {/* Comparative Legal Analysis */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Comparative Legal Analysis
              </h3>
              <p className="text-black leading-relaxed mb-4">
                Research examining legal developments across jurisdictions and comparative legal systems.
              </p>
              <ul>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>A Critique of Germany's Prostitution Legislation</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comparative and Transnational LGBTIQ+ Legal Studies: Toward a South Asia–Anchored Global Research Framework</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Jane Kaushik Judgment: A Paradigm Shift Towards Substantive Equality for Transgender Persons in India</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Why Are Heterosexuals Guilty Toward Homosexuals?</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>LGBTQ Rights and the Anti-LGBTQ Propaganda Law in Kazakhstan: Legal, Social, and Human Rights Analysis</span>
                </li>
              </ul>
            </div>

            {/* Migration, Asylum & Transnational Law */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Migration, Asylum &amp; Transnational Law
              </h3>
              <p className="text-black leading-relaxed mb-4">
                Research exploring migration, mobility, asylum systems, and cross-border legal developments.
              </p>
              <ul>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Review Article: Markus Lanz TV Discussion on Migration Issues (26.03.2024)</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Evolving Dynamics of Stockholm's LGBTQ+ Scene: Observations and Insights</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Unpacking Planet Romeo's LGBTQ+ U.S. Presidential Election Survey Findings</span>
                </li>
              </ul>
            </div>

            {/* Law & Lived Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Law &amp; Lived Experience
              </h3>
              <p className="text-black leading-relaxed mb-4">
                Socio-legal research examining the relationship between formal legal protections and everyday realities.
              </p>
              <ul>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Invisible Lives: Male Sex Workers in India</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Why Does Homosexuality Remain Stigmatised Despite Legalisation in Germany and Other Developed Countries?</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Against Heterosexist Arrogance: Supporting the Identity Formation of LGBTIQA+ Children and Young People</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Identity in Focus: Why Some Gay Voters Support Far-Right Parties in Germany</span>
                </li>
              </ul>
            </div>

            {/* Violence, Protection & Legal Gaps */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Violence, Protection &amp; Legal Gaps
              </h3>
              <p className="text-black leading-relaxed mb-4">
                Research analysing violence, exclusion, and institutional protection failures affecting sexual and gender minorities.
              </p>
              <ul>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Human Rights Violations Against the LGBTQ+ Community in Iran</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Navigating the Stigma: Tim Krüger's Death and Its Broader Implications</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Austria's Constitutional Court Recognises Non-Binary People as a Matter of Human Rights</span>
                </li>
              </ul>
            </div>

            {/* Policy & Commentary */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Policy &amp; Commentary
              </h3>
              <p className="text-black leading-relaxed mb-4">
                Critical legal and social commentary on contemporary developments in law, policy, and public discourse.
              </p>
              <ul>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Review of the EU LGBTIQ+ Equality Strategy 2020–2025 and 2026–2030</span>
                </li>
              </ul>
            </div>

            {/* German Publications */}
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                German Publications
              </h3>
              <p className="text-black leading-relaxed mb-4">
                Selected German-language research and commentary.
              </p>
              <ul>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ablehnung einer Überprüfung: Entscheidung des Obersten Gerichtshofs zum Same-Sex-Marriage in Indien</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Entwickelt sich Deutschland zu einem hybriden Regime vor dem Hintergrund politischer und sozialer Veränderungen?</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Navigieren des Stigmas: Der Tod von Tim Krüger und seine umfassenderen Implikationen</span>
                </li>
                <li className="text-black leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                  <span>Wider der heterosexistischen Arroganz</span>
                </li>
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
            <p className="text-black text-lg leading-relaxed break-words">
              Publications are available through the Institute's publication platform and are organised according to thematic research areas.
            </p>
            <p className="text-black text-lg leading-relaxed break-words mt-4">
              Additional publication details, abstracts, and downloadable versions will be made available progressively through the website.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}