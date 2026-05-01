import {
  Navbar,
  HeroSection,
  AboutSection,
  ResearchSection,
  ProjectsSection,
  StaffSection,
  PublicationsSection,
  MembershipSection,
  Footer,
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ProjectsSection />
        <StaffSection />
        <PublicationsSection />
        <MembershipSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
