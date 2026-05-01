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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
