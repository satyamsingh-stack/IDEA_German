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
     { label: t('nav.director'), path: '/staff-direktor' },
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
             className={`flex items-center justify-between w-full px-5 py-4 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-out ${
               isMobile
                 ? 'text-gray-800 hover:text-brand-orange hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-transparent rounded-xl'
                 : 'text-gray-700 hover:text-brand-orange relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-brand-orange after:to-orange-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'
             }`}
             aria-expanded={isMobile ? openMenus.includes(item.label) : undefined}
           >
             <span className="relative z-10">{item.label}</span>
             <ChevronDown
               size={isMobile ? 16 : 14}
               className={`ml-1 transition-all duration-300 ease-out ${
                 openMenus.includes(item.label) ? 'rotate-180 text-brand-orange' : 'text-gray-500'
               }`}
             />
           </button>
           {hasChildren && (
             <div
               className={`${
                 isMobile
                   ? openMenus.includes(item.label) ? 'block' : 'hidden'
                   : 'absolute left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block'
               }`}
             >
               <div
                 className={`${
                   isMobile
                     ? 'bg-gradient-to-b from-gray-50/80 to-white rounded-2xl mx-2 mb-2 shadow-sm border border-gray-100'
                     : 'min-w-[220px] bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 py-2 z-50 transform origin-top transition-all duration-200'
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
                     className={`block px-6 py-3 text-sm font-medium transition-all duration-200 ${
                       isMobile
                         ? 'text-gray-700 hover:bg-white hover:rounded-xl hover:shadow-sm hover:text-brand-orange'
                         : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-50/60 hover:to-white hover:text-brand-orange hover:translate-x-1'
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
         className={`relative flex items-center group px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-out ${
           isMobile
             ? 'text-gray-800 hover:text-brand-orange hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-transparent rounded-xl'
             : 'text-gray-700 hover:text-brand-orange'
         }`}
       >
         <span className="relative z-10">{item.label}</span>
         {!isMobile && (
           <>
             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-orange via-orange-400 to-brand-orange transition-all duration-300 group-hover:w-[80%]" />
             <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-orange/30 blur-[2px] transition-all duration-300 group-hover:w-[90%]" />
           </>
         )}
       </Link>
     )
   }

  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-2xl z-[100] border-b border-gray-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
       {/* Top Bar with Logo and Title */}
       <div className="border-b border-gray-100/80 bg-gradient-to-r from-white via-white to-gray-50/50">
        <div className="max-w-full mx-auto px-3 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0 min-w-0">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-2 flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="IDEA"
                  className="w-[80px] h-[28px] object-contain lg:w-[200px] lg:h-[68px] transition-all duration-300 group-hover:opacity-90 flex-shrink-0"
                />
              </Link>
              <div className="block flex-shrink-0 hidden sm:block">
                <div className="relative">
                  <h1 className="text-[10px] lg:text-2xl font-bold text-gray-900 tracking-[0.15em] uppercase leading-tight whitespace-nowrap">
                    {t('nav.institute')}
                  </h1>
                  <div className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-brand-orange via-orange-400 to-transparent opacity-70"></div>
                </div>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="flex items-center gap-2 lg:gap-5 flex-shrink-0">
              <LanguageSwitcher />
              <div className="flex items-center gap-1.5 px-2 py-1 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 shadow-sm">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]"></span>
                <span className="text-[8px] lg:text-xs text-gray-600 font-semibold tracking-wide">{t('nav.activeResearch')}</span>
              </div>
            </div>
           </div>
         </div>
       </div>

       {/* Main Navigation Bar */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-gray-100/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)]">
        <div className="max-w-full mx-auto px-3 lg:px-8">
          <div className="flex items-center justify-end h-14 lg:h-16">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0 text-xs font-bold">
              {navItems.map(item => renderNavItem(item))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-xl lg:rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 transition-all duration-300 border border-gray-200/60 shadow-sm hover:shadow-md active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} className="text-gray-700 transition-transform duration-300" /> : <Menu size={20} className="text-gray-700 transition-transform duration-300" />}
            </button>
          </div>
        </div>
       </div>

       {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-white/98 to-white/95 backdrop-blur-2xl border-t border-gray-100/60 shadow-2xl animate-slideDown">
          <div className="py-3 px-3 space-y-1 max-h-[65vh] overflow-y-auto">
            {navItems.map(item => renderNavItem(item, true))}
          </div>
        </div>
      )}
    </nav>
  )
}