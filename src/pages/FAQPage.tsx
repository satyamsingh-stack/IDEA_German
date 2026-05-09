import { useLanguage } from '../contexts/LanguageContext'

const faqs = [
  {
    question: { de: 'Was ist das IDEA Institut?', en: 'What is the IDEA Institute?' },
    answer: { de: 'Das IDEA Institut ist ein unabhängiges Rechtsforschungsinstitut mit Fokus auf LGBTQ+-Rechte, Gleichheit und Inklusion.', en: 'The IDEA Institute is an independent legal research institute focused on LGBTQ+ rights, equality, and inclusion.' }
  },
  {
    question: { de: 'Wo ist das Institut ansässig?', en: 'Where is the Institute based?' },
    answer: { de: 'Das Institut hat seinen Sitz in Deutschland und der Schweiz.', en: 'The Institute is based in Germany and Switzerland.' }
  },
  {
    question: { de: 'Welche Forschungsbereiche werden abgedeckt?', en: 'What research areas are covered?' },
    answer: { de: 'Wir decken vergleichende Rechtsforschung, Politikanalyse, akademische Veröffentlichungen und zugängliche rechtliche Einblicke ab.', en: 'We cover comparative legal research, policy analysis, academic publications, and accessible legal insights.' }
  },
  {
    question: { de: 'Wie kann ich mitmachen?', en: 'How can I get involved?' },
    answer: { de: 'Sie können unserem Newsletter abonnieren, uns auf LinkedIn folgen oder uns für Zusammenarbeit und Veranstaltungen kontaktieren.', en: 'You can subscribe to our newsletter, follow us on LinkedIn, or contact us for collaboration and events.' }
  },
  {
    question: { de: 'Sind die Publikationen kostenlos zugänglich?', en: 'Are publications freely accessible?' },
    answer: { de: 'Einige Publikationen sind frei zugänglich, andere können über unseren Shop erworben werden.', en: 'Some publications are freely accessible, while others can be purchased through our shop.' }
  },
  {
    question: { de: 'Bietet das Institut Beratungsdienstleistungen an?', en: 'Does the Institute offer consulting services?' },
    answer: { de: 'Ja, wir bieten rechtliche Beratung und Schulungen im Bereich LGBTQ+ Recht und Gleichstellung an.', en: 'Yes, we offer legal consulting and training in the area of LGBTQ+ law and equality.' }
  }
]

export const FAQPage = () => {
  const { t, language } = useLanguage()

  return (
    <div className="pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="flex flex-col items-start">
          <p className="text-sm md:text-base font-bold text-brand-black uppercase tracking-wider">
            {t('nav.faq')}
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mt-2"></div>
        </div>
      </div>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">{t('nav.faq')}</h2>
            <p className="text-gray-700 text-lg">
              Find answers to commonly asked questions about the IDEA Institute and our work.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="border border-gray-200 rounded-lg">
                <summary className="px-5 py-4 font-semibold text-brand-black cursor-pointer hover:bg-gray-50 transition">
                  {faq.question[language]}
                </summary>
                <div className="px-5 py-4 text-gray-700 leading-relaxed border-t border-gray-100">
                  {faq.answer[language]}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}