import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { LanguageProvider } from './contexts/LanguageContext'
import { AdminProvider, useAdmin } from './contexts/AdminContext'
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
import { AdminLoginPage } from './admin/AdminLoginPage'
import { AdminLayout } from './admin/AdminLayout'
import { AdminDashboard } from './admin/AdminDashboard'
import { PublicationsManager } from './admin/PublicationsManager'
import { NewsletterManager } from './admin/NewsletterManager'
import { BlogManager } from './admin/BlogManager'
import { ReactNode } from 'react'

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAdmin()
  if (!isAuthenticated) return <Navigate to="/admin" replace />
  return <>{children}</>
}

function AdminRoutes() {
  const { isAuthenticated } = useAdmin()

  return (
    <Routes>
      <Route index element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <AdminLoginPage />} />
      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="publications" element={<PublicationsManager />} />
        <Route path="newsletter" element={<NewsletterManager />} />
        <Route path="blog" element={<BlogManager />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AdminProvider>
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
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </LanguageProvider>
  )
}

export default App
