/**
 * 🔹 SocialHub: PostList with state management
 */
import { useState } from 'react'
import PostCard from './PostCard'
import CreatePost from './CreatePost'
import Input from '../shared/Input'

function PostList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the fundamentals of React including components, JSX, and props. Perfect for beginners!",
      author: "John Doe",
      date: "Jan 15, 2026",
      likes: 24
    },
    {
      id: 2,
      title: "JavaScript Best Practices",
      excerpt: "Write cleaner, more maintainable code with these proven patterns and techniques.",
      author: "Jane Smith",
      date: "Jan 10, 2026",
      likes: 18
    },
    {
      id: 3,
      title: "Building Your First App",
      excerpt: "Step-by-step guide to creating a complete React application from scratch.",
      author: "Alex Johnson",
      date: "Jan 5, 2026",
      likes: 31
    }
  ])
  
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)
  
  // Filter posts by search
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ))
  }
  
  const handleDelete = (id) => {
    if (window.confirm('Delete this post?')) {
      setPosts(posts.filter(post => post.id !== id))
    }
  }
  
  const handleCreatePost = (newPost) => {
    setPosts([
      {
        id: Date.now(),
        ...newPost,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      },
      ...posts
    ])
    setShowCreateForm(false)
  }
  
  return (
    <div style={styles.container}>
      {/* Search & Create */}
      <div style={styles.toolbar}>
        <Input
          type="search"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '300px' }}
        />
        <button 
          style={styles.createBtn}
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? 'Cancel' : '+ New Post'}
        </button>
      </div>
      
      {/* Create Post Form */}
      {showCreateForm && (
        <CreatePost 
          onSubmit={handleCreatePost}
          onCancel={() => setShowCreateForm(false)}
        />
      )}
      
      {/* Posts */}
      <div style={styles.list}>
        {filteredPosts.length === 0 ? (
          <p style={styles.empty}>
            {searchTerm ? 'No posts match your search' : 'No posts yet'}
          </p>
        ) : (
          filteredPosts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
      
      {/* Stats */}
      <div style={styles.stats}>
        Showing {filteredPosts.length} of {posts.length} posts
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  createBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '0.9rem'
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
  },
  empty: {
    textAlign: 'center',
    color: '#94a3b8',
    padding: '2rem',
    fontStyle: 'italic'
  },
  stats: {
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#64748b',
    padding: '0.5rem',
    borderTop: '1px solid #e2e8f0'
  }
}

export default PostList
