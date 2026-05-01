

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer Links */}
      <div className="py-6 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-brand-orange transition">Impressum</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-brand-orange transition">Datenschutzerklärung</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-brand-orange transition">ALLGEMEINE GESCHÄFTSBEDINGUNGEN</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-brand-orange transition">RÜCKERSTATTUNGSRICHTLINIE</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-brand-orange transition">VERSANDRICHTLINIE</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm">
            Copyright © 2026 Institute of Legal Research - IDEA Institut für Rechtsforschung. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
