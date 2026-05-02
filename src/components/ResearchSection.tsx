export const ResearchSection = () => {
  const researchAreas = [
    "Verfassungsrecht und Gleichheitsgrundsätze",
    "Europäisches Antidiskriminierungsrecht",
    "Menschenrechte und internationales öffentliches Recht",
    "Recht der sexuellen Orientierung und Geschlechtsidentität",
    "Familienrecht und rechtliche Anerkennung",
    "Vergleichende Rechtswissenschaft",
    "Rechtsphilosophie und Rechtsanthropologie"
  ]

  return (
    <section id="research" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: Image left, Text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Left: Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/thirdPage.webp"
              alt="Forschung und Schwerpunkte"
              className="w-full h-auto md:h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="leading-relaxed">
            {/* Heading */}
            <div className="mb-6 md:mb-10">
              <p className="text-xl md:text-2xl font-bold text-brand-black mb-4">
                FORSCHUNG UND SCHWERPUNKTE
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Die Forschungstätigkeit von IDEA konzentriert sich insbesondere auf folgende Bereiche:
              </p>
            </div>

            {/* Research Areas List */}
            <div className="space-y-3 mb-8">
              {researchAreas.map((area, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base leading-relaxed">{area}</p>
                </div>
              ))}
            </div>

            {/* Quote/Summary */}
            <div className="mt-8 p-5 bg-white border-l-4 border-brand-orange">
              <p className="text-gray-700 leading-relaxed italic">
                Ziel der Forschung ist es, rechtliche Entwicklungen, Rechtssysteme und Rechtskulturen im internationalen Vergleich zu analysieren und deren Auswirkungen auf die Rechte sexueller Minderheiten sowie auf gesellschaftliche und rechtliche Transformationsprozesse zu untersuchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
