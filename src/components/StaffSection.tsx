export const StaffSection = () => {
  const teamMembers = [
    {
      name: "Thomas Hornung",
      role: "Projektkoordination"
    },
    {
      name: "Mirko Knepper",
      role: "Rechtswissenschaftler"
    },
    {
      name: "Bettina Schwenker",
      role: "Forschung"
    }
  ]

  return (
    <section id="staff" className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-brand-black mb-12">Wissenschaftler</h2>

        {/* Founder and Director */}
        <div className="mb-16">
          <h4 className="text-lg font-bold text-brand-orange mb-2">GRÜNDER UND DIREKTOR</h4>
          <h3 className="text-3xl font-bold text-brand-black mb-6">
            Prof. Dr. (jur.) Yeshwant Naik
          </h3>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
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
                {/* Teaching & Research Areas */}
                <div className="border border-gray-200 rounded-lg">
                  <div className="p-4 bg-gray-50 font-bold text-brand-black border-b border-gray-200">
                    Lehr- und Forschungsgebiete
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 leading-relaxed">
                      Human Rights Law, Public International Law, Constitutional Law, Legal Anthropology, Philosophy of Law, Techno-Feudalism, Postcolonialism, Othering, Migration, Neocolonialism, Heterosexism, Gender, Sexuality
                    </p>
                  </div>
                </div>

                {/* Publications */}
                <div className="border border-gray-200 rounded-lg">
                  <div className="p-4 bg-gray-50 font-bold text-brand-black border-b border-gray-200">
                    Publikationen
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-bold text-brand-black mb-2">Books</h5>
                        <ul className="space-y-3 text-sm">
                          <li className="text-gray-700">
                            <span className="font-semibold">2026</span> (forthcoming): <em>Literature and the Legal Imaginary: Equality vs. Othering, Exclusion and Discrimination in Indian law and Literature</em>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mitwirkende */}
        <div>
          <h3 className="text-2xl font-semibold text-brand-black mb-6">Mitwirkende</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="text-xl font-bold text-brand-orange">{member.name}</h4>
                <p className="text-gray-600 mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
