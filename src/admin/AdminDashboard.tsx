import { Link } from 'react-router-dom'
import { FileText, Image, BookOpen } from 'lucide-react'

export const AdminDashboard = () => {
  const stats = [
    { label: 'Publications', path: '/admin/publications', icon: FileText, description: 'Upload PDFs by category' },
    { label: 'Newsletter', path: '/admin/newsletter', icon: Image, description: 'Upload newsletter images' },
    { label: 'Blog', path: '/admin/blog', icon: BookOpen, description: 'Write and manage blog posts' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a2744] mb-1">Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome to the IDEA Institute admin panel. Manage site content below.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-brand-orange/30 transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
              <item.icon size={24} className="text-brand-orange group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a2744] mb-1">{item.label}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}