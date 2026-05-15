import { useState, useRef, FormEvent } from 'react'
import { Upload, Trash2, Plus } from 'lucide-react'
import {
  getAdminNewsletters,
  addAdminNewsletter,
  deleteAdminNewsletter,
  AdminNewsletter,
} from '../utils/adminStorage'

export const NewsletterManager = () => {
  const [newsletters, setNewsletters] = useState<AdminNewsletter[]>(getAdminNewsletters)
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const refreshList = () => setNewsletters(getAdminNewsletters())

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault()
    const file = fileRef.current?.files?.[0]
    if (!file || !title.trim()) return

    setUploading(true)
    const reader = new FileReader()
    reader.onloadend = () => {
      addAdminNewsletter({
        title: title.trim(),
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
    if (!window.confirm('Are you sure you want to delete this newsletter entry?')) return
    deleteAdminNewsletter(id)
    refreshList()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1a2744]">Newsletter Manager</h1>
          <p className="text-gray-500 mt-1">Upload newsletter images. New entries appear below the Archive section.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-orange text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-200 shadow-sm"
        >
          <Plus size={18} />
          Add Newsletter
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issue Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                placeholder="e.g., IDEA Insights — Issue 2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Newsletter Image</label>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
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
                {uploading ? 'Uploading...' : 'Upload Image'}
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

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-bold text-[#1a2744] flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-orange rounded-full"></span>
            Newsletter Archive
            <span className="text-sm font-normal text-gray-400">({newsletters.length} admin entries)</span>
          </h3>
        </div>

        {newsletters.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {newsletters.map(nl => (
              <div
                key={nl.id}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={nl.dataUrl}
                      alt={nl.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{nl.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {nl.fileName} · Added {new Date(nl.addedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                  <a
                    href={nl.dataUrl}
                    download={nl.fileName}
                    className="p-2 text-gray-400 hover:text-brand-orange transition-colors"
                    title="Download"
                  >
                    <Upload size={16} />
                  </a>
                  <button
                    onClick={() => handleDelete(nl.id)}
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
          <div className="px-6 py-8 text-center text-sm text-gray-400 italic">
            No admin-added newsletter entries yet. Click "Add Newsletter" to upload.
          </div>
        )}
      </div>
    </div>
  )
}