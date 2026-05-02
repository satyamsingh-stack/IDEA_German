import { useLanguage } from '../contexts/LanguageContext'

export const ProjectsSection = () => {
  const { t } = useLanguage()

  const projects = [
    {
      title: t('project.1.title'),
      status: t('project.status.ongoing')
    },
    {
      title: t('project.2.title'),
      status: t('project.status.ongoing')
    },
    {
      title: t('project.3.title'),
      status: t('project.status.ongoing')
    },
    {
      title: t('project.4.title'),
      status: t('project.status.completed')
    },
    {
      title: t('project.5.title'),
      status: t('project.status.completed')
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
              alt={t('page.projects')}
              className="w-full h-auto md:h-full object-cover"
            />
          </div>

          {/* Right: Projects List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-5 rounded-lg border-l-4 ${
                  project.status === t('project.status.ongoing')
                    ? 'bg-brand-orange/5 border-brand-orange'
                    : 'bg-gray-50 border-gray-300'
                }`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 ${
                    project.status === t('project.status.ongoing')
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
