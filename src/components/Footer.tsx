

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer Links */}
      <div className="py-6 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/impressum" className="hover:text-brand-orange transition">Imprint</a>
            <span className="text-gray-600">|</span>
            <a href="/privacy-policy" className="hover:text-brand-orange transition">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="/general-terms-and-conditions" className="hover:text-brand-orange transition">GENERAL TERMS AND CONDITIONS</a>
            <span className="text-gray-600">|</span>
            <a href="/refund-policy" className="hover:text-brand-orange transition">REFUND POLICY</a>
            <span className="text-gray-600">|</span>
            <a href="/shipping-policy" className="hover:text-brand-orange transition">SHIPPING POLICY</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm">
            Copyright © 2026 Institute of Legal Research
          </p>
        </div>
      </div>
    </footer>
  )
}
