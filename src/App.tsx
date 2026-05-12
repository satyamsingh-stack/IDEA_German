import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { LanguageProvider } from './contexts/LanguageContext'
import {
  HomePage,
  AboutPage,
  InnovationPage,
  ResearchPage,
  ProjectsPage,
  StaffPage,
  DirectorPage,
  PublicationsPage,
  LocationPage,
  ImpressumPage,
  PrivacyPolicyPage,
  TermsAndConditionsPage,
  RefundPolicyPage,
  ShippingPolicyPage,
  InsightsPage,
  BlogPage,
  ExplainersPage,
  FAQPage,
  ProgramsEventsPage,
  InitiativesPage,
  NewsletterPage,
  ContactPage,
} from './pages'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about/director" element={<DirectorPage />} />
            <Route path="standort" element={<LocationPage />} />
            <Route path="innovation-und-rechtsberatung" element={<InnovationPage />} />
            <Route path="forschung" element={<ResearchPage />} />
            <Route path="research-current-projects" element={<ProjectsPage />} />
            <Route path="staff" element={<StaffPage />} />
            <Route path="staff-direktor" element={<DirectorPage />} />
            <Route path="publikationen" element={<PublicationsPage />} />
            <Route path="insights" element={<InsightsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="explainers" element={<ExplainersPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="programs-events" element={<ProgramsEventsPage />} />
            <Route path="initiatives" element={<InitiativesPage />} />
            <Route path="newsletter" element={<NewsletterPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="impressum" element={<ImpressumPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="general-terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="refund-policy" element={<RefundPolicyPage />} />
            <Route path="shipping-policy" element={<ShippingPolicyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
