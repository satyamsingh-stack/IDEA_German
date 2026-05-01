export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-8 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <div className="w-20 h-1 bg-orange-400 rounded-full"></div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed mb-6 bg-gray-50 rounded-xl p-6 border border-gray-100">
                Inclusion Diversity Equality Action (IDEA) Institute of Legal Research takes the protection of your personal data very seriously.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                Responsible body
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p className="font-medium text-gray-900">Inclusion Diversity Equality Action (IDEA) Institute of Legal Research</p>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="font-medium text-gray-900">Switzerland</p>
                    <p>Sinserstrasse 67, CH–6330 Cham, Zug |</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:info@ideainstitute.ch" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition">
                        info@ideainstitute.ch
                      </a>{" "}
                      | Tel.: <a href="tel:+4976237178833" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition">+49 7623 7178833</a>
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="font-medium text-gray-900">Germany</p>
                    <p>Ernst-Reuter-Str. 12, 79618 Rheinfelden (Baden)</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:info@ideainstitute.de" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition">
                        info@ideainstitute.de
                      </a>{" "}
                      | Tel.: <a href="tel:+4976237178833" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition">+49 7623 7178833</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                Collection and processing of data
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect personal data (e.g., name, email, billing address) exclusively for order processing, customer communication and compliance with legal requirements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We collect your personal data to process your purchase and deliver the PDF file. The legal basis for this data processing is the performance of our contract with you (Art. 6 para. 1 lit. b GDPR). We store your data for the necessary period to complete the transaction and comply with legal obligations. The standard retention period for sales documents and invoices related to digital downloads is 6 years (§ 257 HGB – German Commercial Code). For tax audits or legal proceedings, a retention period of 10 years applies (§ 147 AO – German Fiscal Code), although in some cases the period may be up to 10 years. You have the right to request information about your stored data at any time, as well as to request its correction or deletion.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                Use of Data
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  Your data will not be shared with third parties unless this is necessary for the fulfillment of the contract (e.g., payment processing).
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                Storage and Security
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  All data is stored securely in accordance with the GDPR.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                Your Rights
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  You have the right to access, rectify, erase, and restrict the processing of your personal data at any time.
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
