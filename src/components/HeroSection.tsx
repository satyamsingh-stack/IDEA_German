export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-white pt-24 md:pt-32 pb-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            {/* H1 Section */}
            <div className="animate-fadeIn">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-6 leading-tight font-sans">
                Welcome to IDEA
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base font-normal">
                Das Inclusion Diversity Equality Action (IDEA) Institut für Rechtsforschung ist ein unabhängiges gemeinnütziges Institut mit Sitz in Deutschland und der Schweiz. Es widmet sich der rechtswissenschaftlichen Forschung zu Fragen von Gleichheit, Antidiskriminierung, Menschenrechten und Rechtsstaatlichkeit im nationalen und internationalen Kontext.
              </p>
            </div>

            {/* Profil und Mission Section */}
            <div className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
              <p className="text-base sm:text-lg font-bold text-brand-black mb-6 uppercase tracking-wider">
                Profile and Mission
              </p>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
                  IDEA ist ein unabhängiges Institut für Rechtsforschung mit einem spezialisierten Fokus auf die rechtliche Analyse von Fragen der sexuellen Orientierung und Geschlechtsidentität innerhalb der deutschen und europäischen Rechtsordnung.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
                  Während bestehende Forschung diese Themen in verschiedenen rechtsdogmatischen Bereichen behandelt, bleibt sie häufig fragmentiert. IDEA verfolgt das Ziel, diese Forschung zu bündeln, systematisch weiterzuentwickeln und durch eine eigenständige Plattform sichtbar zu machen.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
                  Durch interdisziplinäre Zusammenarbeit trägt IDEA zur Weiterentwicklung des Verständnisses von Gleichheit, Nichtdiskriminierung und Grundrechten bei und leistet einen Beitrag zur Stärkung inklusiver Rechtssysteme in Europa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - Desktop Only */}
          <div className="col-span-1 flex items-center justify-center lg:justify-end mt-8 lg:mt-0 hidden lg:block">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/firstPage.jpeg"
                alt="IDEA Initiative"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Mobile Only Content - Image on mobile */}
          <div className="col-span-1 lg:hidden flex justify-center">
            <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/firstPage.jpeg"
                alt="IDEA Initiative"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
