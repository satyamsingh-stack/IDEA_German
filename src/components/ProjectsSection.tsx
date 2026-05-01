export const ProjectsSection = () => {
  const projects = [
    {
      title: "Honour Killings in Germany: An Analysis of Legal Frameworks and Implications",
      status: "Ongoing"
    },
    {
      title: "Exploring Diversity, Inclusion, and Equal Opportunity in German Universities: A Study of Attitudes Towards Sexual Minorities and the Legal and Practical Implications",
      status: "Ongoing"
    },
    {
      title: "Narratives of Equality and Otherness in Indian Law and Literature: Examining the Rights of the Marginalised Other",
      status: "Ongoing"
    },
    {
      title: "Higher Education Curriculums : Issues, Concerns and Challenges, December 2018 – July 2023",
      status: "Completed"
    },
    {
      title: "Workplace Discrimination in Germany, December 2021 – September 2023",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-brand-black mb-8">Projekte</h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-l-4 border-brand-orange p-6 bg-gray-50 rounded-lg hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'Ongoing' 
                        ? 'bg-brand-orange text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://ideainstitute.ch/wp-content/uploads/2025/02/hand-1024x683.webp"
            alt="Hand"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
