import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      {/* Top Bar with Logo */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-3">
                  <img 
                    src="/images/logo.webp" 
                    alt="IDEA" 
                    className="w-[200px] h-[71px] object-contain"
                  />
                </Link>
                <div className="hidden lg:block">
                  <h1 className="text-2xl font-bold text-gray-900 tracking-wider">INSTITUTE OF LEGAL RESEARCH</h1>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-full mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0 text-xs font-bold">
              <div className="relative group">
                <Link to="/" className="block px-4 py-4 text-brand-orange hover:bg-white transition h-16 flex items-center gap-1">
                  INSTITUT
                  <span className="text-xs">▼</span>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-sm min-w-max border border-gray-200 z-10">
                  <Link to="/" className="block px-5 py-3 hover:bg-gray-50 text-gray-700 text-xs font-semibold">STANDORT</Link>
                </div>
              </div>

              <Link to="/innovation-und-rechtsberatung" className="block px-4 py-4 text-gray-900 hover:bg-white transition h-16 flex items-center">
                FORSCHUNG, ENTWICKLUNG UND INNOVATION
              </Link>

              <div className="relative group">
                <Link to="/forschung" className="block px-4 py-4 text-gray-900 hover:bg-white transition h-16 flex items-center gap-1">
                  FORSCHUNG
                  <span className="text-xs">▼</span>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-sm min-w-max border border-gray-200 z-10">
                  <Link to="/research-current-projects" className="block px-5 py-3 hover:bg-gray-50 text-gray-700 text-xs font-semibold">PROJEKTE</Link>
                </div>
              </div>

              <div className="relative group">
                <Link to="/staff" className="block px-4 py-4 text-gray-900 hover:bg-white transition h-16 flex items-center gap-1">
                  WISSENSCHAFTLER
                  <span className="text-xs">▼</span>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-sm min-w-max border border-gray-200 z-10">
                  <Link to="/staff-direktor" className="block px-5 py-3 hover:bg-gray-50 text-gray-700 text-xs font-semibold">DIREKTOR</Link>
                </div>
              </div>

              <div className="relative group">
                <Link to="/publikationen" className="block px-4 py-4 text-gray-900 hover:bg-white transition h-16 flex items-center gap-1">
                  PUBLIKATIONEN
                  <span className="text-xs">▼</span>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-sm min-w-max border border-gray-200 z-10">
                  <Link to="/publikationen" className="block px-5 py-3 hover:bg-gray-50 text-gray-700 text-xs font-semibold">IDEA LEGAL RESEARCH PAPER SERIES</Link>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 ml-auto">
              <Link to="/#contact" className="bg-brand-orange hover:bg-orange-700 text-white font-bold px-8 py-2 rounded-full transition text-xs">
                KONTAKT
              </Link>

              <button className="p-2 hover:bg-gray-50 rounded-lg hidden lg:block transition">
                <Search size={18} className="text-gray-400" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="py-4 space-y-1">
            <Link to="/" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              INSTITUT
            </Link>
            <Link to="/innovation-und-rechtsberatung" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              FORSCHUNG, ENTWICKLUNG UND INNOVATION
            </Link>
            <Link to="/forschung" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              FORSCHUNG
            </Link>
            <Link to="/staff" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              WISSENSCHAFTLER
            </Link>
            <Link to="/publikationen" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              PUBLIKATIONEN
            </Link>
            <Link to="/#contact" className="w-full bg-brand-orange hover:bg-orange-700 text-white font-bold py-4 px-6 transition text-xs block text-center">
              KONTAKT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
