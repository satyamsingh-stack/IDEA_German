import { useState, FormEvent } from 'react'
import { Plus, Trash2, Edit3, X, Save } from 'lucide-react'
import {
  getAdminBlogPosts,
  addAdminBlogPost,
  updateAdminBlogPost,
  deleteAdminBlogPost,
  AdminBlogPost,
} from '../utils/adminStorage'

export const BlogManager = () => {
  const [posts, setPosts] = useState<AdminBlogPost[]>(getAdminBlogPosts)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const refreshList = () => setPosts(getAdminBlogPosts())

  const resetForm = () => {
    setTitle('')
    setExcerpt('')
    setContent('')
    setAuthor('')
    setEditingId(null)
    setShowForm(false)
  }

  const startEdit = (post: AdminBlogPost) => {
    setTitle(post.title)
    setExcerpt(post.excerpt)
    setContent(post.content)
    setAuthor(post.author)
    setEditingId(post.id)
    setShowForm(true)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    if (editingId) {
      updateAdminBlogPost(editingId, {
        title: title.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        author: author.trim(),
      })
    } else {
      addAdminBlogPost({
        title: title.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        author: author.trim(),
      })
    }
    resetForm()
    refreshList()
  }

  const handleDelete = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return
    deleteAdminBlogPost(id)
    refreshList()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1a2744]">Blog Manager</h1>
          <p className="text-gray-500 mt-1">Write and manage blog posts and articles</p>
        </div>
        <button
          onClick={() => {
            resetForm()
            setShowForm(true)
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-orange text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-200 shadow-sm"
        >
          <Plus size={18} />
          New Post
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a2744]">
              {editingId ? 'Edit Post' : 'New Blog Post'}
            </h3>
            <button
              onClick={resetForm}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={18} className="text-gray-400" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                placeholder="Post title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input
                type="text"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                placeholder="Author name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt / Summary</label>
              <textarea
                value={excerpt}
                onChange={e => setExcerpt(e.target.value)}
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none resize-none"
                placeholder="Brief summary of the post"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                rows={8}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none resize-y"
                placeholder="Write your blog post content here... (supports plain text)"
                required
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 bg-brand-orange text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-200"
              >
                <Save size={18} />
                {editingId ? 'Update Post' : 'Publish Post'}
              </button>
              <button
                type="button"
                onClick={resetForm}
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
            All Posts
            <span className="text-sm font-normal text-gray-400">({posts.length})</span>
          </h3>
        </div>

        {posts.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {posts.map(post => (
              <div
                key={post.id}
                className="px-6 py-4 hover:bg-gray-50 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-800">{post.title}</h4>
                    {post.excerpt && (
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{post.excerpt}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">
                      {post.author && <span>By {post.author} · </span>}
                      {new Date(post.createdAt).toLocaleDateString()}
                      {post.updatedAt !== post.createdAt && ' (edited)'}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => startEdit(post)}
                      className="p-2 text-gray-400 hover:text-brand-orange transition-colors"
                      title="Edit"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-8 text-center text-sm text-gray-400 italic">
            No blog posts yet. Click "New Post" to write one.
          </div>
        )}
      </div>
    </div>
  )
}