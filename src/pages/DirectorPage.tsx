export const DirectorPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Name & Role */}
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-3 leading-tight">
                  Dr. Yeshwant Naik
                </h2>
                <p className="text-black text-xs leading-relaxed italic text-justify">
                  Comparative law and human rights scholar with prior experience as a Professor of Law in India.
                </p>
                <p className="text-black text-lg leading-relaxed text-justify">
                  His work explores sexuality, gender identity, migration, asylum, and transnational legal systems, with a broader research focus on legal responses to vulnerability, minority protection, violence, and exclusion, particularly in the contexts of Europe and India.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img src="/images/yashwant.png" alt="Portrait of Dr. Yeshwant Naik, Director of IDEA Institute" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md" />
              </div>
            </div>

            {/* Research Interests */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#1a2744] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
                Research Interests
              </h3>
              <ul>
                {[
                  'comparative law',
                  'human rights law',
                  'LGBTQ+ rights',
                  'migration and refugee law',
                  'law and society',
                  'legal pluralism'
                ].map((item, index) => (
                  <li key={index} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodological Approach */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#1a2744] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
                Methodological Approach
              </h3>
              <p className="text-black text-lg leading-relaxed mb-6 break-words text-justify">
                Dr. Naik's work adopts an interdisciplinary socio-legal approach combining:
              </p>
              <ul>
                {[
                  'comparative constitutional analysis',
                  'qualitative legal research',
                  'socio-legal studies of migration, sexuality, and gender',
                  'transnational and comparative legal analysis'
                ].map((item, index) => (
                  <li key={index} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selected Publications */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a2744] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
                Selected Publications
              </h3>

              {/* Books & Monographs */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#1a2744] mb-4 relative pl-4 border-l-2 border-brand-orange">
                  Books & Monographs
                </h4>
                <ul>
                  {[
                    'The Legal Imaginary: Equality and Othering in Indian Law and Literature (forthcoming, Ethics Press, 2027)',
                    'Domestic Violence Against Male Same-Sex Partners in the EU with Special Reference to Refugee and Migrant Gay Men in Germany (Springer, 2022)',
                    'Homosexuality in the Jurisprudence of the Supreme Court of India (Springer, 2017)'
                  ].map((item, index) => (
                    <li key={index} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Edited Volumes & Book Chapters */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#1a2744] mb-4 relative pl-4 border-l-2 border-brand-orange">
                  Edited Volumes & Book Chapters
                </h4>
                <ul>
                  {[
                    '"Homophobic Bullying, Hate Crime, and Migration in Switzerland and Germany," in Violence Against Sexual and Gender Minorities Around the World (Edward Elgar, forthcoming 2027)',
                    '"The Complex Legal Landscape of LGBTQ+ Rights in India," in Avant-Garde Law: New Frontiers at the Crossroads of Global Family Law (Bloomsbury Academic, forthcoming 2027)',
                    '"Transgender Family Rights Issues and Concerns: A Comparative Legal Analysis of Asia and Europe," in Exploring Norms and Families Across the Globe (Lexington Books, 2022)',
                    'LGBTIQ+ Inclusive Curriculum in Higher Education: Issues and Challenges (co-edited volume, University of Münster, 2023)'
                  ].map((item, index) => (
                    <li key={index} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
            </div>

              {/* Commentary & Public Writing */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#1a2744] mb-4 relative pl-4 border-l-2 border-brand-orange">
                  Commentary & Public Writing
                </h4>
                <ul>
                  {[
                    '"A Critical Analysis of the Indian Supreme Court\'s Ruling on Same-Sex Marriage" (Oxford Human Rights Hub, 2025)',
                    '"Germany\'s New Gender Self-Determination Act: Advances and Challenges" (Oxford Human Rights Hub, 2024)'
                  ].map((item, index) => (
                    <li key={index} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Journal Articles */}
              <div>
                <h4 className="text-xl font-bold text-[#1a2744] mb-4 relative pl-4 border-l-2 border-brand-orange">
                  Journal Articles
                </h4>
                <ul>
                  {[
                    '"Regulations on Sex Toy Industry in Europe," Technium Social Sciences Journal (2021)'
                  ].map((item, index) => (
                    <li key={index} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span className="break-words">{item}</span>
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
