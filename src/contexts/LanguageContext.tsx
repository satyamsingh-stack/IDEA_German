import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'de' | 'en'

interface Translation {
  [key: string]: {
    de: string
    en: string
  }
}

const translations: Translation = {
  // Navigation
  'nav.institute': {
    de: 'INSTITUT',
    en: 'INSTITUTE'
  },
  'nav.location': {
    de: 'STANDORT',
    en: 'LOCATION'
  },
  'nav.researchDevInnovation': {
    de: 'FORSCHUNG, ENTWICKLUNG UND INNOVATION',
    en: 'RESEARCH, DEVELOPMENT AND INNOVATION'
  },
  'nav.research': {
    de: 'FORSCHUNG',
    en: 'RESEARCH'
  },
  'nav.projects': {
    de: 'PROJEKTE',
    en: 'PROJECTS'
  },
  'nav.scientists': {
    de: 'WISSENSCHAFTLER',
    en: 'SCIENTISTS'
  },
  'nav.director': {
    de: 'DIREKTOR',
    en: 'DIRECTOR'
  },
  'nav.publications': {
    de: 'PUBLIKATIONEN',
    en: 'PUBLICATIONS'
  },
  'nav.contact': {
    de: 'Kontakt',
    en: 'Contact'
  },
  'nav.activeResearch': {
    de: 'Aktive Forschung',
    en: 'Active Research'
  },

  // Page Titles
  'page.innovation': {
    de: 'Forschung, Entwicklung und Innovation',
    en: 'Research, Development and Innovation'
  },
  'page.research': {
    de: 'Forschung und Schwerpunkte',
    en: 'Research and Focus Areas'
  },
  'page.projects': {
    de: 'Projekte',
    en: 'Projects'
  },
  'page.staff': {
    de: 'Wissenschaftler',
    en: 'Scientists'
  },
  'page.director': {
    de: 'Direktor',
    en: 'Director'
  },
  'page.publications': {
    de: 'Publikationen',
    en: 'Publications'
  },
  'page.location': {
    de: 'Standort',
    en: 'Location'
  },

  // Sections
  'section.founderDirector': {
    de: 'GRÜNDER UND DIREKTOR',
    en: 'FOUNDER AND DIRECTOR'
  },
  'section.contributors': {
    de: 'MITWIRKENDE',
    en: 'CONTRIBUTORS'
  },

  // Innovation Page
  'innovation.description1': {
    de: 'IDEA verbindet rechtswissenschaftliche Forschung mit praxisorientierten Ansätzen in den Bereichen Entwicklung, Innovation und rechtliche Beratung. Das Institut trägt durch wissenschaftlich fundierte Analysen zur Weiterentwicklung rechtlicher und institutioneller Rahmenbedingungen bei.',
    en: 'IDEA combines legal research with practice-oriented approaches in the areas of development, innovation and legal consulting. The institute contributes to the further development of legal and institutional framework conditions through scientifically sound analyses.'
  },
  'innovation.description2': {
    de: 'Die Forschungsarbeit umfasst sowohl theoretische als auch angewandte Perspektiven und zielt darauf ab, Erkenntnisse für Wissenschaft, Politik und Gesellschaft bereitzustellen.',
    en: 'The research work comprises both theoretical and applied perspectives and aims to provide insights for science, politics and society.'
  },
  'innovation.prideInLaw': {
    de: 'Initiative „PRIDE IN LAW“',
    en: 'Initiative "PRIDE IN LAW"'
  },
  'innovation.prideInLawText1': {
    de: 'Die Marke „PRIDE IN LAW“, eingetragen beim Deutschen Patent- und Markenamt, ist eine Initiative des IDEA Instituts zur Förderung von Vielfalt, Inklusion und rechtlicher Sensibilisierung im akademischen und institutionellen Umfeld.',
    en: 'The brand "PRIDE IN LAW", registered with the German Patent and Trademark Office, is an initiative of the IDEA Institute to promote diversity, inclusion and legal awareness in academic and institutional environments.'
  },
  'innovation.prideInLawText2': {
    de: 'Sie dient insbesondere der Unterstützung von Bildungsformaten, wissenschaftlichem Austausch sowie der rechtlichen Auseinandersetzung mit Fragen der Gleichstellung und Antidiskriminierung.',
    en: 'It serves in particular to support educational formats, scientific exchange and legal examination of issues of equality and anti-discrimination.'
  },
  'innovation.programs': {
    de: 'Programme und Lehre',
    en: 'Programs and Teaching'
  },
  'innovation.programsIntro': {
    de: 'IDEA organisiert regelmäßig:',
    en: 'IDEA organizes regularly:'
  },
  'innovation.program1': {
    de: 'Seminare und Schulungen zu "Recht und Kultur"',
    en: 'Seminars and training on "Law and Culture"'
  },
  'innovation.program2': {
    de: 'Kurse im Bereich "Comparative Sexual Orientation Law"',
    en: 'Courses in "Comparative Sexual Orientation Law"'
  },
  'innovation.program3': {
    de: 'Vortragsreihen zu aktuellen rechtlichen Fragestellungen',
    en: 'Lecture series on current legal issues'
  },
  'innovation.coordinator': {
    de: 'Das Programm "Law for Non-Lawyers" wird von Herrn Thomas Hornung koordiniert.',
    en: 'The program "Law for Non-Lawyers" is coordinated by Mr. Thomas Hornung.'
  },
  'innovation.contact': {
    de: 'Für Anmeldungen und weitere Informationen:',
    en: 'For registrations and further information:'
  },

  // Research Page
  'research.intro': {
    de: 'Die Forschungstätigkeit von IDEA konzentriert sich insbesondere auf folgende Bereiche:',
    en: 'The research activities of IDEA focus in particular on the following areas:'
  },
  'research.area1': {
    de: 'Verfassungsrecht und Gleichheitsgrundsätze',
    en: 'Constitutional Law and Equality Principles'
  },
  'research.area2': {
    de: 'Europäisches Antidiskriminierungsrecht',
    en: 'European Anti-Discrimination Law'
  },
  'research.area3': {
    de: 'Menschenrechte und internationales öffentliches Recht',
    en: 'Human Rights and International Public Law'
  },
  'research.area4': {
    de: 'Recht der sexuellen Orientierung und Geschlechtsidentität',
    en: 'Law of Sexual Orientation and Gender Identity'
  },
  'research.area5': {
    de: 'Familienrecht und rechtliche Anerkennung',
    en: 'Family Law and Legal Recognition'
  },
  'research.area6': {
    de: 'Vergleichende Rechtswissenschaft',
    en: 'Comparative Legal Science'
  },
  'research.area7': {
    de: 'Rechtsphilosophie und Rechtsanthropologie',
    en: 'Legal Philosophy and Legal Anthropology'
  },
  'research.goal': {
    de: 'Ziel der Forschung ist es, rechtliche Entwicklungen, Rechtssysteme und Rechtskulturen im internationalen Vergleich zu analysieren und deren Auswirkungen auf die Rechte sexueller Minderheiten sowie auf gesellschaftliche und rechtliche Transformationsprozesse zu untersuchen.',
    en: 'The aim of the research is to analyze legal developments, legal systems and legal cultures in international comparison and to examine their impact on the rights of sexual minorities as well as on social and legal transformation processes.'
  },

  // Projects Page
  'project.1.title': {
    de: 'Ehrenmorde in Deutschland: Eine Analyse der rechtlichen Rahmenbedingungen und Implikationen',
    en: 'Honour Killings in Germany: An Analysis of Legal Frameworks and Implications'
  },
  'project.2.title': {
    de: 'Erforschung von Diversität, Inklusion und Chancengleichheit an deutschen Universitäten: Eine Studie über Einstellungen gegenüber sexuellen Minderheiten sowie die rechtlichen und praktischen Implikationen',
    en: 'Exploring Diversity, Inclusion, and Equal Opportunity in German Universities: A Study of Attitudes Towards Sexual Minorities and the Legal and Practical Implications'
  },
  'project.3.title': {
    de: 'Narrative von Gleichheit und Andersheit im indischen Recht und in der Literatur: Eine Untersuchung der Rechte des marginalisierten Anderen',
    en: 'Narratives of Equality and Otherness in Indian Law and Literature: Examining the Rights of the Marginalised Other'
  },
  'project.4.title': {
    de: 'Lehrpläne der Hochschulbildung: Probleme, Anliegen und Herausforderungen, Dezember 2018 – Juli 2023',
    en: 'Higher Education Curriculums: Issues, Concerns and Challenges, December 2018 – July 2023'
  },
  'project.5.title': {
    de: 'Diskriminierung am Arbeitsplatz in Deutschland, Dezember 2021 – September 2023',
    en: 'Workplace Discrimination in Germany, December 2021 – September 2023'
  },

  // Director Page
  'director.title': {
    de: 'DIREKTOR',
    en: 'DIRECTOR'
  },
  'director.teachingResearch': {
    de: 'Lehr- und Forschungsgebiete',
    en: 'Teaching & Research Areas'
  },
  'director.publications': {
    de: 'Publikationen',
    en: 'Publications'
  },
  'director.books': {
    de: 'Bücher',
    en: 'Books'
  },
  'director.readMore': {
    de: 'Mehr lesen →',
    en: 'Read more →'
  },
  'director.showAll': {
    de: 'Alle Publikationen anzeigen',
    en: 'Show all publications'
  },
  'director.forthcoming': {
    de: 'Erscheint',
    en: 'Forthcoming'
  },

  // Publications Page
  'publications.title': {
    de: 'Publikationen',
    en: 'Publications'
  },
  'publications.series': {
    de: 'IDEA LEGAL RESEARCH PAPER SERIES',
    en: 'IDEA LEGAL RESEARCH PAPER SERIES'
  },

  // Teaching areas (need individual translations for each)
  'teaching.humanRights': {
    de: 'Menschenrechte',
    en: 'Human Rights'
  },
  'teaching.publicIntlLaw': {
    de: 'Öffentliches Völkerrecht',
    en: 'Public International Law'
  },
  'teaching.constitutional': {
    de: 'Verfassungsrecht',
    en: 'Constitutional Law'
  },
  'teaching.anthropology': {
    de: 'Rechtsanthropologie',
    en: 'Legal Anthropology'
  },
  'teaching.philosophy': {
    de: 'Rechtsphilosophie',
    en: 'Philosophy of Law'
  },
  'teaching.technofeudalism': {
    de: 'Technofeudalismus',
    en: 'Techno-Feudalism'
  },
  'teaching.postcolonialism': {
    de: 'Postkolonialismus',
    en: 'Postcolonialism'
  },
  'teaching.othering': {
    de: 'Othering',
    en: 'Othering'
  },
  'teaching.migration': {
    de: 'Migration',
    en: 'Migration'
  },
  'teaching.neocolonialism': {
    de: 'Neokolonialismus',
    en: 'Neocolonialism'
  },
  'teaching.heterosexism': {
    de: 'Heterosexismus',
    en: 'Heterosexism'
  },
  'teaching.gender': {
    de: 'Gender',
    en: 'Gender'
  },
  'teaching.sexuality': {
    de: 'Sexualität',
    en: 'Sexuality'
  },

  // Publication categories
  'pub.1.category': {
    de: 'Legal Analysis',
    en: 'Legal Analysis'
  },
  'pub.2.category': {
    de: 'Human Rights',
    en: 'Human Rights'
  },
  'pub.3.category': {
    de: 'Research',
    en: 'Research'
  },
  'pub.4.category': {
    de: 'Human Rights',
    en: 'Human Rights'
  },
  'pub.5.category': {
    de: 'Social Issues',
    en: 'Social Issues'
  },

  // Location Page
  'location.title': {
    de: 'STANDORT',
    en: 'LOCATION'
  },
  'location.intro1': {
    de: 'Unser Institut liegt in der charmanten Stadt Cham im Kanton Zug, Schweiz. Diese idyllische Umgebung platziert uns an der Schnittstelle der Schweizer Kultur, mit Zugang zu einer Fülle regionaler Ressourcen und Perspektiven.',
    en: 'Our institute is located in the charming town of Cham in the canton of Zug, Switzerland. This idyllic environment places us at the interface of Swiss culture, with access to a wealth of regional resources and perspectives.'
  },
  'location.intro2': {
    de: 'Die lebendige Gemeinschaft um uns herum fördert ein Umfeld, das reich an Zusammenarbeit und Innovation ist und ermöglicht es uns, sich intensiv mit unseren Nachbarn und darüber hinaus zu engagieren. Wir sind stolz auf unser Engagement für internationale Bildung und Forschung.',
    en: 'The vibrant community around us fosters an environment rich in collaboration and innovation, enabling us to engage deeply with our neighbors and beyond. We are proud of our commitment to international education and research.'
  },
  'location.intro3': {
    de: 'Wir nutzen das einzigartige kulturelle Gefüge der Region, um interkulturellen Dialog zu inspirieren und eine wahrhaft globale Denkweise zu fördern. Der Standort bietet nicht nur Vorteile für die akademischen Bestrebungen, sondern fungiert auch als dynamischer Standort für unsere Aktivitäten auf dem globalen Parkett.',
    en: 'We leverage the unique cultural fabric of the region to inspire intercultural dialogue and promote a truly global mindset. The location not only offers advantages for academic endeavors but also serves as a dynamic base for our activities on the global stage.'
  },
  'location.intro4': {
    de: 'Unser Standort verbessert nicht nur unsere akademischen Bestrebungen, sondern dient auch als dynamische Basis für unsere Unternehmungen auf dem globalen Parkett.',
    en: 'Our location not only enhances our academic endeavors but also serves as a dynamic base for our ventures on the global stage.'
  },
  'location.address': {
    de: 'Inclusion Diversity Equality Action (IDEA) Institute of Legal Research',
    en: 'Inclusion Diversity Equality Action (IDEA) Institute of Legal Research'
  },
  'location.addressLine2': {
    de: 'Sinserstrasse 67',
    en: 'Sinserstrasse 67'
  },
  'location.city': {
    de: 'CH – 6330 Cham, Zug',
    en: 'CH – 6330 Cham, Zug'
  },
   'location.mapLink': {
    de: 'In Google Maps öffnen',
    en: 'Open in Google Maps'
  },

  // Hero Section
  'hero.badge': {
    de: 'Forschungsinstitut',
    en: 'Research Institute'
  },
  'hero.welcome': {
    de: 'Willkommen bei IDEA',
    en: 'Welcome to IDEA'
  },
  'hero.description': {
    de: 'Das Inclusion Diversity Equality Action (IDEA) Institut für Rechtsforschung ist ein unabhängiges gemeinnütziges Institut mit Sitz in Deutschland und der Schweiz. Es widmet sich der rechtswissenschaftlichen Forschung zu Fragen von Gleichheit, Antidiskriminierung, Menschenrechten und Rechtsstaatlichkeit im nationalen und internationalen Kontext.',
    en: 'The Inclusion Diversity Equality Action (IDEA) Institute for Legal Research is an independent non-profit institute based in Germany and Switzerland. It is dedicated to legal research on issues of equality, anti-discrimination, human rights and the rule of law at the national and international level.'
  },
  'hero.profileMission': {
    de: 'Profil und Mission',
    en: 'Profile and Mission'
  },
  'hero.mission1': {
    de: 'IDEA ist ein unabhängiges Institut für Rechtsforschung mit einem spezialisierten Fokus auf die rechtliche Analyse von Fragen der sexuellen Orientierung und Geschlechtsidentität innerhalb der deutschen und europäischen Rechtsordnung.',
    en: 'IDEA is an independent legal research institute with a specialized focus on the legal analysis of issues of sexual orientation and gender identity within the German and European legal order.'
  },
  'hero.mission2': {
    de: 'Während bestehende Forschung diese Themen in verschiedenen rechtsdogmatischen Bereichen behandelt, bleibt sie häufig fragmentiert. IDEA verfolgt das Ziel, diese Forschung zu bündeln, systematisch weiterzuentwickeln und durch eine eigenständige Plattform sichtbar zu machen.',
    en: 'While existing research addresses these topics in various areas of legal doctrine, it often remains fragmented. IDEA pursues the goal of bundling this research, systematically developing it further and making it visible through an independent platform.'
  },
  'hero.mission3': {
    de: 'Durch interdisziplinäre Zusammenarbeit trägt IDEA zur Weiterentwicklung des Verständnisses von Gleichheit, Nichtdiskriminierung und Grundrechten bei und leistet einen Beitrag zur Stärkung inklusiver Rechtssysteme in Europa.',
    en: 'Through interdisciplinary collaboration, IDEA contributes to the further development of the understanding of equality, non-discrimination and fundamental rights and makes a contribution to strengthening inclusive legal systems in Europe.'
  },
  'hero.imageAlt': {
    de: 'IDEA Initiative',
    en: 'IDEA Initiative'
  },

  // Footer
  'footer.imprint': {
    de: 'Impressum',
    en: 'Imprint'
  },
  'footer.privacy': {
    de: 'Datenschutz',
    en: 'Privacy Policy'
  },
  'footer.terms': {
    de: 'Allgemeine Geschäftsbedingungen',
    en: 'General Terms and Conditions'
  },
  'footer.refund': {
    de: 'Rückgaberecht',
    en: 'Refund Policy'
  },
  'footer.shipping': {
    de: 'Lieferbedingungen',
    en: 'Shipping Policy'
  },

  // Impressum Page
  'impressum.legalNotice': {
    de: 'Impressum',
    en: 'Legal Notice'
  },
  'impressum.publishedBy': {
    de: 'Herausgeber',
    en: 'Published by'
  },
  'impressum.institute': {
    de: 'Institut für Rechtsforschung',
    en: 'Institute for Legal Research'
  },
  'impressum.textContent': {
    de: 'Text & Inhalte',
    en: 'Text & Content'
  },
  'impressum.textContentDesc': {
    de: 'IDEA ist für den Inhalt dieser Website verantwortlich. Fragen zum Inhalt richten Sie bitte an IDEA.',
    en: 'IDEA is responsible for the content of this website. Please direct any questions regarding the content to IDEA.'
  },
  'impressum.concept': {
    de: 'Konzept & Umsetzung',
    en: 'Concept & Implementation'
  },
  'impressum.disclaimer': {
    de: 'Haftungsausschluss',
    en: 'Warranty and Disclaimer'
  },
  'impressum.disclaimer1': {
    de: 'IDEA bemüht sich, die Informationen auf ihrer Website aktuell und korrekt zu halten. Dennoch übernimmt IDEA keine Gewähr für die Aktualität, Genauigkeit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Änderungen oder Löschungen von Informationen behält sich IDEA jederzeit und ohne Vorankündigung vor. Haftungsansprüche sind daher ausgeschlossen.',
    en: 'IDEA strives to keep the information on its website accurate and up-to-date. However, it assumes no responsibility for the timeliness, accuracy, completeness, or quality of the information provided. It reserves the right to change or remove information at any time without prior notice. Liability claims are therefore excluded.'
  },
  'impressum.disclaimer2': {
    de: 'IDEA haftet nicht für materielle oder immaterielle Schäden, die aus dem Zugriff auf, der Nutzung oder der Unmöglichkeit der Nutzung der veröffentlichten Informationen, aus dem Missbrauch der Verbindung oder aus technischen Fehlern resultieren.',
    en: 'IDEA is not liable for material or immaterial damages resulting from access to, use of or inability to use the published information, from misuse of the connection or from technical errors.'
  },
  'impressum.disclaimer3': {
    de: 'IDEA hat keine externen Websites (die sich nicht auf ihren Servern oder in ihrem Einflussbereich befinden), die über Hyperlinks mit dieser Website verbunden sind, überprüft und übernimmt keine Verantwortung für deren Inhalt.',
    en: 'IDEA has not reviewed any external websites (that are not on its servers or within its sphere of influence) that may be linked to this website via hyperlinks and accepts no responsibility for their content.'
  },
  'impressum.copyright': {
    de: 'Urheberrecht',
    en: 'Copyright'
  },
  'impressum.copyrightText1': {
    de: 'Alle Online-Inhalte (Dokumente, Webseiten und deren Komponenten) auf der IDEA-Website sind urheberrechtlich geschützt und dürfen nur für private, akademische und nichtkommerzielle Zwecke kopiert und ausgedruckt werden. Jede Vervielfältigung, Reproduktion, Übertragung oder sonstige Nutzung von Informationen auf dieser Website für kommerzielle Zwecke ist strikt untersagt. Dies gilt insbesondere für das IDEA-Logo.',
    en: 'All online content (documents, web pages and their components) on the IDEA website is protected by copyright and may only be copied and printed for private, academic and non-commercial purposes. Any duplication, reproduction, transmission or other use of information on this website for commercial purposes is strictly prohibited. This applies in particular to the IDEA logo.'
  },
  'impressum.copyrightText2': {
    de: 'Alle Genehmigungsanträge sind schriftlich per E-Mail an IDEA zu richten.',
    en: 'All approval applications must be submitted in writing via email to IDEA.'
  },
  'footer.allRights': {
    de: 'Alle Rechte vorbehalten.',
    en: 'All rights reserved.'
  },

  // Privacy Policy Page
  'privacy.intro': {
    de: 'Das Inclusion Diversity Equality Action (IDEA) Institute of Legal Research nimmt den Schutz Ihrer personenbezogenen Daten sehr ernst.',
    en: 'The Inclusion Diversity Equality Action (IDEA) Institute of Legal Research takes the protection of your personal data very seriously.'
  },
  'privacy.responsible': {
    de: 'Verantwortliche Stelle',
    en: 'Responsible body'
  },
  'privacy.switzerland': {
    de: 'Schweiz',
    en: 'Switzerland'
  },
  'privacy.germany': {
    de: 'Deutschland',
    en: 'Germany'
  },
  'privacy.dataCollection': {
    de: 'Erhebung und Verarbeitung von Daten',
    en: 'Collection and processing of data'
  },
  'privacy.dataCollection1': {
    de: 'Wir erheben personenbezogene Daten (z.B. Name, E-Mail, Rechnungsadresse) ausschließlich für die Bestellabwicklung, Kundenkommunikation und die Einhaltung gesetzlicher Vorschriften.',
    en: 'We collect personal data (e.g., name, email, billing address) exclusively for order processing, customer communication and compliance with legal requirements.'
  },
  'privacy.dataCollection2': {
    de: 'Wir erheben Ihre personenbezogenen Daten, um Ihren Kauf zu bearbeiten und die PDF-Datei zu liefern. Die Rechtsgrundlage für diese Datenverarbeitung ist die Erfüllung unseres Vertrags mit Ihnen (Art. 6 Abs. 1 lit. b DSGVO). Wir speichern Ihre Daten für den notwendigen Zeitraum, um die Transaktion abzuschließen und gesetzlichen Verpflichtungen nachzukommen. Die übliche Aufbewahrungsfrist für Verkaufsdokumente und Rechnungen im Zusammenhang mit digitalen Downloads beträgt 6 Jahre (§ 257 HGB). Für Steuerprüfungen oder Gerichtsverfahren gilt eine Aufbewahrungsfrist von 10 Jahren (§ 147 AO), wobei in einigen Fällen die Frist bis zu 10 Jahre betragen kann. Sie haben jederzeit das Recht, Auskunft über Ihre gespeicherten Daten zu verlangen sowie deren Berichtigung oder Löschung zu beantragen.',
    en: 'We collect your personal data to process your purchase and deliver the PDF file. The legal basis for this data processing is the performance of our contract with you (Art. 6 para. 1 lit. b GDPR). We store your data for the necessary period to complete the transaction and comply with legal obligations. The standard retention period for sales documents and invoices related to digital downloads is 6 years (§ 257 HGB – German Commercial Code). For tax audits or legal proceedings, a retention period of 10 years applies (§ 147 AO – German Fiscal Code), although in some cases the period may be up to 10 years. You have the right to request information about your stored data at any time, as well as to request its correction or deletion.'
  },
  'privacy.dataUse': {
    de: 'Nutzung der Daten',
    en: 'Use of Data'
  },
  'privacy.dataUseText': {
    de: 'Ihre Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist für die Vertragserfüllung erforderlich (z.B. Zahlungsabwicklung).',
    en: 'Your data will not be shared with third parties unless this is necessary for the fulfillment of the contract (e.g., payment processing).'
  },
  'privacy.storage': {
    de: 'Speicherung und Sicherheit',
    en: 'Storage and Security'
  },
  'privacy.storageText': {
    de: 'Alle Daten werden gemäß der DSGVO sicher gespeichert.',
    en: 'All data is stored securely in accordance with the GDPR.'
  },
  'privacy.rights': {
    de: 'Ihre Rechte',
    en: 'Your Rights'
  },
  'privacy.rightsText': {
    de: 'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.',
    en: 'You have the right to access, rectify, erase, and restrict the processing of your personal data at any time.'
  },

  // Terms & Conditions Page
  'terms.scope': {
    de: 'Geltungsbereich',
    en: 'Scope of application'
  },
  'terms.scopeTitle': {
    de: 'Anwendungsbereich',
    en: 'Scope'
  },
  'terms.scopeText': {
    de: 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen digitaler Produkte über die Website des IDEA Institute of Legal Research.',
    en: 'These terms and conditions apply to all orders of digital products via the website of the IDEA Institute of Legal Research.'
  },
  'terms.contract': {
    de: 'Vertragsschluss',
    en: 'Contract Conclusion'
  },
  'terms.contractText': {
    de: 'Ein verbindlicher Vertrag kommt mit der Bestellung und Bezahlung des digitalen Produkts zustande.',
    en: 'A binding contract is concluded upon ordering and paying for the digital product.'
  },
  'terms.digitalProducts': {
    de: 'Digitale Produkte',
    en: 'Digital Products'
  },
  'terms.digitalProductsText': {
    de: 'Alle angebotenen Produkte sind herunterladbare Dateien (z.B. PDFs, eBooks, Studien). Es erfolgt kein physischer Versand.',
    en: 'All products offered are downloadable files (e.g., PDFs, eBooks, studies). There is no physical shipping.'
  },
  'terms.usageRights': {
    de: 'Nutzungsrechte',
    en: 'Usage Rights'
  },
  'terms.usageRightsText': {
    de: 'Die Produkte sind urheberrechtlich geschützt. Mit Ihrem Kauf erwerben Sie ein einfaches, nicht übertragbares Nutzungsrecht. Verbreitung, Vervielfältigung oder kommerzielle Nutzung sind nicht gestattet.',
    en: 'The products are protected by copyright. With your purchase, you acquire a simple, non-transferable right of use. Distribution, reproduction or commercial use is not permitted.'
  },
  'terms.disclaimer': {
    de: 'Haftungsausschluss',
    en: 'Disclaimer'
  },
  'terms.disclaimerText': {
    de: 'Wir übernehmen keine Haftung für Schäden, die aus unsachgemäßer Nutzung der Produkte resultieren.',
    en: 'We accept no liability for damages resulting from improper use of the products.'
  },
  'terms.applicableLaw': {
    de: 'Anwendbares Recht',
    en: 'Applicable law'
  },
  'terms.applicableLawText': {
    de: 'Es gilt deutsches Recht. Gerichtsstand ist Rheinfelden (Baden), Deutschland.',
    en: 'German law applies. The place of jurisdiction is Rheinfelden (Baden), Germany.'
  },

  // Refund Policy Page
  'refund.digitalProducts': {
    de: 'Digitale Produkte',
    en: 'Digital Products'
  },
  'refund.digitalProductsText': {
    de: 'Da es sich um sofort herunterladbare digitale Inhalte handelt, ist ein Widerruf nach Beginn des Downloads ausgeschlossen (§ 356 Abs. 5 BGB).',
    en: 'Since it is instantly downloadable digital content, a revocation is excluded after the start of the download (§ 356 para. 5 BGB).'
  },
  'refund.exceptions': {
    de: 'Ausnahmen',
    en: 'Exceptions'
  },
  'refund.exceptionsText': {
    de: 'Rückerstattungen sind nur möglich, wenn:<br />ein technischer Fehler den Download unmöglich macht und wir ihn nicht beheben können,<br />ein falsches Produkt geliefert wurde.',
    en: 'Refunds are only possible if:<br />a technical error makes the download impossible and we cannot fix it,<br />an incorrect product has been delivered.'
  },
  'refund.contact': {
    de: 'Kontakt für Rückerstattungen',
    en: 'Contact for refunds'
  },

  // Shipping Policy Page
  'shipping.digitalDelivery': {
    de: 'Digitale Lieferung',
    en: 'Digital Delivery'
  },
  'shipping.digitalDeliveryText': {
    de: 'Alle Produkte werden ausschließlich digital geliefert. Nach erfolgreicher Zahlung erhalten Sie umgehend einen Download-Link per E-Mail oder über Ihr Benutzerkonto.',
    en: 'All products are delivered exclusively digitally. After successful payment, you will receive an immediate download link via email or through your user account.'
  },
  'shipping.noPhysical': {
    de: 'Keine physischen Lieferungen',
    en: 'No physical deliveries'
  },
  'shipping.noPhysicalText': {
    de: 'Es werden keine Produkte in physischer Form versandt.',
    en: 'No products will be shipped in physical form.'
  },
  'shipping.deliveryTime': {
    de: 'Lieferzeit',
    en: 'Delivery time'
  },
  'shipping.deliveryTimeText': {
    de: 'Ihre Bestellung wird sofort nach Zahlungseingang verfügbar gemacht. Sollten Verzögerungen auftreten, kontaktieren Sie uns bitte unter:',
    en: 'Your order will be made available immediately after payment is received. Should there be any delays, please contact us at:'
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de')

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
