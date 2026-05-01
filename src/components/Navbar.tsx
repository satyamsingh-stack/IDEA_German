import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-200 shadow-sm">
      {/* Top Bar with Logo and Title */}
      <div className="border-b border-gray-100 bg-gradient-to-r from-white via-white to-gray-50">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-4">
                <img 
                  src="/images/logo.webp" 
                  alt="IDEA" 
                  className="w-[200px] h-[71px] object-contain"
                />
              </Link>
              <div className="hidden lg:block">
                <div className="relative">
                  <h1 className="text-2xl font-bold text-gray-900 tracking-widest uppercase">
                    INSTITUTE OF LEGAL RESEARCH
                  </h1>
                  <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-brand-orange via-orange-400 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Desktop Badge */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-500 font-medium">Active Research</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)]">
        <div className="max-w-full mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0 text-xs font-bold">
              <div className="relative group">
                <Link to="/" className="block px-5 py-4 text-brand-orange hover:bg-white/80 hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.8)] transition-all duration-200 h-16 flex items-center gap-1 relative">
                  <span className="relative z-10">INSTITUT</span>
                  <span className="text-[10px] relative z-10 text-brand-orange/700 group-hover:text-brand-orange transition-colors">▼</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <div className="absolute left-0 pt-1 hidden group-hover:block bg-white/95 backdrop-blur-sm shadow-xl rounded-lg min-w-max border border-gray-200 z-50">
                  <Link to="/" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white text-gray-700 text-xs font-semibold border-b border-gray-100 transition-all">
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      STANDORT
                    </span>
                  </Link>
                </div>
              </div>

              <Link to="/innovation-und-rechtsberatung" className="block px-5 py-4 text-gray-600 hover:bg-white/80 hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.8)] hover:text-brand-orange transition-all duration-200 h-16 flex items-center relative group">
                <span className="relative z-10">FORSCHUNG, ENTWICKLUNG UND INNOVATION</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>

              <div className="relative group">
                <Link to="/forschung" className="block px-5 py-4 text-gray-600 hover:bg-white/80 hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.8)] hover:text-brand-orange transition-all duration-200 h-16 flex items-center gap-1 relative">
                  <span className="relative z-10">FORSCHUNG</span>
                  <span className="text-[10px] relative z-10 text-gray-400 group-hover:text-brand-orange transition-colors">▼</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <div className="absolute left-0 pt-1 hidden group-hover:block bg-white/95 backdrop-blur-sm shadow-xl rounded-lg min-w-max border border-gray-200 z-50">
                  <Link to="/research-current-projects" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white text-gray-700 text-xs font-semibold border-b border-gray-100 transition-all">
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                      </svg>
                      PROJEKTE
                    </span>
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link to="/staff" className="block px-5 py-4 text-gray-600 hover:bg-white/80 hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.8)] hover:text-brand-orange transition-all duration-200 h-16 flex items-center gap-1 relative">
                  <span className="relative z-10">WISSENSCHAFTLER</span>
                  <span className="text-[10px] relative z-10 text-gray-400 group-hover:text-brand-orange transition-colors">▼</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <div className="absolute left-0 pt-1 hidden group-hover:block bg-white/95 backdrop-blur-sm shadow-xl rounded-lg min-w-max border border-gray-200 z-50">
                  <Link to="/staff-direktor" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-white text-gray-700 text-xs font-semibold border-b border-gray-100 transition-all">
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      DIREKTOR
                    </span>
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link to="/publikationen" className="block px-5 py-4 text-gray-600 hover:bg-white/80 hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.8)] hover:text-brand-orange transition-all duration-200 h-16 flex items-center gap-1 relative">
                  <span className="relative z-10">PUBLIKATIONEN</span>
                  <span className="text-[10px] relative z-10 text-gray-400 group-hover:text-brand-orange transition-colors">▼</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <div className="absolute left-0 pt-1 hidden group-hover:block bg-white/95 backdrop-blur-sm shadow-xl rounded-lg min-w-max border border-gray-200 z-50">
                  <Link to="/publikationen" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-white text-gray-700 text-xs font-semibold border-b border-gray-100 transition-all">
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                      </svg>
                      IDEA LEGAL RESEARCH PAPER SERIES
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 ml-auto">
              <Link to="/#contact" className="bg-gradient-to-r from-brand-orange to-orange-600 hover:from-orange-600 hover:to-brand-orange text-white font-bold px-8 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 text-xs uppercase tracking-wider">
                Kontakt
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} className="text-gray-600" /> : <Menu size={20} className="text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl">
          <div className="py-2 space-y-1 px-4">
            <Link to="/" className="block px-5 py-4 text-gray-700 font-bold hover:bg-gradient-to-r hover:from-orange-50 hover:to-white rounded-xl transition-all border border-transparent hover:border-orange-100 text-sm">
              INSTITUT
            </Link>
            <Link to="/innovation-und-rechtsberatung" className="block px-5 py-4 text-gray-700 font-bold hover:bg-gradient-to-r hover:from-blue-50 hover:to-white rounded-xl transition-all border border-transparent hover:border-blue-100 text-sm">
              FORSCHUNG, ENTWICKLUNG UND INNOVATION
            </Link>
            <Link to="/forschung" className="block px-5 py-4 text-gray-700 font-bold hover:bg-gradient-to-r hover:from-blue-50 hover:to-white rounded-xl transition-all border border-transparent hover:border-blue-100 text-sm">
              FORSCHUNG
            </Link>
            <Link to="/staff" className="block px-5 py-4 text-gray-700 font-bold hover:bg-gradient-to-r hover:from-green-50 hover:to-white rounded-xl transition-all border border-transparent hover:border-green-100 text-sm">
              WISSENSCHAFTLER
            </Link>
            <Link to="/publikationen" className="block px-5 py-4 text-gray-700 font-bold hover:bg-gradient-to-r hover:from-purple-50 hover:to-white rounded-xl transition-all border border-transparent hover:border-purple-100 text-sm">
              PUBLIKATIONEN
            </Link>
            <Link to="/#contact" className="w-full bg-gradient-to-r from-brand-orange to-orange-600 hover:from-orange-600 hover:to-brand-orange text-white font-bold py-4 px-6 transition-all rounded-xl text-sm block text-center shadow-lg shadow-orange-500/20">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
