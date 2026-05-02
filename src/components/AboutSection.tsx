export const AboutSection = () => {
  return (
    <section id="innovation" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: Image left, Text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Left: Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/secondPage.webp"
              alt="Forschung, Entwicklung und Innovation"
              className="w-full h-auto md:h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="leading-relaxed">
            {/* Main Description */}
            <div className="mb-6 md:mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-3 md:mb-4">
                IDEA verbindet rechtswissenschaftliche Forschung mit praxisorientierten Ansätzen in den Bereichen Entwicklung, Innovation und rechtliche Beratung. Das Institut trägt durch wissenschaftlich fundierte Analysen zur Weiterentwicklung rechtlicher und institutioneller Rahmenbedingungen bei.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Die Forschungsarbeit umfasst sowohl theoretische als auch angewandte Perspektiven und zielt darauf ab, Erkenntnisse für Wissenschaft, Politik und Gesellschaft bereitzustellen.
              </p>
            </div>

            {/* Initiative PRIDE IN LAW */}
            <div className="mt-6 md:mt-12 p-5 bg-gray-50 border-l-4 border-brand-orange">
              <p className="text-xl md:text-2xl font-bold text-brand-black mb-3">
                Initiative „PRIDE IN LAW“
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Die Marke <strong>„PRIDE IN LAW“</strong>, eingetragen beim Deutschen Patent- und Markenamt, ist eine Initiative des IDEA Instituts zur Förderung von Vielfalt, Inklusion und rechtlicher Sensibilisierung im akademischen und institutionellen Umfeld.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sie dient insbesondere der Unterstützung von Bildungsformaten, wissenschaftlichem Austausch sowie der rechtlichen Auseinandersetzung mit Fragen der Gleichstellung und Antidiskriminierung.
              </p>
            </div>

            {/* Programme and Teaching */}
            <div className="mt-6 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-4 md:mb-6">Programme und Lehre</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                IDEA organisiert regelmäßig:
              </p>
              <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700 mb-4 md:mb-6 ml-4">
                <li>Seminare und Schulungen zu "Recht und Kultur"</li>
                <li>Kurse im Bereich "Comparative Sexual Orientation Law"</li>
                <li>Vortragsreihen zu aktuellen rechtlichen Fragestellungen</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-3">
                Das Programm "Law for Non-Lawyers" wird von Herrn Thomas Hornung koordiniert.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Für Anmeldungen und weitere Informationen:{' '}
                <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline font-medium">
                  info@ideainstitute.de
                </a>
                ,{' '}
                <a href="mailto:info@ideainstitute.ch" className="text-brand-orange hover:underline font-medium">
                  info@ideainstitute.ch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
