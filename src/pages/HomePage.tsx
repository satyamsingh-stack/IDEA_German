import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export const HomePage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <img src="/images/secondPage.webp" alt="IDEA Institute" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight mb-4 tracking-tight">
                {t('home.subtitle')}
              </h1>
              <p className="text-black text-lg leading-relaxed break-words text-justify">
                {t('home.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.whatWeDo')}
            </h2>
          </div>
 <p className="text-black text-lg leading-relaxed mb-4 max-w-3xl break-words text-justify">
               {t('home.whatWeDoDesc')}
             </p>
             <ul className="mb-6">
               {[1, 2, 3].map((i) => (
                 <li key={i} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                   <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                   <span>{t(`home.whatWeDo.${i}` as const)}</span>
                 </li>
               ))}
             </ul>
             <p className="text-black leading-relaxed text-lg break-words text-justify">
             {t('home.whatWeDoBottom')}
           </p>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.whyThisMatters')}
            </h2>
          </div>
 <p className="text-black text-lg leading-relaxed mb-4 max-w-3xl break-words text-justify">
               {t('home.whyDesc')}
             </p>
             <p className="text-black text-lg leading-relaxed mb-4 text-justify">
               {t('home.whyFor')}
             </p>
             <ul className="mb-6">
               {[1, 2, 3].map((i) => (
                 <li key={i} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                   <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                   <span>{t(`home.why${i}` as const)}</span>
                 </li>
               ))}
             </ul>
             <p className="text-black leading-relaxed text-lg break-words text-justify">
             {t('home.whyBottom')}
           </p>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.ourWork')}
            </h2>
          </div>
 <ul>
               {[1, 2, 3, 4].map((i) => (
                 <li key={i} className="text-black leading-relaxed flex items-start gap-2 text-justify">
                   <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                   <span>{t(`home.ourWork${i}` as const)}</span>
                 </li>
               ))}
             </ul>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.startHere')}
            </h2>
          </div>
           <ul>
             <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
               <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
               <span>Explore our <Link to="/forschung" className="text-brand-orange hover:underline font-medium">Research Areas</Link></span>
             </li>
             <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
               <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
               <span>Read our <Link to="/insights" className="text-brand-orange hover:underline font-medium">Insights & Blog</Link></span>
             </li>
             <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
               <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
               <span>Browse our <Link to="/publikationen" className="text-brand-orange hover:underline font-medium">Publications</Link></span>
             </li>
           </ul>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              {t('home.getInvolved')}
            </h2>
          </div>
           <ul>
             <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
               <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
<span>Follow us on <a href="https://www.linkedin.com/in/idea-institute-of-legal-research-5158062b7/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-medium">LinkedIn</a></span>
              </li>
              <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
                <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
               <span>Subscribe to our newsletter <Link to="/newsletter" className="text-brand-orange hover:underline font-medium">IDEA Insights</Link></span>
             </li>
             <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
               <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
<span><Link to="/contact" className="text-brand-orange hover:underline font-medium">Contact us for collaboration, research, or events</Link></span>
               </li>
            </ul>
        </div>
      </section>
    </div>
  )
}