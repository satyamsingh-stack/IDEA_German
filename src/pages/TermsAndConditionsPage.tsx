export const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-8 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">General Terms and Conditions of Business</h1>
            <div className="w-20 h-1 bg-orange-400 rounded-full"></div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                General Terms and Conditions (GTC / Terms & Conditions)
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-medium text-gray-700 mb-3 text-gray-600">Scope of application</h3>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions apply to all orders of digital products via the website of the IDEA Institute of Legal Research.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                Contract Conclusion
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  A binding contract is concluded upon ordering and paying for the digital product.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                Digital Products
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  All products offered are downloadable files (e.g., PDFs, eBooks, studies). There is no physical shipping.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                Usage Rights
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  The products are protected by copyright. With your purchase, you acquire a simple, non-transferable right of use. Distribution, reproduction, or commercial use is not permitted.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                Disclaimer
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  We accept no liability for damages resulting from improper use of the products.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                Applicable law
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  German law applies. The place of jurisdiction is Rheinfelden (Baden), Germany.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2026 Institute of Legal Research. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
