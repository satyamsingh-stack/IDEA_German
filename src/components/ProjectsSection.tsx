export const ProjectsSection = () => {
  const projects = [
    {
      title: "Ehrenmorde in Deutschland: Eine Analyse der rechtlichen Rahmenbedingungen und Implikationen",
      status: "Laufend"
    },
    {
      title: "Erforschung von Diversität, Inklusion und Chancengleichheit an deutschen Universitäten: Eine Studie über Einstellungen gegenüber sexuellen Minderheiten sowie die rechtlichen und praktischen Implikationen",
      status: "Laufend"
    },
    {
      title: "Narrative von Gleichheit und Andersheit im indischen Recht und in der Literatur: Eine Untersuchung der Rechte des marginalisierten Anderen",
      status: "Laufend"
    },
    {
      title: "Lehrpläne der Hochschulbildung: Probleme, Anliegen und Herausforderungen, Dezember 2018 – Juli 2023",
      status: "Abgeschlossen"
    },
    {
      title: "Diskriminierung am Arbeitsplatz in Deutschland, Dezember 2021 – September 2023",
      status: "Abgeschlossen"
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: Image left, Projects list right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Left: Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/fourthPage.webp"
              alt="Research Projects"
              className="w-full h-auto md:h-full object-cover"
            />
          </div>

          {/* Right: Projects List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-5 rounded-lg border-l-4 ${
                  project.status === 'Laufend'
                    ? 'bg-brand-orange/5 border-brand-orange'
                    : 'bg-gray-50 border-gray-300'
                }`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 ${
                    project.status === 'Laufend'
                      ? 'bg-brand-orange text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {project.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
