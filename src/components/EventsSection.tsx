import { Calendar, MapPin } from 'lucide-react'

interface Event {
  id: number
  title: string
  date: string
  location: string
  type: string
  description: string
}

const events: Event[] = [
  {
    id: 1,
    title: 'Rechtliche Rahmenbedingungen in Europa',
    date: '15. Juni 2026',
    location: 'Berlin, Deutschland',
    type: 'Roundtable',
    description: 'Diskussion über aktuelle rechtliche Entwicklungen und deren Auswirkungen auf die Gleichstellung.',
  },
  {
    id: 2,
    title: 'Internationale Konferenz - Geschlechtsidentität & Recht',
    date: '22. Juli 2026',
    location: 'Zürich, Schweiz',
    type: 'Konferenz',
    description: 'Treffen von führenden Rechtswissenschaftlern und Experten aus verschiedenen Ländern.',
  },
  {
    id: 3,
    title: 'Seminar: Verfassungsrecht und Minderheitenschutz',
    date: '10. August 2026',
    location: 'Online',
    type: 'Seminar',
    description: 'Umfassendes Seminar zu Verfassungsaspekten des Minderheitenschutzes in Deutschland und Europa.',
  },
]

export const EventsSection = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Veranstaltungen & Roundtables</h2>
          <p className="text-gray-700 max-w-2xl">
            Treffen Sie uns zu wissenschaftlichen Diskussionen, Konferenzen und Seminaren.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="border-l-4 border-accent p-6 bg-light rounded-lg hover:shadow-md transition animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{event.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin size={18} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                  Anmelden
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition font-semibold"
          >
            Alle Veranstaltungen anzeigen
          </a>
        </div>
      </div>
    </section>
  )
}
