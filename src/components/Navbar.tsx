import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const { t } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setOpenMenus([])
  }

  const toggleSubmenu = (label: string) => {
    setOpenMenus(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    )
  }

   const navItems: NavItem[] = [
     { label: t('nav.home'), path: '/' },
     { label: t('nav.about'), path: '/about' },
     { label: t('nav.research'), path: '/forschung' },
     { label: t('nav.publications'), path: '/publikationen' },
     {
       label: t('nav.insights'),
       path: '#',
       children: [
         { label: t('nav.blog'), path: '/blog' },
         { label: t('nav.explainers'), path: '/explainers' },
         { label: t('nav.faq'), path: '/faq' },
       ],
     },
     { label: t('nav.programsEvents'), path: '/programs-events' },
     { label: t('nav.initiatives'), path: '/initiatives' },
     { label: t('nav.newsletter'), path: '/newsletter' },
     { label: t('nav.contact'), path: '/contact' },
   ]

  const renderNavItem = (item: NavItem, isMobile: boolean = false) => {
    const hasChildren = item.children && item.children.length > 0

    if (hasChildren) {
      return (
        <div key={item.label} className="relative group">
          <button
            onClick={() => {
              if (isMobile) {
                toggleSubmenu(item.label)
              }
            }}
            className={`flex items-center justify-between w-full px-5 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              isMobile
                ? 'text-gray-700 hover:text-brand-orange hover:bg-gray-50 rounded-xl'
                : 'text-gray-600 hover:text-brand-orange'
            }`}
            aria-expanded={isMobile ? openMenus.includes(item.label) : undefined}
          >
            <span>{item.label}</span>
            <ChevronDown
              size={isMobile ? 16 : 14}
              className={`ml-1 transition-transform duration-200 ${
                openMenus.includes(item.label) ? 'rotate-180' : ''
              }`}
            />
          </button>
          {hasChildren && (
            <div
              className={`${
                isMobile
                  ? openMenus.includes(item.label) ? 'block' : 'hidden'
                  : 'absolute left-0 pt-1 hidden group-hover:block'
              }`}
            >
              <div
                className={`${
                  isMobile
                    ? 'bg-gray-50 rounded-xl mx-2 mb-2'
                    : 'bg-white/95 backdrop-blur-sm shadow-xl rounded-lg min-w-max border border-gray-200 z-50'
                }`}
              >
                {item.children!.map(child => (
                  <Link
                    key={child.label}
                    to={child.path}
                    onClick={() => {
                      closeMenu()
                      setOpenMenus([])
                    }}
                    className={`block px-5 py-3 text-sm font-medium transition-all ${
                      isMobile
                        ? 'text-gray-700 hover:bg-white hover:rounded-xl px-7'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white hover:text-brand-orange border-b border-gray-100 last:border-0'
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={item.label}
        to={item.path}
        onClick={closeMenu}
        className={`flex items-center ${
          isMobile
            ? 'px-5 py-4 text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-brand-orange hover:bg-gray-50 rounded-xl transition-all'
            : 'px-5 py-4 text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-brand-orange hover:bg-white/80 transition-all duration-200 relative group'
        }`}
      >
        {item.label}
        {!isMobile && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        )}
      </Link>
    )
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-200 shadow-sm">
      {/* Top Bar with Logo and Title */}
      <div className="border-b border-gray-100 bg-gradient-to-r from-white via-white to-gray-50">
        <div className="max-w-full mx-auto px-6">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
                <img
                  src="/images/logo.png"
                  alt="IDEA"
                  className="w-[150px] h-[53px] object-contain lg:w-[200px] lg:h-[71px]"
                />
              </Link>
              <div className="hidden lg:block">
                <div className="relative">
                  <h1 className="text-2xl font-bold text-gray-900 tracking-widest uppercase">
                    {t('nav.institute')}
                  </h1>
                  <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-brand-orange via-orange-400 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              <LanguageSwitcher />
              <div className="flex items-center gap-1 px-2 py-1 lg:px-4 lg:py-2 rounded-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] lg:text-xs text-gray-500 font-medium">{t('nav.activeResearch')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)]">
        <div className="max-w-full mx-auto px-6">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0 text-xs font-bold">
              {navItems.map(item => renderNavItem(item))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden ml-auto w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} className="text-gray-600" /> : <Menu size={20} className="text-gray-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl animate-slideDown">
          <div className="py-3 px-4 space-y-1">
            {navItems.map(item => renderNavItem(item, true))}
          </div>
        </div>
      )}
    </nav>
  )
}