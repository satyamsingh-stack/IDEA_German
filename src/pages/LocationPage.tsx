export const LocationPage = () => {
  const mapsUrl = "https://www.google.com/maps?ll=47.187348,8.451873&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=Sinserstrasse+67+6330+Cham+Switzerland"

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            STANDORT
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>

      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-column layout: Content left, Map on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {/* Left: Text Content */}
            <div className="leading-relaxed">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Unser Institut liegt in der charmanten Stadt Cham im Kanton Zug, Schweiz. Diese idyllische Umgebung platziert uns an der Schnittstelle der Schweizer Kultur, mit Zugang zu einer Fülle regionaler Ressourcen und Perspektiven.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Die lebendige Gemeinschaft um uns herum fördert ein Umfeld, das reich an Zusammenarbeit und Innovation ist und ermöglicht es uns, sich intensiv mit unseren Nachbarn und darüber hinaus zu engagieren. Wir sind stolz auf unser Engagement für internationale Bildung und Forschung.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Wir nutzen das einzigartige kulturelle Gefüge der Region, um interkulturellen Dialog zu inspirieren und eine wahrhaft globale Denkweise zu fördern. Der Standort bietet nicht nur Vorteile für die akademischen Bestrebungen, sondern fungiert auch als dynamischer Standort für unsere Aktivitäten auf dem globalen Parkett.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Unser Standort verbessert nicht nur unsere akademischen Bestrebungen, sondern dient auch als dynamische Basis für unsere Unternehmungen auf dem globalen Parkett.
              </p>

              {/* Address Section */}
              <div className="mt-6 p-5 bg-gray-50 border-l-4 border-brand-orange">
                <p className="text-base md:text-lg font-semibold text-brand-black mb-2">
                  Inclusion Diversity Equality Action (IDEA) Institute of Legal Research
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sinserstrasse 67<br />
                  CH – 6330 Cham, Zug
                </p>
              </div>
            </div>

            {/* Right: Clickable Google Map with address pin visible */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg h-full min-h-[300px] lg:min-h-0 group relative"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-brand-black border border-brand-orange/30">
                  In Google Maps öffnen
                </div>
              </div>
              <iframe
                src={`https://maps.google.com/maps?q=Sinserstrasse+67+6330+Cham+Switzerland&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                title="IDEA Institute Location"
                onClick={(e) => e.preventDefault()}
              ></iframe>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
