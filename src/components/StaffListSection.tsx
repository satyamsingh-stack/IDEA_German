export const StaffListSection = () => {
  const teamMembers = [
    {
      name: "Thomas Hornung",
      role: "Projektkoordination"
    },
    {
      name: "Mirko Knepper",
      role: "Rechtswissenschaftler"
    },
    {
      name: "Bettina Schwenker",
      role: "Forschung"
    }
  ]

  return (
    <section id="staff" className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder and Director - simple listing */}
        <div className="mb-16">
          <h4 className="text-lg font-bold text-brand-orange mb-2">GRÜNDER UND DIREKTOR</h4>
          <h3 className="text-3xl font-bold text-brand-black mb-6">
            Prof. Dr. (jur.) Yeshwant Naik
          </h3>
        </div>

        {/* Mitwirkende */}
        <div>
          <h2 className="text-3xl font-bold text-brand-black mb-8">Mitwirkende</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="text-xl font-bold text-brand-orange">{member.name}</h4>
                <p className="text-gray-600 mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
