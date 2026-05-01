import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import {
  HomePage,
  InnovationPage,
  ResearchPage,
  ProjectsPage,
  StaffPage,
  DirectorPage,
  PublicationsPage,
  ImpressumPage,
  PrivacyPolicyPage,
  TermsAndConditionsPage,
  RefundPolicyPage,
  ShippingPolicyPage,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="innovation-und-rechtsberatung" element={<InnovationPage />} />
          <Route path="forschung" element={<ResearchPage />} />
          <Route path="research-current-projects" element={<ProjectsPage />} />
          <Route path="staff" element={<StaffPage />} />
          <Route path="staff-direktor" element={<DirectorPage />} />
          <Route path="publikationen" element={<PublicationsPage />} />
          <Route path="impressum" element={<ImpressumPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="general-terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="refund-policy" element={<RefundPolicyPage />} />
          <Route path="shipping-policy" element={<ShippingPolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
