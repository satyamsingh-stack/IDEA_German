export const AboutSection = () => {
  return (
    <section id="innovation" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-brand-black mb-2">Forschung, Entwicklung und Innovation</h2>
          <div className="w-16 h-1 bg-brand-orange rounded"></div>
        </div>

        <div className="space-y-8 leading-relaxed">
          <p className="text-gray-700 text-lg leading-relaxed">
            IDEA verbindet rechtswissenschaftliche Forschung mit praxisorientierten Ansätzen in den Bereichen Entwicklung, Innovation und rechtliche Beratung. Das Institut trägt durch wissenschaftlich fundierte Analysen zur Weiterentwicklung rechtlicher und institutioneller Rahmenbedingungen bei.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Die Forschungsarbeit umfasst sowohl theoretische als auch angewandte Perspektiven und zielt darauf ab, Erkenntnisse für Wissenschaft, Politik und Gesellschaft bereitzustellen.
          </p>
        </div>

        {/* Initiative PRIDE IN LAW */}
        <div className="mt-16 p-8 bg-gray-50 border-l-4 border-brand-orange">
          <p className="text-2xl font-bold text-brand-black mb-4">
            Initiative „PRIDE IN LAW“
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Marke <strong>„PRIDE IN LAW“</strong>, eingetragen beim Deutschen Patent- und Markenamt, ist eine Initiative des IDEA Instituts zur Förderung von Vielfalt, Inklusion und rechtlicher Sensibilisierung im akademischen und institutionellen Umfeld.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sie dient insbesondere der Unterstützung von Bildungsformaten, wissenschaftlichem Austausch sowie der rechtlichen Auseinandersetzung mit Fragen der Gleichstellung und Antidiskriminierung.
          </p>
        </div>

        {/* Programme and Teaching */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-black mb-8">Programme und Lehre</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IDEA organisiert regelmäßig:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8 ml-4">
            <li>Seminare und Schulungen zu "Recht und Kultur"</li>
            <li>Kurse im Bereich "Comparative Sexual Orientation Law"</li>
            <li>Vortragsreihen zu aktuellen rechtlichen Fragestellungen</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Das Programm "Law for Non-Lawyers" wird von Herrn Thomas Hornung koordiniert.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Für Anmeldungen und weitere Informationen: info@ideainstitute.de, info@ideainstitute.ch
          </p>
        </div>

        {/* Image */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://ideainstitute.ch/wp-content/uploads/2025/02/COURSES-scaled-1-1024x768.webp"
            alt="COURSES-scaled"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
