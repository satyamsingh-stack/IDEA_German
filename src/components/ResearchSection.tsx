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
    <section id="research" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-brand-black mb-8">Forschung und Schwerpunkte</h2>

        <p className="text-gray-700 leading-relaxed mb-8 text-lg">
          Die Forschungstätigkeit von IDEA konzentriert sich insbesondere auf folgende Bereiche:
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {researchAreas.slice(0, 5).map((area, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brand-orange rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700 text-lg leading-relaxed">{area}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {researchAreas.slice(5, 7).map((area, index) => (
            <div key={index + 5} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brand-orange rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700 text-lg leading-relaxed">{area}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white border-l-4 border-brand-orange italic">
          <p className="text-gray-700 leading-relaxed">
            Ziel der Forschung ist es, rechtliche Entwicklungen, Rechtssysteme und Rechtskulturen im internationalen Vergleich zu analysieren und deren Auswirkungen auf die Rechte sexueller Minderheiten sowie auf gesellschaftliche und rechtliche Transformationsprozesse zu untersuchen.
          </p>
        </div>

        {/* Image */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://ideainstitute.ch/wp-content/uploads/2025/02/1-4-1024x768.webp"
            alt="Forschung"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
