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
     de: 'INSTITUT FÜR RECHTSFORSCHUNG',
     en: 'INSTITUTE OF LEGAL RESEARCH'
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
  'director.title': {
    de: 'DIREKTOR',
    en: 'DIRECTOR'
  },
  'director.name': {
    de: 'Dr. Yeshwant Naik',
    en: 'Dr. Yeshwant Naik'
  },
  'director.role': {
    de: 'Vergleichender Rechtswissenschaftler mit vorheriger Erfahrung als Professor of Law in Indien.',
    en: 'Comparative law scholar with prior experience as Professor of Law in India.'
  },
  'director.bio1': {
    de: 'Dr. Yeshwant Naik ist ein Rechtswissenschaftler für vergleichendes Recht und Menschenrechte, dessen Arbeit sich auf Sexualität, Geschlechtsidentität, Migration, Asyl und transnationale Rechtssysteme konzentriert.',
    en: 'Dr. Yeshwant Naik is a comparative law and human rights scholar whose work focuses on sexuality, gender identity, migration, asylum, and transnational legal systems.'
  },
  'director.bio2': {
    de: 'Seine Forschung untersucht rechtliche Reaktionen auf Verwundbarkeit, Minderheitenschutz, Gewalt und rechtliche Ausgrenzung mit besonderem Schwerpunkt auf Europa und Indien.',
    en: 'His research examines legal responses to vulnerability, minority protection, violence, and legal exclusion, with particular emphasis on Europe and India.'
  },
  'director.researchInterests': {
    de: 'Forschungsinteressen',
    en: 'Research Interests'
  },
  'director.interest1': {
    de: 'vergleichendes Recht',
    en: 'comparative law'
  },
  'director.interest2': {
    de: 'Menschenrechtsrecht',
    en: 'human rights law'
  },
  'director.interest3': {
    de: 'LGBTQ+-Rechte',
    en: 'LGBTQ+ rights'
  },
  'director.interest4': {
    de: 'Migrations- und Flüchtlingsrecht',
    en: 'migration and refugee law'
  },
  'director.interest5': {
    de: 'Recht und Gesellschaft',
    en: 'law and society'
  },
  'director.interest6': {
    de: 'rechtliche Pluralität',
    en: 'legal pluralism'
  },
  'director.methodology': {
    de: 'Methodologischer Ansatz',
    en: 'Methodological Approach'
  },
  'director.methodIntro': {
    de: 'Dr. Naiks Arbeit verfolgt einen interdisziplinären sozio-rechtlichen Ansatz, der folgende Methoden verbindet:',
    en: 'Dr. Naik\'s work adopts an interdisciplinary socio-legal approach combining:'
  },
  'director.method1': {
    de: 'vergleichende verfassungsrechtliche Analyse',
    en: 'comparative constitutional analysis'
  },
  'director.method2': {
    de: 'qualitative Rechtsforschung',
    en: 'qualitative legal research'
  },
  'director.method3': {
    de: 'sozio-rechtliche Studien zu Migration, Sexualität und Gender',
    en: 'socio-legal studies of migration, sexuality, and gender'
  },
  'director.method4': {
    de: 'transnationale und vergleichende Rechtsanalyse',
    en: 'transnational and comparative legal analysis'
  },
  'director.publications': {
    de: 'Ausgewählte Publikationen',
    en: 'Selected Publications'
  },
  'director.booksTitle': {
    de: 'Bücher & Monographien',
    en: 'Books & Monographs'
  },
  'director.book1': {
    de: 'The Legal Imaginary: Equality and Othering in Indian Law and Literature (in Vorbereitung, Ethics Press, 2027)',
    en: 'The Legal Imaginary: Equality and Othering in Indian Law and Literature (forthcoming, Ethics Press, 2027)'
  },
  'director.book2': {
    de: 'Domestic Violence Against Male Same-Sex Partners in the EU with Special Reference to Refugee and Migrant Gay Men in Germany (Springer, 2022)',
    en: 'Domestic Violence Against Male Same-Sex Partners in the EU with Special Reference to Refugee and Migrant Gay Men in Germany (Springer, 2022)'
  },
  'director.book3': {
    de: 'Homosexuality in the Jurisprudence of the Supreme Court of India (Springer, 2017)',
    en: 'Homosexuality in the Jurisprudence of the Supreme Court of India (Springer, 2017)'
  },
  'director.editedTitle': {
    de: 'Herausgeberschaften & Buchkapitel',
    en: 'Edited Volumes & Book Chapters'
  },
  'director.chapter1': {
    de: '"Homophobic Bullying, Hate Crime, and Migration in Switzerland and Germany," in Violence Against Sexual and Gender Minorities Around the World (Edward Elgar, in Vorbereitung 2027)',
    en: '"Homophobic Bullying, Hate Crime, and Migration in Switzerland and Germany," in Violence Against Sexual and Gender Minorities Around the World (Edward Elgar, forthcoming 2027)'
  },
  'director.chapter2': {
    de: '"The Complex Legal Landscape of LGBTQ+ Rights in India," in Avant-Garde Law: New Frontiers at the Crossroads of Global Family Law (Bloomsbury Academic, in Vorbereitung 2027)',
    en: '"The Complex Legal Landscape of LGBTQ+ Rights in India," in Avant-Garde Law: New Frontiers at the Crossroads of Global Family Law (Bloomsbury Academic, forthcoming 2027)'
  },
  'director.chapter3': {
    de: '"Transgender Family Rights Issues and Concerns: A Comparative Legal Analysis of Asia and Europe," in Exploring Norms and Families Across the Globe (Lexington Books, 2022)',
    en: '"Transgender Family Rights Issues and Concerns: A Comparative Legal Analysis of Asia and Europe," in Exploring Norms and Families Across the Globe (Lexington Books, 2022)'
  },
  'director.chapter4': {
    de: 'LGBTIQ+ Inclusive Curriculum in Higher Education: Issues and Challenges (mitherausgegebener Band, University of Münster, 2023)',
    en: 'LGBTIQ+ Inclusive Curriculum in Higher Education: Issues and Challenges (co-edited volume, University of Münster, 2023)'
  },
  'director.reportsTitle': {
    de: 'Forschungsberichte',
    en: 'Research Reports'
  },
  'director.report1': {
    de: 'LGBTIQ in the Workplace: Injustice and Discrimination in Germany — Legal Analysis (University of Münster, 2023)',
    en: 'LGBTIQ in the Workplace: Injustice and Discrimination in Germany — Legal Analysis (University of Münster, 2023)'
  },
  'director.commentaryTitle': {
    de: 'Kommentare & Öffentliche Beiträge',
    en: 'Commentary & Public Writing'
  },
  'director.comment1': {
    de: '"A Critical Analysis of the Indian Supreme Court\'s Ruling on Same-Sex Marriage" (Oxford Human Rights Hub, 2025)',
    en: '"A Critical Analysis of the Indian Supreme Court\'s Ruling on Same-Sex Marriage" (Oxford Human Rights Hub, 2025)'
  },
  'director.comment2': {
    de: '"Germany\'s New Gender Self-Determination Act: Advances and Challenges" (Oxford Human Rights Hub, 2024)',
    en: '"Germany\'s New Gender Self-Determination Act: Advances and Challenges" (Oxford Human Rights Hub, 2024)'
  },
  'director.articlesTitle': {
    de: 'Zeitschriftenartikel',
    en: 'Journal Articles'
  },
  'director.article1': {
    de: '"Regulations on Sex Toy Industry in Europe," Technium Social Sciences Journal (2021)',
    en: '"Regulations on Sex Toy Industry in Europe," Technium Social Sciences Journal (2021)'
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
  'nav.home': {
    de: 'Startseite',
    en: 'Home'
  },
  'nav.about': {
    de: 'Über uns',
    en: 'About'
  },
  'nav.insights': {
    de: 'Einblicke',
    en: 'Insights'
  },
  'nav.blog': {
    de: 'Blog',
    en: 'Blog'
  },
  'nav.explainers': {
    de: 'Erklärungen',
    en: 'Explainers'
  },
  'nav.faq': {
    de: 'Häufige Fragen',
    en: 'FAQ'
  },
   'nav.programsEvents': {
     de: 'Programme & Veranstaltungen',
     en: 'Programmes & Events'
   },
  'nav.initiatives': {
    de: 'Initiativen',
    en: 'Initiatives'
  },
   'nav.newsletter': {
     de: 'Newsletter',
     en: 'Newsletter'
   },
   'programsEvents.description1': {
     de: 'Das IDEA Institute organisiert akademische und öffentlichkeitswirksame Aktivitäten, die Forschung, Dialog, Bildung und das öffentliche Verständnis für vergleichende und transnationale rechtliche Fragen fördern.',
     en: 'The IDEA Institute organises academic and public-facing activities that support research, dialogue, education, and public understanding of comparative and transnational legal issues.'
   },
   'programsEvents.description2': {
     de: 'Seine Programme schaffen Räume für interdisziplinäre Auseinandersetzung mit Sexualität, Geschlechtsidentität, Gleichheit, Migration, Asyl und Recht in verschiedenen Rechtsordnungen und sozialen Kontexten.',
     en: 'Its programmes create spaces for interdisciplinary engagement on sexuality, gender identity, equality, migration, asylum, and law across different jurisdictions and social contexts.'
   },
   'programsEvents.activitiesTitle': {
     de: 'Aktivitäten umfassen:',
     en: 'Activities include:'
   },
   'programsEvents.activity1': {
     de: 'akademische Seminare und Vorlesungen',
     en: 'academic seminars and lectures'
   },
   'programsEvents.activity2': {
     de: 'Kurse zu Sexualität, Gender und Recht',
     en: 'courses on sexuality, gender, and law'
   },
   'programsEvents.activity3': {
     de: 'öffentliche Webinare und Podiumsdiskussionen',
     en: 'public webinars and panel discussions'
   },
   'programsEvents.activity4': {
     de: '"Recht für Nicht-Juristen" Bildungsprogramme',
     en: '"Law for Non-Lawyers" educational programmes'
   },
   'programsEvents.activity5': {
     de: 'kooperative Forschungs- und Diskussionsforen',
     en: 'collaborative research and discussion forums'
   },
   'programsEvents.upcoming': {
     de: 'Kommende Programme und Veranstaltungen werden auf der Website und im IDEA Insights Newsletter bekannt gegeben.',
     en: 'Upcoming programmes and events will be announced through the website and the IDEA Insights newsletter.'
   },
   'publications.seriesTitle': {
     de: 'IDEA Legal Research Paper Series',
     en: 'IDEA Legal Research Paper Series'
   },
   'publications.seriesDesc1': {
     de: 'Die IDEA Legal Research Paper Series ist eine akademische Publikationsinitiative des IDEA Instituts, die sich der vergleichenden und transnationalen Rechtsforschung zu Sexualität, Geschlechtsidentität, Gleichheit, Migration, Asyl und damit verbundenen sozio-rechtlichen Entwicklungen widmet.',
     en: 'The IDEA Legal Research Paper Series is an academic publication initiative of the IDEA Institute dedicated to comparative and transnational legal research on sexuality, gender identity, equality, migration, asylum, and related socio-legal developments.'
   },
   'publications.seriesDesc2': {
     de: 'Registriert in Deutschland unter ISSN 2943-4068, veröffentlicht die Serie Forschungspapiere, analytische Berichte, politische Kommentare und interdisziplinäre rechtswissenschaftliche Beiträge des Instituts und verbundener Forschender.',
     en: 'Registered in Germany under ISSN 2943-4068, the series publishes research papers, analytical reports, policy commentary, and interdisciplinary legal scholarship produced by the Institute and affiliated researchers.'
   },
   'publications.seriesDesc3': {
     de: 'Die Serie zielt darauf ab, einen zugänglichen, forschungsgestützten Dialog zu aufkommenden und wenig erforschten Bereichen des vergleichenden Rechts und transnationaler Rechtsstudien zu fördern.',
     en: 'The series aims to support accessible, research-driven engagement with emerging and underexplored areas of comparative law and transnational legal studies.'
   },
   'publications.seriesDesc4': {
     de: 'Alle Publikationen werden unter der Creative Commons Attribution License (CC BY 4.0) veröffentlicht, die Wiederverwendung und Adaption bei entsprechender Nennung erlaubt.',
     en: 'All publications are released under the Creative Commons Attribution License (CC BY 4.0), permitting reuse and adaptation with appropriate attribution.'
   },
   'publications.contactTitle': {
     de: 'Für Anfragen, Einreichungen oder Kooperationen wenden Sie sich bitte an:',
     en: 'For inquiries, submissions, or collaboration, please contact:'
   },
   'publications.contactName': {
     de: 'Dr. Yeshwant Naik',
     en: 'Dr. Yeshwant Naik'
   },
   'publications.contactEmail': {
     de: 'info@ideainstitute.de',
     en: 'info@ideainstitute.de'
   },
   'publications.researchTitle': {
     de: 'Forschungspublikationen',
     en: 'Research Publications'
   },
   'publications.researchDesc': {
     de: 'Das IDEA Institut produziert akademische und analytische Arbeiten in seinen Kernforschungsbereichen.',
     en: 'The IDEA Institute produces academic and analytical work across its core research areas.'
   },
   'publications.category1': {
     de: 'Vergleichende Rechtsanalyse',
     en: 'Comparative Legal Analysis'
   },
   'publications.category1Desc': {
     de: 'Forschung, die rechtliche Entwicklungen in verschiedenen Rechtsordnungen und Rechtssystemen untersucht.',
     en: 'Research examining legal developments across jurisdictions and comparative legal systems.'
   },
   'publications.category2': {
     de: 'Migration, Asyl & Transnationales Recht',
     en: 'Migration, Asylum & Transnational Law'
   },
   'publications.category2Desc': {
     de: 'Forschung zu Migration, Mobilität, Asylsystemen und grenzüberschreitenden rechtlichen Entwicklungen.',
     en: 'Research exploring migration, mobility, asylum systems, and cross-border legal developments.'
   },
   'publications.category3': {
     de: 'Recht & Lebensrealität',
     en: 'Law & Lived Experience'
   },
   'publications.category3Desc': {
     de: 'Sozio-rechtliche Forschung, die das Verhältnis zwischen formalen rechtlichen Schutzmaßnahmen und alltäglichen Realitäten untersucht.',
     en: 'Socio-legal research examining the relationship between formal legal protections and everyday realities.'
   },
   'publications.category4': {
     de: 'Gewalt, Schutz & Rechtliche Lücken',
     en: 'Violence, Protection & Legal Gaps'
   },
   'publications.category4Desc': {
     de: 'Forschung, die Gewalt, Ausgrenzung und institutionelle Schutzlücken analysiert, die sexuelle und gender-diverse Menschen betreffen.',
     en: 'Research analysing violence, exclusion, and institutional protection failures affecting sexual and gender minorities.'
   },
   'publications.category5': {
     de: 'Politik & Kommentar',
     en: 'Policy & Commentary'
   },
   'publications.category5Desc': {
     de: 'Kritischer rechtlicher und sozialer Kommentar zu aktuellen Entwicklungen in Recht, Politik und öffentlicher Diskussion.',
     en: 'Critical legal and social commentary on contemporary developments in law, policy, and public discourse.'
   },
   'publications.germanTitle': {
     de: 'Deutschsprachige Publikationen',
     en: 'German-Language Publications'
   },
   'publications.germanDesc': {
     de: 'Ausgewählte deutschsprachige Forschung und Kommentare.',
     en: 'Selected German-language research and commentary.'
   },
   'publications.accessTitle': {
     de: 'Zugang zu Publikationen',
     en: 'Accessing Publications'
   },
   'publications.accessDesc': {
     de: 'Publikationen sind auf der Publikationsplattform des Instituts verfügbar und nach thematischen Forschungsbereichen geordnet. Weitere Details, Abstracts und Download-Versionen werden schrittweise auf der Website bereitgestellt.',
     en: 'Publications are available through the Institute\'s publication platform and are organised according to thematic research areas. Additional publication details, abstracts, and downloadable versions will be made available progressively through the website.'
   },
   'research.title': {
     de: 'FORSCHUNG',
     en: 'RESEARCH'
   },
   'research.focusTitle': {
     de: 'Forschungsschwerpunkte',
     en: 'Research Focus'
   },
   'research.focusDesc': {
     de: 'Die Forschung des Instituts ist um miteinander verbundene Themenbereiche organisiert, die Sexualität, Geschlechtsidentität, Gleichheit, Migration und transnationale rechtliche Entwicklungen in verschiedenen Rechtsordnungen und sozialen Kontexten untersuchen.',
     en: 'The Institute\'s research is organised around interconnected thematic areas examining sexuality, gender identity, equality, migration, and transnational legal developments across different jurisdictions and social contexts.'
   },
   'research.category1': {
     de: 'Vergleichende Rechtssysteme',
     en: 'Comparative Legal Systems'
   },
   'research.category1Desc': {
     de: 'Forschung, die untersucht, wie Sexualität und Geschlechtsidentität in ausgewählten Rechtsordnungen in Südasien, der Globalen Südhalbkugel und Europa reguliert werden, einschließlich ihrer Wechselwirkung mit internationalen Rechtsrahmen.',
     en: 'Research examining how sexuality and gender identity are regulated across selected jurisdictions in South Asia, the Global South, and Europe, including their interaction with international legal frameworks.'
   },
   'research.category2': {
     de: 'Migration, Asyl & Transnationales Recht',
     en: 'Migration, Asylum & Transnational Law'
   },
   'research.category2Desc': {
     de: 'Forschung zu LGBTQ+-Asylsystemen, Migrationswegen, grenzüberschreitender rechtlicher Anerkennung und der Behandlung sexueller und gender-diverser Menschen in transnationalen rechtlichen Kontexten.',
     en: 'Research on LGBTQ+ asylum systems, migration pathways, cross-border legal recognition, and the treatment of sexual and gender minorities within transnational legal contexts.'
   },
   'research.category3': {
     de: 'Recht & Lebensrealität',
     en: 'Law and Lived Experience'
   },
   'research.category3Desc': {
     de: 'Untersuchung des Verhältnisses zwischen formalen rechtlichen Schutzmaßnahmen und gelebten Realitäten, unter Berücksichtigung der kulturellen, institutionellen und sozioökonomischen Bedingungen, die den Zugang zu Rechten und Gerechtigkeit prägen.',
     en: 'Examination of the relationship between formal legal protections and lived realities, with attention to the cultural, institutional, and socio-economic conditions shaping access to rights and justice.'
   },
   'research.category4': {
     de: 'Gewalt & Rechtlicher Schutz',
     en: 'Violence and Legal Protection'
   },
   'research.category4Desc': {
     de: 'Forschung zu häuslicher und partnerschaftlicher Gewalt in gleichgeschlechtlichen und gender-diversen Kontexten, einschließlich rechtlicher Anerkennung, institutioneller Reaktionen und Schutzlücken in verschiedenen Rechtsordnungen.',
     en: 'Research exploring domestic and intimate partner violence in same-sex and gender-diverse contexts, including legal recognition, institutional responses, and protection gaps across jurisdictions.'
   },
   'research.approachTitle': {
     de: 'Forschungsansatz',
     en: 'Research Approach'
   },
   'research.approachDesc': {
     de: 'Das Institut verfolgt eine vergleichende sozio-rechtliche Methodik, die folgende Ansätze verbindet:',
     en: 'The Institute adopts a comparative socio-legal methodology combining:'
   },
   'research.approach1': {
     de: 'dogmatische Rechtsanalyse',
     en: 'doctrinal legal analysis'
   },
   'research.approach2': {
     de: 'vergleichende Rechtswissenschaft',
     en: 'comparative legal studies'
   },
   'research.approach3': {
     de: 'Migrations- und Asylforschung',
     en: 'migration and asylum research'
   },
   'research.approach4': {
     de: 'Menschenrechtsrahmen',
     en: 'human rights frameworks'
   },
   'research.approach5': {
     de: 'interdisziplinäre sozio-rechtliche Perspektiven',
     en: 'interdisciplinary socio-legal perspectives'
   },
   'research.approachDesc2': {
     de: 'Die Arbeit betont den Vergleich über Rechtsordnungen hinweg und konzentriert sich auf Bereiche, in denen die Rechtswissenschaft fragmentiert, aufstrebend oder unterentwickelt bleibt.',
     en: 'Its work emphasises cross-jurisdictional comparison and focuses on areas where legal scholarship remains fragmented, emerging, or underdeveloped.'
   },
   'research.projectsTitle': {
     de: 'Forschungsprojekte',
     en: 'Research Projects'
   },
   'research.projectsDesc': {
     de: 'Das Institut führt sowohl laufende als auch abgeschlossene Forschungsprojekte in seinen thematischen Kernbereichen durch.',
     en: 'The Institute undertakes both ongoing and completed research projects across its core thematic areas.'
   },
   'research.ongoingTitle': {
     de: 'Laufende Projekte',
     en: 'Ongoing Projects'
   },
   'research.project1': {
     de: 'Gewalt gegen sexuelle und gender-diverse Menschen: Vergleichende Perspektiven',
     en: 'Violence Against Sexual and Gender Minorities: Comparative Perspectives'
   },
   'research.project2': {
     de: 'Evolving Conceptions of Family, Marriage, and LGBTQ+ Rights in Contemporary India',
     en: 'Evolving Conceptions of Family, Marriage, and LGBTQ+ Rights in Contemporary India'
   },
   'research.project3': {
     de: 'Ehrenmorde in Deutschland: Rechtliche Rahmenbedingungen und Implikationen',
     en: 'Honour Killings in Germany: Legal Frameworks and Implications'
   },
   'research.project4': {
     de: 'Diversität, Inklusion und Chancengleichheit an deutschen Universitäten',
     en: 'Diversity, Inclusion, and Equal Opportunity in German Universities'
   },
   'research.project5': {
     de: 'Narrative von Gleichheit und Andersheit im indischen Recht und in der Literatur',
     en: 'Narratives of Equality and Otherness in Indian Law and Literature'
   },
   'research.completedTitle': {
     de: 'Abgeschlossene Projekte',
     en: 'Completed Projects'
   },
   'research.project6': {
     de: 'Lehrpläne der Hochschulbildung: Probleme, Anliegen und Herausforderungen (2018–2023)',
     en: 'Higher Education Curriculums: Issues, Concerns and Challenges (2018–2023)'
   },
   'research.project7': {
     de: 'Diskriminierung am Arbeitsplatz in Deutschland (2021–2023)',
     en: 'Workplace Discrimination in Germany (2021–2023)'
   },
   'explainers.title': {
     de: 'ERKLÄRUNGEN',
     en: 'EXPLAINERS'
   },
   'explainers.headline': {
     de: 'Einfache Einführungen in wesentliche rechtliche Konzepte zu Sexualität, Geschlechtsidentität, Gleichheit, Migration und transnationalem Recht.',
     en: 'Simple introductions to key legal concepts relating to sexuality, gender identity, equality, migration, and transnational law.'
   },
   'explainers.sogi.title': {
     de: 'Was ist SOGI-Recht?',
     en: 'What is SOGI Law?'
   },
   'explainers.sogi.intro': {
     de: 'SOGI steht für Sexual Orientation and Gender Identity (sexuelle Orientierung und Geschlechtsidentität).',
     en: 'SOGI stands for Sexual Orientation and Gender Identity.'
   },
   'explainers.sogi.what': {
     de: 'SOGI-Recht bezieht sich auf rechtliche Regeln und Schutzmaßnahmen in Bezug auf:',
     en: 'SOGI law refers to legal rules and protections relating to:'
   },
   'explainers.sogi.aspect1': {
     de: 'sexuelle Orientierung (zu wem sich eine Person hingezogen fühlt)',
     en: 'sexual orientation (who a person is attracted to)'
   },
   'explainers.sogi.aspect2': {
     de: 'Geschlechtsidentität (wie eine Person ihr Geschlecht identifiziert)',
     en: 'gender identity (how a person identifies their gender)'
   },
   'explainers.sogi.simple': {
     de: 'Einfach ausgedrückt geht es darum, ob Personen offen, sicher und gleichberechtigt in der Gesellschaft leben können.',
     en: 'In simple terms, it concerns whether individuals can live openly, safely, and equally within society.'
   },
   'explainers.sogi.includes': {
     de: 'Was umfasst SOGI-Recht?',
     en: 'What does SOGI law include?'
   },
   'explainers.sogi.item1': {
     de: 'Gesetze zu gleichgeschlechtlichen Beziehungen oder Ehen',
     en: 'laws relating to same-sex relationships or marriage'
   },
   'explainers.sogi.item2': {
     de: 'Antidiskriminierungsschutz',
     en: 'anti-discrimination protections'
   },
   'explainers.sogi.item3': {
     de: 'rechtliche Anerkennung der Geschlechtsidentität',
     en: 'legal recognition of gender identity'
   },
   'explainers.sogi.item4': {
     de: 'Schutz vor Gewalt oder Belästigung',
     en: 'protection from violence or harassment'
   },
   'explainers.sogi.why': {
     de: 'Warum es wichtig ist',
     en: 'Why it matters'
   },
   'explainers.sogi.affects': {
     de: 'SOGI-Recht beeinflusst direkt:',
     en: 'SOGI law directly affects:'
   },
   'explainers.sogi.effect1': {
     de: 'Sicherheit',
     en: 'safety'
   },
   'explainers.sogi.effect2': {
     de: 'Würde',
     en: 'dignity'
   },
   'explainers.sogi.effect3': {
     de: 'Zugang zu Rechten',
     en: 'access to rights'
   },
   'explainers.sogi.effect4': {
     de: 'gesellschaftliche Teilhabe',
     en: 'participation in society'
   },
   'explainers.sogi.note': {
     de: 'Rechtlicher Schutz kann von Land zu Land erheblich variieren.',
     en: 'Legal protection can differ significantly from one country to another.'
   },
   'explainers.asylum.title': {
     de: 'Wie funktioniert LGBTQ+-Asyl in Europa?',
     en: 'How Does LGBTQ+ Asylum Work in Europe?'
   },
   'explainers.asylum.intro': {
     de: 'Asyl ist Schutz, der Menschen gewährt wird, die nicht sicher in ihrem Heimatland leben können.',
     en: 'Asylum is protection granted to people who cannot safely live in their home country.'
   },
   'explainers.asylum.apply': {
     de: 'LGBTQ+-Personen können Asyl beantragen, wenn sie wegen ihrer sexuellen Orientierung oder Geschlechtsidentität:',
     en: 'LGBTQ+ individuals may apply for asylum when they face:'
   },
   'explainers.asylum.reason1': {
     de: 'Verfolgung',
     en: 'persecution'
   },
   'explainers.asylum.reason2': {
     de: 'Gewalt',
     en: 'violence'
   },
   'explainers.asylum.reason3': {
     de: 'Inhaftierung',
     en: 'imprisonment'
   },
   'explainers.asylum.reason4': {
     de: 'schwere Diskriminierung',
     en: 'serious discrimination'
   },
   'explainers.asylum.process': {
     de: 'Wie funktioniert der Prozess?',
     en: 'How does the process work?'
   },
   'explainers.asylum.step1': {
     de: 'Ankunft in einem europäischen Land',
     en: 'arrival in a European country'
   },
   'explainers.asylum.step2': {
     de: 'Stellung eines Asylantrags',
     en: 'submission of an asylum application'
   },
   'explainers.asylum.step3': {
     de: 'Prüfung durch nationale Behörden',
     en: 'assessment by national authorities'
   },
   'explainers.asylum.step4': {
     de: 'eine Entscheidung über die Gewährung oder Ablehnung des Schutzes',
     en: 'a decision granting or refusing protection'
   },
   'explainers.asylum.challenges': {
     de: 'Häufige Herausforderungen',
     en: 'Common challenges'
   },
   'explainers.asylum.challenge1': {
     de: 'Nachweis der Identität oder persönlichen Geschichte',
     en: 'proving identity or personal history'
   },
   'explainers.asylum.challenge2': {
     de: 'kulturelles Missverständnis oder Stereotype',
     en: 'cultural misunderstanding or stereotypes'
   },
   'explainers.asylum.challenge3': {
     de: 'uneinheitliche Entscheidungsprozesse',
     en: 'inconsistent decision-making processes'
   },
   'explainers.asylum.why': {
     de: 'Warum es wichtig ist',
     en: 'Why it matters'
   },
   'explainers.asylum.note': {
     de: 'Auch wo rechtliche Schutzmaßnahmen bestehen, ist der Zugang zu Sicherheit und Schutz in der Praxis nicht immer einfach.',
     en: 'Even where legal protections exist, access to safety and protection is not always straightforward in practice.'
   },
   'explainers.differences.title': {
     de: 'Warum sind LGBTQ+-Rechte in verschiedenen Ländern unterschiedlich?',
     en: 'Why Are LGBTQ+ Rights Different Across Countries?'
   },
   'explainers.differences.shaped': {
     de: 'Rechtssysteme werden geprägt von:',
     en: 'Legal systems are shaped by:'
   },
   'explainers.differences.factor1': {
     de: 'Geschichte',
     en: 'history'
   },
   'explainers.differences.factor2': {
     de: 'Politik',
     en: 'politics'
   },
   'explainers.differences.factor3': {
     de: 'Kultur',
     en: 'culture'
   },
   'explainers.differences.factor4': {
     de: 'Religion',
     en: 'religion'
   },
   'explainers.differences.factor5': {
     de: 'verfassungsrechtliche Traditionen',
     en: 'constitutional traditions'
   },
   'explainers.differences.result': {
     de: 'Infolgedessen variieren die Rechte in Bezug auf Sexualität und Geschlechtsidentität in verschiedenen Ländern stark.',
     en: 'As a result, rights relating to sexuality and gender identity vary widely across countries.'
   },
   'explainers.differences.approaches': {
     de: 'Verschiedene rechtliche Ansätze',
     en: 'Different legal approaches'
   },
   'explainers.differences.world': {
     de: 'Auf der Welt:',
     en: 'Across the world:'
   },
   'explainers.differences.level1': {
     de: 'einige Länder bieten umfassende rechtliche Schutzmaßnahmen',
     en: 'some countries provide extensive legal protections'
   },
   'explainers.differences.level2': {
     de: 'einige bieten teilweise Anerkennung',
     en: 'some offer partial recognition'
   },
   'explainers.differences.level3': {
     de: 'andere kriminalisieren weiterhin gleichgeschlechtliche Beziehungen',
     en: 'others continue to criminalise same-sex relationships'
   },
   'explainers.differences.why': {
     de: 'Warum es wichtig ist',
     en: 'Why it matters'
   },
   'explainers.differences.uncertainty': {
     de: 'Unterschiede zwischen Rechtssystemen können Unsicherheit und Verwundbarkeit schaffen, insbesondere für:',
     en: 'Differences between legal systems can create uncertainty and vulnerability, especially for:'
   },
   'explainers.differences.impact1': {
     de: 'Migranten',
     en: 'migrants'
   },
   'explainers.differences.impact2': {
     de: 'Asylsuchende',
     en: 'asylum seekers'
   },
   'explainers.differences.impact3': {
     de: 'Menschen, die über Grenzen ziehen',
     en: 'people moving across borders'
   },
   'explainers.differences.note': {
     de: 'Rechte werden nicht gleich in allen Rechtsordnungen erfahren.',
     en: 'Rights are not experienced equally across jurisdictions.'
   },
   'explainers.travel.title': {
     de: 'Was passiert, wenn Rechte nicht über Grenzen hinweg reisen?',
     en: 'What Happens When Rights Do Not Travel Across Borders?'
   },
   'explainers.travel.intro': {
     de: 'Der Umzug in ein anderes Land kann die rechtliche und soziale Position einer Person drastisch verändern.',
     en: 'Moving between countries can dramatically change a person’s legal and social position.'
   },
   'explainers.travel.example': {
     de: 'Zum Beispiel kann eine Person, die in einem Land anerkannt und geschützt wird:',
     en: 'For example, a person recognised and protected in one country may:'
   },
   'explainers.travel.consequence1': {
     de: 'anderswo die rechtliche Anerkennung verlieren',
     en: 'lose legal recognition elsewhere'
   },
   'explainers.travel.consequence2': {
     de: 'Diskriminierung erfahren',
     en: 'face discrimination'
   },
   'explainers.travel.consequence3': {
     de: 'auf Kriminalisierung oder soziale Feindseligkeit stoßen',
     en: 'encounter criminalisation or social hostility'
   },
   'explainers.travel.possible': {
     de: 'Mögliche Folgen',
     en: 'Possible consequences'
   },
   'explainers.travel.affects': {
     de: 'Dies kann betreffen:',
     en: 'This may affect:'
   },
   'explainers.travel.area1': {
     de: 'Familienanerkennung',
     en: 'family recognition'
   },
   'explainers.travel.area2': {
     de: 'Dokumente zur Geschlechtsidentität',
     en: 'gender identity documentation'
   },
   'explainers.travel.area3': {
     de: 'Zugang zu Beschäftigung oder Dienstleistungen',
     en: 'access to employment or services'
   },
   'explainers.travel.area4': {
     de: 'persönliche Sicherheit',
     en: 'personal safety'
   },
   'explainers.travel.why': {
     de: 'Warum es wichtig ist',
     en: 'Why it matters'
   },
   'explainers.travel.note': {
     de: 'Rechte reisen nicht immer mit der Person. Dies schafft rechtliche Unsicherheit und erhebliche persönliche Risiken.',
     en: 'Rights do not always travel with the person. This creates legal uncertainty and significant personal risk.'
   },
   'explainers.gap.title': {
     de: 'Was ist die Lücke zwischen Recht und Lebensrealität?',
     en: 'What is the Gap Between Law and Lived Reality?'
   },
   'explainers.gap.intro': {
     de: 'Rechtlicher Schutz und Alltagserfahrung sind nicht immer dasselbe.',
     en: 'Legal protection and everyday experience are not always the same.'
   },
   'explainers.gap.country': {
     de: 'Ein Land kann:',
     en: 'A country may:'
   },
   'explainers.gap.can1': {
     de: 'Diskriminierung verbieten',
     en: 'prohibit discrimination'
   },
   'explainers.gap.can2': {
     de: 'Gleichheit garantieren',
     en: 'guarantee equality'
   },
   'explainers.gap.can3': {
     de: 'Rechte formell anerkennen',
     en: 'formally recognise rights'
   },
   'explainers.gap.yet': {
     de: 'Dennoch können Menschen erleben:',
     en: 'Yet individuals may still experience:'
   },
   'explainers.gap.experience1': {
     de: 'Diskriminierung',
     en: 'discrimination'
   },
   'explainers.gap.experience2': {
     de: 'Stigmatisierung',
     en: 'stigma'
   },
   'explainers.gap.experience3': {
     de: 'Ausgrenzung',
     en: 'exclusion'
   },
   'explainers.gap.experience4': {
     de: 'Hindernisse beim Zugang zu Gerechtigkeit',
     en: 'barriers to justice'
   },
   'explainers.gap.whyExists': {
     de: 'Warum diese Lücke existiert',
     en: 'Why this gap exists'
   },
   'explainers.gap.lawsAlone': {
     de: 'Gesetze allein ändern nicht automatisch:',
     en: 'Laws alone do not automatically change:'
   },
   'explainers.gap.change1': {
     de: 'soziale Einstellungen',
     en: 'social attitudes'
   },
   'explainers.gap.change2': {
     de: 'institutionelles Verhalten',
     en: 'institutional behaviour'
   },
   'explainers.gap.change3': {
     de: 'wirtschaftliche Bedingungen',
     en: 'economic conditions'
   },
   'explainers.gap.whyMatters': {
     de: 'Warum es wichtig ist',
     en: 'Why it matters'
   },
   'explainers.gap.helps': {
     de: 'Das Verständnis der Lücke zwischen Recht und Lebensrealität hilft:',
     en: 'Understanding the gap between law and lived reality helps:'
   },
   'explainers.gap.helps1': {
     de: 'politische Maßnahmen zu verbessern',
     en: 'improve policy responses'
   },
   'explainers.gap.helps2': {
     de: 'Institutionen zu stärken',
     en: 'strengthen institutions'
   },
   'explainers.gap.helps3': {
     de: 'praktische Hindernisse für Gleichheit und Schutz zu identifizieren',
     en: 'identify practical barriers to equality and protection'
   },
   'contact.title': {
     de: 'KONTAKT',
     en: 'CONTACT'
   },
   'contact.germanyTitle': {
     de: 'Deutschland',
     en: 'Germany'
   },
   'contact.germanyAddress': {
     de: 'Ernst-Reuter-Str. 12\n79618 Rheinfelden (Baden)',
     en: 'Ernst-Reuter-Str. 12\n79618 Rheinfelden (Baden)'
   },
   'contact.switzerlandAddress': {
     de: 'Hybrid Address – Sinserstr. 67\nCH-6330 Cham',
     en: 'Hybrid Address – Sinserstr. 67\nCH-6330 Cham'
   },
   'contact.germanyEmail': {
     de: 'info@ideainstitute.de',
     en: 'info@ideainstitute.de'
   },
    'contact.switzerlandTitle': {
      de: 'Schweiz',
      en: 'Switzerland'
    },
    'contact.switzerlandEmail': {
      de: 'info@ideainstitute.ch',
      en: 'info@ideainstitute.ch'
    },
    'contact.address': {
      de: 'Adresse',
      en: 'Address'
    },
   'contact.email': {
     de: 'E-Mail',
     en: 'Email'
   },
   'nav.subtitle': {
     de: 'Rechtsforschung · Gleichheit · Inklusion',
     en: 'Legal Research · Equality · Inclusion'
   },
   'blog.title': {
     de: 'BLOG & KOMMENTAR',
     en: 'BLOG & COMMENTARY'
   },
   'blog.headline': {
     de: 'Diese Sektion bietet zugänglichen Kommentar und Analyse zu aktuellen rechtlichen und sozialen Entwicklungen in Bezug auf:',
     en: 'This section features accessible commentary and analysis on current legal and social developments relating to:'
   },
   'blog.topic1': {
     de: 'Sexualität und Geschlechtsidentität',
     en: 'sexuality and gender identity'
   },
   'blog.topic2': {
     de: 'Migration und Asyl',
     en: 'migration and asylum'
   },
   'blog.topic3': {
     de: 'vergleichende rechtliche Entwicklungen',
     en: 'comparative legal developments'
   },
   'blog.topic4': {
     de: 'Gleichheit und Antidiskriminierungsrecht',
     en: 'equality and non-discrimination law'
   },
    'blog.comingSoon': {
      de: 'Blog-Artikel und Kommentare – in Kürze.',
      en: 'Blog articles and commentary – coming soon.'
    },
    'newsletter.title': {
     de: 'NEWSLETTER',
     en: 'NEWSLETTER'
   },
   'newsletter.headline': {
     de: 'IDEA Insights',
     en: 'IDEA Insights'
   },
   'newsletter.description1': {
     de: 'IDEA Insights ist der monatliche Newsletter des IDEA Instituts und bietet zugängliche Updates zu vergleichendem LGBTQ+-Recht, Migration, Asyl und transnationalen rechtlichen Entwicklungen.',
     en: 'IDEA Insights is the monthly newsletter of the IDEA Institute, featuring accessible updates on comparative LGBTQ+ law, migration, asylum, and transnational legal developments.'
   },
   'newsletter.description2': {
     de: 'Der Newsletter umfasst:',
     en: 'The newsletter includes:'
   },
   'newsletter.item1': {
     de: 'wichtige Forschungserkenntnisse',
     en: 'key research insights'
   },
   'newsletter.item2': {
     de: 'vergleichende rechtliche und politische Entwicklungen',
     en: 'comparative legal and policy developments'
   },
   'newsletter.item3': {
     de: 'kurze Erklärungen und Kommentare',
     en: 'short explainers and commentary'
   },
   'newsletter.item4': {
     de: 'Forschungspublikationen und institutionelle Updates',
     en: 'research publications and institutional updates'
   },
   'newsletter.subscribe': {
     de: 'Abonnieren Sie den Newsletter, um zugängliche rechtliche Einblicke, Forschungsupdates und Neuigkeiten vom IDEA Institute zu erhalten.',
     en: 'Subscribe to receive accessible legal insights, research updates, and news from the IDEA Institute.'
   },
   'newsletter.nameLabel': {
     de: 'Name',
     en: 'Name'
   },
   'newsletter.emailLabel': {
     de: 'E-Mail',
     en: 'Email'
   },
   'newsletter.languageLabel': {
     de: 'Bevorzugte Sprache',
     en: 'Preferred Language'
   },
   'newsletter.languageEn': {
     de: 'Englisch',
     en: 'English'
   },
   'newsletter.languageDe': {
     de: 'Deutsch',
     en: 'Deutsch'
   },
   'newsletter.button': {
     de: 'Abonnieren',
     en: 'Subscribe'
   },
   'newsletter.placeholderName': {
     de: 'Ihr Name',
     en: 'Your name'
   },
    'newsletter.placeholderEmail': {
      de: 'ihre@email.de',
      en: 'your@email.com'
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

  // Home Page
  'home.title': {
    de: 'IDEA Institut',
    en: 'IDEA Institute'
  },
  'home.subtitle': {
    de: 'LGBTQ+-Rechte über Grenzen hinweg verstehen',
    en: 'Understanding LGBTQ+ Laws Across Borders'
  },
  'home.description': {
    de: 'Das IDEA Institute (Inclusion Diversity Equality Action) ist ein unabhängiges Rechtsforschungsinstitut, das sich auf vergleichende und transnationale Forschung zu Sexualität, Geschlechtsidentität, Gleichheit und LGBTQ+-Recht spezialisiert hat. Mit Sitz in Deutschland und der Schweiz untersucht das Institut, wie sich Gesetze in verschiedenen Rechtsordnungen unterscheiden und wie sie das Leben der Menschen beeinflussen – insbesondere im Kontext von Migration, Asyl und grenzüberschreitenden rechtlichen Entwicklungen.',
    en: 'The IDEA Institute (Inclusion Diversity Equality Action) is an independent legal research institute focused on comparative and transnational research on sexuality, gender identity, equality, and LGBTQ+ law. Based in Germany and Switzerland, the Institute examines how laws differ across jurisdictions and how they affect people\'s lives, particularly in the context of migration, asylum, and cross-border legal developments.'
  },
  'home.whatWeDo': {
    de: 'Was wir tun',
    en: 'What We Do'
  },
  'home.whatWeDoDesc': {
    de: 'Wir analysieren, wie Rechtssysteme in Südostasien, der Globalen Südhalbkugel und in Europa:',
    en: 'We analyse how legal systems across South Asia, the Global South, and Europe:'
  },
  'home.whatWeDo.1': {
    de: 'LGBTQ+-Rechte definieren',
    en: 'define LGBTQ+ rights'
  },
  'home.whatWeDo.2': {
    de: 'Auf Migration und Asyl reagieren',
    en: 'respond to migration and asylum issues'
  },
  'home.whatWeDo.3': {
    de: 'Die gelebte Praxis gestalten',
    en: 'shape lived experiences in practice'
  },
  'home.whatWeDoBottom': {
    de: 'Unsere Arbeit verbindet Rechtsforschung mit sozialen Realitäten und hilft, besser zu verstehen, wie Rechte über Grenzen hinweg funktionieren.',
    en: 'Our work connects legal research with social realities, helping to better understand how rights function across borders.'
  },
  'home.whyThisMatters': {
    de: 'Warum das wichtig ist',
    en: 'Why This Matters'
  },
  'home.whyDesc': {
    de: 'Rechtliche Rechte werden in verschiedenen Ländern nicht gleich erlebt.',
    en: 'Legal rights are not experienced equally across countries.'
  },
  'home.whyFor': {
    de: 'Für LGBTQ+-Personen kann das bedeuten:',
    en: 'For LGBTQ+ individuals, this can mean:'
  },
  'home.why1': {
    de: 'Schutz in einem Land und Kriminalisierung in einem anderen',
    en: 'protection in one country and criminalisation in another'
  },
  'home.why2': {
    de: 'Anerkennung im Gesetz, aber Diskriminierung im Alltag',
    en: 'recognition in law, but discrimination in everyday life'
  },
  'home.why3': {
    de: 'Unsicherheit bei Migrations- und Asylverfahren',
    en: 'uncertainty in migration and asylum processes'
  },
  'home.whyBottom': {
    de: 'Das Institut zielt darauf ab, zu einem besseren rechtlichen Verständnis, einer informierten politischen Diskussion und inklusiveren Rechtssystemen beizutragen.',
    en: 'The Institute aims to contribute to better legal understanding, informed policy discussion, and more inclusive legal systems.'
  },
  'home.ourWork': {
    de: 'Unsere Arbeit',
    en: 'Our Work'
  },
  'home.ourWork1': {
    de: 'Vergleichende Rechtsforschung',
    en: 'comparative legal research'
  },
  'home.ourWork2': {
    de: 'Politikanalyse und Berichte',
    en: 'policy analysis and reports'
  },
  'home.ourWork3': {
    de: 'Akademische Veröffentlichungen',
    en: 'academic publications'
  },
  'home.ourWork4': {
    de: 'Zugängliche rechtliche Einblicke und Erklärungen',
    en: 'accessible legal insights and explainers'
  },
  'home.startHere': {
    de: 'Hier beginnen',
    en: 'Start Here'
  },
  'home.startResearch': {
    de: 'Unsere Forschungsbereiche erkunden',
    en: 'Explore our Research Areas'
  },
  'home.startInsights': {
    de: 'Unsere Einblicke und Blog lesen',
    en: 'Read our Insights & Blog'
  },
  'home.startPublications': {
    de: 'Unsere Publikationen durchsuchen',
    en: 'Browse our Publications'
  },
  'home.getInvolved': {
    de: 'Mitmachen',
    en: 'Get Involved'
  },
  'home.getInvolvedDesc': {
    de: 'Folgen Sie uns auf LinkedIn',
    en: 'Follow us on LinkedIn'
  },
  'home.newsletter': {
    de: 'Abonnieren Sie unseren Newsletter IDEA Insights',
    en: 'Subscribe to our newsletter IDEA Insights'
  },
  'home.contact': {
    de: 'Kontaktieren Sie uns für Zusammenarbeit, Forschung oder Veranstaltungen',
    en: 'Contact us for collaboration, research, or events'
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
    de: 'Ihre Bestellung wird sofort nach Zahlungseingang verf\u00fcgbar gemacht. Sollten Verz\u00f6gerungen auftreten, kontaktieren Sie uns bitte unter:',
    en: 'Your order will be made available immediately after payment is received. Should there be any delays, please contact us at:'
  },

  // About Page
  'about.title': {
    de: '\u00dcber das IDEA Institut',
    en: 'About the IDEA Institute'
  },
  'about.intro': {
    de: 'Das IDEA Institut ist ein unabh\u00e4ngiges Rechtsforschungsinstitut mit Sitz in Deutschland und der Schweiz.',
    en: 'The IDEA Institute is an independent legal research institute based in Germany and Switzerland.'
  },
  'about.introDesc': {
    de: 'Das Institut ist ein unabh\u00e4ngiges Rechtsforschungsinstitut mit Sitz in Deutschland und der Schweiz. Es konzentriert sich auf vergleichende und transnationale Rechtsforschung zu Fragen der Sexualit\u00e4t, Geschlechtsidentit\u00e4t, Gleichheit und Nichtdiskriminierung, mit besonderem Fokus auf Migration, Asyl und grenz\u00fcberschreitende Rechtsprozesse. Die Arbeit vereint rechtliche Analyse mit sozialwissenschaftlichen Perspektiven, um besser zu verstehen, wie Gesetze in verschiedenen Rechtsordnungen und sozialen Kontexten in der Praxis funktionieren.',
    en: 'The Institute is an independent legal research institute based in Germany and Switzerland. It focuses on comparative and transnational legal research on sexuality, gender identity, equality, and non-discrimination, with particular attention to migration, asylum, and cross-border legal processes. Its work brings together legal analysis and socio-legal perspectives to better understand how laws operate in practice across different jurisdictions and social contexts.'
  },
  'about.missionTitle': {
    de: 'Unsere Mission',
    en: 'Our Mission'
  },
  'about.missionIntro': {
    de: 'Das Institut zielt darauf ab, eine rigorose, interdisziplin\u00e4re Rechtsforschung zu Sexualit\u00e4t, Geschlechtsidentit\u00e4t und Gleichheit voranzutreiben.',
    en: 'The Institute aims to advance rigorous, interdisciplinary legal research on sexuality, gender identity, and equality.'
  },
  'about.missionDesc': {
    de: 'Es verfolgt dieses Ziel durch:',
    en: 'It does so by:'
  },
  'about.mission.1': {
    de: 'Entwicklung vergleichender Rechtsanalysen mit Anker in S\u00fcdostasien',
    en: 'developing comparative legal analysis anchored in South Asia'
  },
  'about.mission.2': {
    de: 'Untersuchung rechtlicher Entwicklungen in der Globalen S\u00fcdhalbkugel und in Europa',
    en: 'examining legal developments across the Global South and Europe'
  },
  'about.mission.3': {
    de: 'Analyse transnationaler Rechtsprozesse, insbesondere Migration und Asyl',
    en: 'analysing transnational legal processes, particularly migration and asylum'
  },
  'about.mission.4': {
    de: 'Verkn\u00fcpfung rechtlicher Rahmenbedingungen mit gelebten sozialen Realit\u00e4ten',
    en: 'connecting legal frameworks with lived social realities'
  },
  'about.mission.5': {
    de: 'Beitrag zu bislang wenig erschlossenen Bereichen der globalen Rechtswissenschaft',
    en: 'contributing to underexplored areas of global legal scholarship'
  },
  'about.missionGoal': {
    de: 'Das Institut m\u00f6chte zu einem besseren rechtlichen Verst\u00e4ndnis, einer informierten politischen Reflexion und der Entwicklung inklusiverer Rechtssysteme beitragen.',
    en: 'The Institute seeks to support legal understanding, policy reflection, and the development of more inclusive legal systems.'
  },
  'about.approachTitle': {
    de: 'Unser Ansatz',
    en: 'Our Approach'
  },
  'about.approachDesc': {
    de: 'Das Institut verfolgt einen vergleichenden sozialwissenschaftlichen Rechtsansatz, der folgende Methoden kombiniert:',
    en: 'The Institute adopts a comparative socio-legal methodology combining:'
  },
  'about.approach.1': {
    de: 'Dogmatische Rechtsanalyse',
    en: 'doctrinal legal analysis'
  },
  'about.approach.2': {
    de: 'Vergleichende Rechtswissenschaft',
    en: 'comparative legal studies'
  },
  'about.approach.3': {
    de: 'Forschung zu Migration und Asyl',
    en: 'migration and asylum research'
  },
  'about.approach.4': {
    de: 'Menschenrechtsrahmen',
    en: 'human rights frameworks'
  },
  'about.approach.5': {
    de: 'Interdisziplin\u00e4re Perspektiven',
    en: 'interdisciplinary perspectives'
  },
  'about.approachGoal': {
    de: 'Dieser Ansatz erm\u00f6glicht die Untersuchung sowohl formaler Rechtsstrukturen als auch ihrer praktischen sozialen Auswirkungen.',
    en: 'This approach allows for the examination of both formal legal structures and their practical social impact.'
  },
  'about.perspectiveTitle': {
    de: 'Unsere Perspektive',
    en: 'Our Perspective'
  },
  'about.perspectiveDesc': {
    de: 'Das Institut ist in der s\u00fcdasiatischen Rechtswissenschaft verankert und arbeitet gleichzeitig innerhalb eines breiteren transnationalen und vergleichenden Rahmens. Seine Arbeit untersucht rechtliche Entwicklungen in:',
    en: 'The Institute is anchored in South Asian legal scholarship while operating within a broader transnational and comparative framework. Its work examines legal developments across:'
  },
  'about.perspective.1': {
    de: 'S\u00fcdostasien',
    en: 'South Asia'
  },
  'about.perspective.2': {
    de: 'der Globalen S\u00fcdhalbkugel',
    en: 'the Global South'
  },
  'about.perspective.3': {
    de: 'europ\u00e4ischen Rechtssystemen',
    en: 'European legal systems'
  },
  'about.perspective.4': {
    de: 'internationalen Rechtsrahmen',
    en: 'international legal frameworks'
  },
  'about.perspectiveGoal': {
    de: 'Durch die Verbindung dieser Kontexte untersucht das Institut, wie Rechtssysteme \u00fcber Grenzen hinweg miteinander interagieren und umfassendere globale Entwicklungen pr\u00e4gen.',
    en: 'By connecting these contexts, the Institute explores how legal systems interact across borders and shape broader global developments.'
  },
  'about.whoWeAreTitle': {
    de: 'Wer Wir Sind',
    en: 'Who We Are'
  },
  'about.whoWeAreDesc': {
    de: 'Das Institut agiert als forschungsgeleitete Initiative, die von einem Kernteam getragen wird, das f\u00fcr akademische, administrative und strategische Funktionen verantwortlich ist.',
    en: 'The Institute operates as a research-led initiative supported by a core team responsible for its academic, administrative, and strategic functions.'
  },
  'about.drNaik.title': {
    de: 'Dr. Yeshwant Naik',
    en: 'Dr. Yeshwant Naik'
  },
  'about.drNaik.role': {
    de: 'Forschungsprofessor | Wissenschaftlicher Direktor',
    en: 'Research Professor | Scientific Director'
  },
  'about.drNaik.desc': {
    de: 'Dr. Naik leitet die Forschungsrichtung und akademische Arbeit des Instituts. Seine Arbeit konzentriert sich auf vergleichende und transnationale Studien zum LGBTQ+-Recht, mit besonderem Schwerpunkt auf S\u00fcdostasien, Migration, Asyl und globale Rechtssysteme. Er ist verantwortlich f\u00fcr:',
    en: 'Dr. Naik leads the Institute\u2019s research direction and academic output. His work focuses on comparative and transnational LGBTQ+ legal studies, with particular emphasis on South Asia, migration, asylum, and global legal systems. He is responsible for:'
  },
  'about.drNaik.1': {
    de: 'Forschungsdesign und akademische Strategie',
    en: 'Research design and academic strategy'
  },
  'about.drNaik.2': {
    de: 'Publikationen und intellektuelle Ausrichtung',
    en: 'Publications and intellectual direction'
  },
  'about.drNaik.3': {
    de: 'Institutionelle Entwicklung',
    en: 'Institutional development'
  },
  'about.drNaik.4': {
    de: 'Alle Forschungspublikationen und akademischen Ausgaben des Instituts werden unter seiner akademischen Leitung entwickelt.',
    en: 'All research publications and academic outputs of the Institute are developed under his academic direction.'
  },
  'about.thomasHornung.title': {
    de: 'Thomas Hornung',
    en: 'Thomas Hornung'
  },
  'about.thomasHornung.role': {
    de: 'Finanzen & Verwaltung',
    en: 'Finance & Administration'
  },
  'about.thomasHornung.desc': {
    de: 'Thomas Hornung ist f\u00fcr die finanziellen und administrativen Operationen des Instituts zust\u00e4ndig und unterst\u00fctzt die organisatorische Struktur, Compliance und operative Kontinuit\u00e4t. Er ist verantwortlich f\u00fcr:',
    en: 'Thomas Hornung oversees the financial and administrative operations of the Institute, supporting organisational structure, compliance, and operational continuity. He is responsible for:'
  },
  'about.thomasHornung.1': {
    de: 'Finanzmanagement',
    en: 'Financial management'
  },
  'about.thomasHornung.2': {
    de: 'Administrative Koordination',
    en: 'Administrative coordination'
  },
  'about.thomasHornung.3': {
    de: 'Interne organisatorische Prozesse',
    en: 'Internal organisational processes'
  },
  'about.bettinaSchwenker.title': {
    de: 'Bettina Schwenker',
    en: 'Bettina Schwenker'
  },
  'about.bettinaSchwenker.role': {
    de: 'Unterst\u00fctzung & Strategische Beitr\u00e4ge',
    en: 'Support & Strategic Contributor'
  },
  'about.bettinaSchwenker.desc': {
    de: 'Bettina Schwenker unterst\u00fctzt die Entwicklung des Instituts durch strategische Erkenntnisse und langfristige institutionelle Planung.',
    en: 'Bettina Schwenker supports the Institute\u2019s development through strategic insight and long-term institutional planning.'
  },
  'about.mirkoKnepper.title': {
    de: 'Mirko Knepper',
    en: 'Mirko Knepper'
  },
  'about.mirkoKnepper.role': {
    de: 'Assoziiertes Mitglied',
    en: 'Associated Member'
  },
  'about.mirkoKnepper.desc': {
    de: 'Mirko Knepper tritt zum Institut durch akademische und institutionelle Zusammenarbeit bei.',
    en: 'Mirko Knepper contributes to the Institute through academic and institutional collaboration.'
  },
  'about.heraldGronberg.title': {
    de: 'Herald Gronberg',
    en: 'Herald Gronberg'
  },
  'about.heraldGronberg.role': {
    de: 'Assoziiertes Mitglied',
    en: 'Associated Member'
  },
  'about.heraldGronberg.desc': {
    de: 'Herald Gronberg unterst\u00fctzt die kollaborative und institutionelle Arbeit des Instituts.',
    en: 'Herald Gronberg supports the Institute\u2019s collaborative and institutional engagement.'
  },
  'about.collabTitle': {
    de: 'Kooperationsrahmen',
    en: 'Collaborative Framework'
  },
  'about.collabDesc': {
    de: 'Obwohl die Forschung intern geleitet wird, arbeitet das Institut mit:',
    en: 'While research is led internally, the Institute engages with:'
  },
  'about.collab.1': {
    de: 'akademischen Kooperationspartnern',
    en: 'academic collaborators'
  },
  'about.collab.2': {
    de: 'Rechtswissenschaftlern und Praktikern',
    en: 'legal scholars and practitioners'
  },
  'about.collab.3': {
    de: 'Partnerinstitutionen und Netzwerken',
    en: 'partner institutions and networks'
  },
  'about.collabGoal': {
    de: 'Diese Kooperationen f\u00f6rdern den wissenschaftlichen Austausch, den Dialog und die Entwicklung gemeinsamer Initiativen.',
    en: 'These collaborations support scholarly exchange, dialogue, and the development of joint initiatives.'
  },
  'about.researchTitle': {
    de: 'Forschungspositionierung',
    en: 'Research Positioning'
  },
  'about.researchDesc': {
    de: 'Das IDEA Institut agiert als spezialisierte akademische Forschungsinitiative an der Schnittstelle von Recht, Gesellschaft und transnationalen Rechtsentwicklungen. Seine Arbeit tr\u00e4gt zum aufstrebenden Feld der vergleichenden Rechtsforschung zu LGBTQ+-Rechten bei, indem s\u00fcdasiatische Rechtsperspektiven mit europ\u00e4ischer und globaler Rechtsdiskussion verbunden werden.',
    en: 'The IDEA Institute operates as a specialised academic research initiative at the intersection of law, society, and transnational legal developments. Its work contributes to the emerging field of comparative LGBTQ+ legal studies by connecting South Asian legal perspectives with European and global legal discourse.'
  },

  // Initiatives Page
  'initiatives.title': {
    de: 'Initiativen',
    en: 'Initiatives'
  },
  'initiatives.intro': {
    de: 'Das Institut entwickelt gezielte Initiativen, die Forschung, Bildung und \u00f6ffentliche Einbindung in den Bereichen Recht, Gleichheit und soziale Inklusion unterst\u00fctzen.',
    en: 'The Institute develops targeted initiatives that support research, education, and public engagement in the areas of law, equality, and social inclusion.'
  },
  'initiatives.prideInLawTitle': {
    de: 'PRIDE IN LAW',
    en: 'PRIDE IN LAW'
  },
  'initiatives.prideInLawDesc': {
    de: 'PRIDE IN LAW ist eine akademische Initiative des IDEA Instituts, die sich auf Rechtsbewusstsein, Bildung und interdisziplin\u00e4re Auseinandersetzung in Bezug auf Sexualit\u00e4t, Geschlechtsidentit\u00e4t, Gleichheit und Antidiskriminierungsrecht konzentriert.',
    en: 'PRIDE IN LAW is an academic initiative of the IDEA Institute focused on legal awareness, education, and interdisciplinary engagement relating to sexuality, gender identity, equality, and non-discrimination law.'
  },
  'initiatives.prideInLawSupports': {
    de: 'Die Initiative unterst\u00fctzt:',
    en: 'The initiative supports:'
  },
  'initiatives.prideInLaw.1': {
    de: 'Akademische Workshops und Seminare',
    en: 'academic workshops and seminars'
  },
  'initiatives.prideInLaw.2': {
    de: 'Interdisziplin\u00e4rer Dialog \u00fcber Gleichheits- und Antidiskriminierungsrecht',
    en: 'interdisciplinary dialogue on equality and non-discrimination law'
  },
  'initiatives.prideInLaw.3': {
    de: 'Bildungsprogramme zu Sexualit\u00e4t, Geschlecht und Recht',
    en: 'educational programmes on sexuality, gender, and law'
  },
  'initiatives.prideInLaw.4': {
    de: 'Kritische Auseinandersetzung mit rechtlichen Rahmenbedingungen, die sexuelle und geschlechtliche Minderheiten betreffen',
    en: 'critical engagement with legal frameworks affecting sexual and gender minorities'
  },
  'initiatives.prideInLaw.origin': {
    de: 'PRIDE IN LAW wurde von Thomas Hornung ins Leben gerufen und agiert innerhalb des breiteren akademischen und institutionellen Rahmens des IDEA Instituts.',
    en: 'PRIDE IN LAW was initiated by Thomas Hornung and operates within the broader academic and institutional framework of the IDEA Institute.'
  },
  'initiatives.prideInLawTrademark': {
    de: 'Der Name \u201ePride in Law\u201c ist eine eingetragene Marke, die Thomas Hornung geh\u00f6rt.',
    en: 'The name "Pride in Law" is a registered trademark owned by Thomas Hornung.'
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en')

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
