import { useState, useRef, FormEvent } from 'react'
import { Upload, Trash2, Plus } from 'lucide-react'
import {
  getAdminPublications,
  addAdminPublication,
  deleteAdminPublication,
  AdminPublication,
  type PublicationCategory,
} from '../utils/adminStorage'

const CATEGORIES: PublicationCategory[] = [
  'Comparative Legal Analysis',
  'Migration, Asylum & Transnational Law',
  'Law & Lived Experience',
  'Violence, Protection & Legal Gaps',
  'Policy & Commentary',
  'German Publications',
]

export const PublicationsManager = () => {
  const [publications, setPublications] = useState<AdminPublication[]>(getAdminPublications)
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<PublicationCategory>(CATEGORIES[0])
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const refreshList = () => setPublications(getAdminPublications())

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault()
    const file = fileRef.current?.files?.[0]
    if (!file || !title.trim()) return

    setUploading(true)
    const reader = new FileReader()
    reader.onloadend = () => {
      addAdminPublication({
        title: title.trim(),
        category,
        dataUrl: reader.result as string,
        fileName: file.name,
      })
      setTitle('')
      if (fileRef.current) fileRef.current.value = ''
      setShowForm(false)
      refreshList()
      setUploading(false)
    }
    reader.readAsDataURL(file)
  }

  const handleDelete = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this publication?')) return
    deleteAdminPublication(id)
    refreshList()
  }

  const grouped = CATEGORIES.reduce<Record<string, AdminPublication[]>>((acc, cat) => {
    acc[cat] = publications.filter((p: AdminPublication) => p.category === cat)
    return acc
  }, {})

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1a2744]">Publications Manager</h1>
          <p className="text-gray-500 mt-1">Upload and manage publications by category</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-orange text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-200 shadow-sm"
        >
          <Plus size={18} />
          Add Publication
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Publication Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                placeholder="Enter publication title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as PublicationCategory)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none bg-white"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PDF File</label>
              <input
                ref={fileRef}
                type="file"
                accept=".pdf"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-brand-orange file:text-white hover:file:bg-orange-600 file:cursor-pointer"
                required
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={uploading}
                className="flex items-center gap-2 px-6 py-2.5 bg-brand-orange text-white rounded-xl font-medium hover:bg-orange-600 disabled:opacity-50 transition-all duration-200"
              >
                <Upload size={18} />
                {uploading ? 'Uploading...' : 'Upload PDF'}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {CATEGORIES.map(cat => (
        <div key={cat} className="mb-8">
          <h3 className="text-lg font-bold text-[#1a2744] mb-3 flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-orange rounded-full"></span>
            {cat}
            <span className="text-sm font-normal text-gray-400">({grouped[cat]?.length || 0})</span>
          </h3>

          {grouped[cat]?.length > 0 ? (
            <div className="space-y-2">
              {grouped[cat].map(pub => (
                <div
                  key={pub.id}
                  className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-200 hover:border-gray-300 transition-all"
                >
                  <div className="flex-1 min-w-0 mr-4">
                    <p className="text-sm font-medium text-gray-800 truncate">{pub.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {pub.fileName} · Added {new Date(pub.addedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={pub.dataUrl}
                      download={pub.fileName}
                      className="p-2 text-gray-400 hover:text-brand-orange transition-colors"
                      title="Download"
                    >
                      <Upload size={16} />
                    </a>
                    <button
                      onClick={() => handleDelete(pub.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic bg-white rounded-xl px-4 py-3 border border-gray-100">
              No publications in this category yet.
            </p>
          )}
        </div>
      ))}
    </div>
  )
}