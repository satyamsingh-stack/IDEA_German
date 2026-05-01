import { CheckCircle } from 'lucide-react'

export const MembershipSection = () => {
  const benefits = [
    'Zugang zu exklusiven Forschungspublikationen',
    'Einladung zu allen Veranstaltungen und Roundtables',
    'Rabatte auf Konferenzen und Seminare',
    'Netzwerk mit führenden Rechtswissenschaftlern',
    'Newsletter mit aktuellen Entwicklungen',
    'Kostenloser Zugang zu Forschungsarchiv'
  ]

  return (
    <section id="membership" className="py-16 md:py-24 bg-gradient-to-r from-secondary to-brand-orange text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Werden Sie Mitglied</h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Unterstützen Sie unsere Forschung und werfen Sie einen Blick hinter die Kulissen eines führenden Instituts für Rechtsforschung. Werden Sie Teil unserer wachsenden Community.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-white" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-white text-secondary hover:bg-blue-50 font-bold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              Jetzt beitreten →
            </a>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg hover:bg-opacity-20 transition">
              <div className="text-5xl font-bold mb-2 text-white">500+</div>
              <p className="text-white">Mitglieder weltweit</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg hover:bg-opacity-20 transition">
              <div className="text-5xl font-bold mb-2 text-white">50+</div>
              <p className="text-white">Veröffentlichte Forschungsarbeiten</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg hover:bg-opacity-20 transition">
              <div className="text-5xl font-bold mb-2 text-white">30+</div>
              <p className="text-white">Jährliche Veranstaltungen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
