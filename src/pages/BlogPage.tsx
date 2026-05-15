import { useState, useEffect } from 'react'
import { getAdminBlogPosts, AdminBlogPost } from '../utils/adminStorage'

export const BlogPage = () => {
  const [posts, setPosts] = useState<AdminBlogPost[]>([])
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    setPosts(getAdminBlogPosts())
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-brand-orange rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744]">
              Blog & Commentary
            </h1>
          </div>

          <p className="text-black text-lg leading-relaxed mb-4 break-words text-justify">
            This section features accessible commentary and analysis on current legal and social developments relating to:
          </p>
          <ul className="mb-6">
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>sexuality and gender identity</span>
            </li>
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>migration and asylum</span>
            </li>
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>comparative legal developments</span>
            </li>
            <li className="text-black leading-relaxed flex items-start gap-2 text-justify">
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
              <span>equality and non-discrimination law</span>
            </li>
          </ul>

          {posts.length > 0 ? (
            <div className="space-y-6 mt-8">
              {posts.map(post => (
                <article key={post.id} className="border border-gray-200 rounded-2xl p-6 hover:border-brand-orange/30 transition-all">
                  <h2 className="text-xl font-bold text-[#1a2744] mb-2">{post.title}</h2>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    {post.author && <span>By {post.author}</span>}
                    <span>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  {post.excerpt && (
                    <p className="text-gray-600 mb-3 leading-relaxed">{post.excerpt}</p>
                  )}
                  <div className="text-gray-700 leading-relaxed text-justify">
                    {expandedId === post.id ? (
                      <>
                        <div className="whitespace-pre-wrap">{post.content}</div>
                        <button
                          onClick={() => setExpandedId(null)}
                          className="mt-3 text-brand-orange hover:underline text-sm font-medium"
                        >
                          Show less
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="line-clamp-3">{post.content}</p>
                        <button
                          onClick={() => setExpandedId(post.id)}
                          className="mt-2 text-brand-orange hover:underline text-sm font-medium"
                        >
                          Read more
                        </button>
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-black text-lg leading-relaxed break-words text-justify mt-8">
              Blog articles and commentary – coming soon.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
