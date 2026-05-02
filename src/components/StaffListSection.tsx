export const StaffListSection = () => {
  const contributors = ["Thomas Hornung", "Mirko Knepper", "Bettina Schwenker"]

  return (
    <section id="staff" className="py-12 md:py-20 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder and Director */}
        <div className="mb-10 md:mb-16">
          <h4 className="text-sm md:text-base font-bold text-brand-orange uppercase tracking-wider mb-3">
            GRÜNDER UND DIREKTOR
          </h4>
          <h3 className="text-2xl md:text-3xl font-bold text-brand-black">
            Prof. Dr. (jur.) Yeshwant Naik
          </h3>
        </div>

        {/* Mitwirkende */}
        <div>
          <h4 className="text-sm md:text-base font-bold text-brand-orange uppercase tracking-wider mb-6">
            MITWIRKENDE
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {contributors.map((name, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                <p className="text-base md:text-lg font-semibold text-brand-black">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
