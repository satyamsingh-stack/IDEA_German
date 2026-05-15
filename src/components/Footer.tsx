
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#eeeeee] text-gray-800">
      {/* Footer Links */}
       <div className="py-6 border-b border-gray-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-6 text-sm">
             <Link to="/impressum" className="text-brand-orange hover:text-orange-600 transition">{t('footer.imprint')}</Link>
             <span className="text-brand-orange">|</span>
             <Link to="/privacy-policy" className="text-brand-orange hover:text-orange-600 transition">{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm">
            © 2026 Institute of Legal Research. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
