export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-black text-justify mb-8">
          The Inclusion Diversity Equality Action (IDEA) Institute of Legal Research takes the
          protection of your personal data very seriously and processes personal data in accordance
          with the Swiss Federal Act on Data Protection (FADP).
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">1. Responsible Entity</h2>
          <p className="text-black font-medium">Switzerland</p>
          <p className="text-black">IDEA Institute</p>
          <p className="text-black">Missionsstrasse 24</p>
          <p className="text-black">4055 Basel</p>
          <p className="text-black">Switzerland</p>
          <p className="text-black">
            Email: <a href="mailto:info@ideainstitute.ch" className="text-brand-orange hover:underline">info@ideainstitute.ch</a>
          </p>
          <p className="text-black font-medium mt-4">German Affiliate</p>
          <p className="text-black">IDEA gGmbH</p>
          <p className="text-black">Rheinstraße 57</p>
          <p className="text-black">79639 Grenzach-Wyhlen</p>
          <p className="text-black">Germany</p>
          <p className="text-black">
            Email: <a href="mailto:info@ideainstitute.de" className="text-brand-orange hover:underline">info@ideainstitute.de</a>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">2. Collection and Processing of Personal Data</h2>
          <p className="text-black text-justify">
            We collect and process personal data such as your name, email address, billing address, and
            payment-related information exclusively for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-black space-y-1 mt-2">
            <li>processing orders and payments,</li>
            <li>delivering digital products and services,</li>
            <li>customer communication,</li>
            <li>compliance with legal and regulatory obligations.</li>
          </ul>
          <p className="text-black text-justify mt-2">
            Your personal data is processed only to the extent necessary for the fulfillment of contractual
            obligations and the operation of our services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">3. Purpose and Legal Basis of Processing</h2>
          <p className="text-black text-justify">
            Personal data is processed for the purpose of handling purchases, delivering digital content,
            responding to inquiries, and maintaining business relationships.
          </p>
          <p className="text-black text-justify mt-2">
            Processing is carried out in accordance with the applicable provisions of the Swiss Federal
            Act on Data Protection (FADP).
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">4. Data Sharing</h2>
          <p className="text-black text-justify">
            Your personal data will not be disclosed to third parties unless:
          </p>
          <ul className="list-disc pl-6 text-black space-y-1 mt-2">
            <li>this is necessary for the fulfillment of contractual obligations (e.g., payment service providers or technical service providers), or</li>
            <li>we are legally required to do so.</li>
          </ul>
          <p className="text-black text-justify mt-2">
            All third parties engaged by us are required to handle personal data confidentially and in
            compliance with applicable data protection laws.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">5. Data Retention and Security</h2>
          <p className="text-black text-justify">
            We retain personal data only for as long as necessary to fulfill the purposes for which it was
            collected or to comply with statutory retention obligations.
          </p>
          <p className="text-black text-justify mt-2">
            We implement appropriate technical and organizational security measures to protect personal
            data against unauthorized access, loss, misuse, or alteration.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">6. Your Rights</h2>
          <p className="text-black text-justify">
            Under Swiss data protection law, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-black space-y-1 mt-2">
            <li>request information about the personal data we process about you,</li>
            <li>request correction of inaccurate or incomplete data,</li>
            <li>request deletion of personal data where legally permissible,</li>
            <li>object to certain types of data processing,</li>
            <li>request restriction of processing where applicable.</li>
          </ul>
          <p className="text-black text-justify mt-2">
            Requests relating to data protection may be sent to:
          </p>
          <p className="text-black">
            <a href="mailto:info@ideainstitute.ch" className="text-brand-orange hover:underline">info@ideainstitute.ch</a>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">7. Changes to this Privacy Policy</h2>
          <p className="text-black text-justify">
            We reserve the right to amend this Privacy Policy at any time to comply with legal
            requirements or changes to our services.
          </p>
        </div>
      </div>
    </div>
  )
}