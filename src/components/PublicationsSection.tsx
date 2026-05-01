export const PublicationsSection = () => {
  // Sample publications (matching website style)
  const publications = [
    {
      title: "A CRITIQUE OF GERMANY'S PROSTITUTION LEGISLATION",
      category: "Legal Analysis"
    },
    {
      title: "Austria's Constitutional Court Recognizes Non-Binary People as a Matter of Human Rights",
      category: "Human Rights"
    },
    {
      title: "Comparative and Transnational LGBTIQ+ Legal Studies: Toward a South Asia–Anchored Global Research Framework",
      category: "Research"
    },
    {
      title: "Human Rights Violations Against the LGBTQ+ Community in Iran",
      category: "Human Rights"
    },
    {
      title: "INVISIBLE LIVES: MALE SEX WORKERS IN INDIA",
      category: "Social Issues"
    }
  ]

  return (
    <section id="publications" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-brand-black mb-4">Publikationen</h2>
        <p className="text-gray-700 mb-12 text-lg">
          IDEA LEGAL RESEARCH PAPER SERIES
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
                Mehr lesen →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white rounded-lg transition font-semibold"
          >
            Alle Publikationen anzeigen
          </a>
        </div>
      </div>
    </section>
  )
}
