export const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="max-w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left Content */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            {/* H1 Section */}
            <div>
              <h1 className="text-3xl font-bold text-brand-black mb-6 leading-tight font-sans">
                Willkommen bei IDEA
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm font-normal">
                Das Inclusion Diversity Equality Action (IDEA) Institut für Rechtsforschung ist ein unabhängiges gemeinnütziges Institut mit Sitz in Deutschland und der Schweiz. Es widmet sich der rechtswissenschaftlichen Forschung zu Fragen von Gleichheit, Antidiskriminierung, Menschenrechten und Rechtsstaatlichkeit im nationalen und internationalen Kontext.
              </p>
            </div>

            {/* Profil und Mission Section */}
            <div>
              <p className="text-base font-bold text-brand-black mb-6 uppercase tracking-wider">
                Profil und Mission
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm font-normal">
                IDEA ist ein unabhängiges Institut für Rechtsforschung mit einem spezialisierten Fokus auf die rechtliche Analyse von Fragen der sexuellen Orientierung und Geschlechtsidentität innerhalb der deutschen und europäischen Rechtsordnung.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm font-normal">
                Während bestehende Forschung diese Themen in verschiedenen rechtsdogmatischen Bereichen behandelt, bleibt sie häufig fragmentiert und ohne eine klar institutionalisierte Struktur. IDEA verfolgt das Ziel, diese Forschung zu bündeln, systematisch weiterzuentwickeln und durch eine eigenständige Plattform für Forschung, Lehre und rechtspolitischen Diskurs sichtbar zu machen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm font-normal">
                Durch interdisziplinäre Zusammenarbeit, wissenschaftliche Exzellenz und öffentliche Vernetzung trägt IDEA zur Weiterentwicklung des Verständnisses von Gleichheit, Nichtdiskriminierung und Grundrechten bei und leistet einen Beitrag zur Stärkung inklusiver Rechtssysteme in Europa.
              </p>
            </div>

            {/* Additional Content Section */}
            <div>
              <h3 className="text-lg font-bold text-brand-black mb-4">
                Willkommen bei IDEA
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm font-normal">
                Das Inclusion Diversity Equality Action (IDEA) Institut für Rechtsforschung befasst sich mit Menschenrechtefragen und Anliegen rund um ethisches Verhalten, Fairness, Gerechtigkeit und Rechtsstaatlichkeit. Das unabhängige gemeinnützige Institut ist einzigartig, da es das erste Rechtsforschungsinstitut in Europa, der Schweiz und Deutschland ist, das sich ausschließlich auf die Studie und Forschung von Gesetzen zur sexuellen Orientierung und rechtlichen Kulturen weltweit konzentriert, mit Schwerpunkt auf den Rechten sexueller Minderheiten. Dieser Fokus wird unter globaler vergleichender sozialer, ökonomischer, politischer, kultureller und rechtlicher Perspektive betrachtet.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-span-1 flex items-start mt-6">
            <div className="w-full rounded-sm overflow-hidden shadow-md h-96">
              <img
                src="https://ideainstitute.ch/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-14-at-11.36.04-AM-1024x534.jpeg"
                alt="IDEA Schweiz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
