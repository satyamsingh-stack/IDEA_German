import { useState } from 'react'
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
            <div className="flex items-center gap-12">
              <div className="flex flex-col items-start">
                <span className="text-4xl font-bold text-brand-orange leading-none">IDEA</span>
              </div>
              <div className="hidden lg:block text-center">
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
                <a href="#" className="block px-4 py-4 text-brand-orange hover:bg-white transition h-16 flex items-center gap-1">
                  INSTITUT
                  <span className="text-xs">▼</span>
                </a>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-sm min-w-max border border-gray-200 z-10">
                  <a href="#" className="block px-5 py-3 hover:bg-gray-50 text-gray-700 text-xs font-semibold">STANDORT</a>
                </div>
              </div>

              <a href="#innovation" className="block px-4 py-4 text-gray-900 hover:bg-white transition h-16 flex items-center">
                FORSCHUNG, ENTWICKLUNG UND INNOVATION
              </a>

              <div className="relative group">
                <a href="#research" className="block px-4 py-4 text-gray-900 hover:bg-white transition h-16 flex items-center gap-1">
                  FORSCHUNG
                  <span className="text-xs">▼</span>
                </a>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-sm min-w-max border border-gray-200 z-10">
                  <a href="#projects" className="block px-5 py-3 hover:bg-gray-50 text-gray-700 text-xs font-semibold">PROJEKTE</a>
                </div>
              </div>

              <div className="relative group">
                <a href="#staff" className="block px-4 py-4 text-gray-900 hover:bg-white transition h-16 flex items-center gap-1">
                  WISSENSCHAFTLER
                  <span className="text-xs">▼</span>
                </a>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-sm min-w-max border border-gray-200 z-10">
                  <a href="#staff" className="block px-5 py-3 hover:bg-gray-50 text-gray-700 text-xs font-semibold">DIREKTOR</a>
                </div>
              </div>

              <div className="relative group">
                <a href="#publications" className="block px-4 py-4 text-gray-900 hover:bg-white transition h-16 flex items-center gap-1">
                  PUBLIKATIONEN
                  <span className="text-xs">▼</span>
                </a>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-sm min-w-max border border-gray-200 z-10">
                  <a href="#" className="block px-5 py-3 hover:bg-gray-50 text-gray-700 text-xs font-semibold">IDEA LEGAL RESEARCH PAPER SERIES</a>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 ml-auto">
              <button className="bg-brand-orange hover:bg-orange-700 text-white font-bold px-8 py-2 rounded-full transition text-xs">
                KONTAKT
              </button>

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
            <a href="#" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              INSTITUT
            </a>
            <a href="#innovation" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              FORSCHUNG, ENTWICKLUNG UND INNOVATION
            </a>
            <a href="#research" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              FORSCHUNG
            </a>
            <a href="#staff" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              WISSENSCHAFTLER
            </a>
            <a href="#publications" className="block px-6 py-4 text-gray-700 font-bold hover:bg-gray-50 border-b text-xs">
              PUBLIKATIONEN
            </a>
            <button className="w-full bg-brand-orange hover:bg-orange-700 text-white font-bold py-4 px-6 transition text-xs text-left">
              KONTAKT
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
