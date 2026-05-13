import { useLanguage } from '../contexts/LanguageContext'

export const ImpressumPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">{t('impressum.publisher')}</h2>
          <div className="space-y-2">
            <p className="text-gray-700">{t('impressum.publisherInstitute')}</p>
            <p className="text-gray-700">{t('impressum.publisherStreet')}</p>
            <p className="text-gray-700">{t('impressum.publisherPostal')}</p>
            <p className="text-gray-700">{t('impressum.publisherCountry')}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">{t('impressum.germanAffiliate')}</h2>
          <div className="space-y-2">
            <p className="text-gray-700">{t('impressum.germanAffiliateName')}</p>
            <p className="text-gray-700">{t('impressum.germanAffiliateStreet')}</p>
            <p className="text-gray-700">{t('impressum.germanAffiliatePostal')}</p>
            <p className="text-gray-700">{t('impressum.germanAffiliateCountry')}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">{t('impressum.textsContent')}</h2>
          <p className="text-gray-700">{t('impressum.contentResponsibility')}</p>
          <p className="text-gray-700">{t('impressum.contactDirector')}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">{t('impressum.conceptRealization')}</h2>
          <div className="space-y-2">
            <p className="text-gray-700">{t('impressum.publisherInstitute')}</p>
            <p className="text-gray-700">{t('impressum.publisherStreet')}</p>
            <p className="text-gray-700">{t('impressum.publisherPostal')}</p>
            <p className="text-gray-700">{t('impressum.publisherCountry')}</p>
          </div>
          <p className="text-gray-700 mt-2">{t('impressum.inCooperationWith')}{' '}
            <a href="https://trendzomedia.com/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Trendzo Media</a>
            {' '}and{' '}
            <a href="https://www.instagram.com/thissatyamsingh?igsh=a200b200ZnhuY3Bi" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Satyam Singh</a>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">{t('impressum.warrantyDisclaimer')}</h2>
          <p className="text-gray-700">
            The IDEA Institute makes every effort to ensure that the information published on this
            website is accurate and up to date. However, it accepts no liability for the accuracy,
            completeness, reliability, or timeliness of the information provided.
          </p>
          <p className="text-gray-700">
            The IDEA Institute reserves the right to modify, supplement, or remove content at any time
            without prior notice. Any liability claims arising from the use of this website are excluded.
          </p>
          <p className="text-gray-700">
            The IDEA Institute shall not be liable for any material or immaterial damages resulting from
            access to, use or non-use of the published information, misuse of the connection, or technical
            malfunctions.
          </p>
          <p className="text-gray-700">
            The IDEA Institute has not reviewed third-party websites linked to this website via
            hyperlinks and assumes no responsibility for their content.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2744] mb-2">{t('impressum.copyright')}</h2>
          <p className="text-gray-700">
            All online content (documents, webpages, and parts thereof) published on the IDEA Institute
            website is protected by copyright and may only be copied or printed for private, scientific,
            and non-commercial use.
          </p>
          <p className="text-gray-700">
            Any reproduction, distribution, transmission, or other use of the information on this website
            for commercial purposes is prohibited without prior written permission. This also applies to
            the IDEA Institute logo.
          </p>
          <p className="text-gray-700">
            Requests for authorization must be submitted in writing to the IDEA Institute, Basel, at
            info@ideainstitute.ch.
          </p>
          <p className="text-gray-700 mt-2">
            Where individual content is published under an open license or a Creative Commons license,
            such content may be used in accordance with the respective license terms.
          </p>
        </div>
      </div>
    </div>
  )
}