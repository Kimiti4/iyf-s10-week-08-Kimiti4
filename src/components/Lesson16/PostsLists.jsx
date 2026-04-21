/**
 * 🔹 Task 16.4: Lifting State Up - Shared state between components
 */
import { useState } from 'react'

// 🔹 Parent: Holds shared state
function PostListWithLikes() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "Hello world!", likes: 0 },
    { id: 2, title: "Second Post", content: "Learning React!", likes: 0 },
    { id: 3, title: "Third Post", content: "State management tips", likes: 0 }
  ])
  
  // Callback to update state - passed down to children
  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.likes + 1 }  // Immutable update
        : post
    ))
  }
  
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }
  
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0)
  
  return (
    <div style={styles.container}>
      <Stats totalPosts={posts.length} totalLikes={totalLikes} />
      <PostList posts={posts} onLike={handleLike} onDelete={handleDelete} />
    </div>
  )
}

// 🔹 Stats: Receives data via props (pure display component)
function Stats({ totalPosts, totalLikes }) {
  return (
    <div style={styles.stats}>
      <span style={styles.stat}>📝 {totalPosts} posts</span>
      <span style={styles.stat}>❤️ {totalLikes} total likes</span>
    </div>
  )
}

// 🔹 PostList: Receives data + callbacks
function PostList({ posts, onLike, onDelete }) {
  if (posts.length === 0) {
    return <p style={styles.empty}>No posts yet</p>
  }
  
  return (
    <div style={styles.list}>
      {posts.map(post => (
        <PostCard 
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
          onDelete={() => onDelete(post.id)}
        />
      ))}
    </div>
  )
}

// 🔹 PostCard: Presentational component
function PostCard({ post, onLike, onDelete }) {
  return (
    <article style={styles.card}>
      <h3 style={styles.title}>{post.title}</h3>
      <p style={styles.content}>{post.content}</p>
      <div style={styles.actions}>
        <button onClick={onLike} style={styles.likeBtn}>
          ❤️ {post.likes}
        </button>
        <button onClick={onDelete} style={styles.deleteBtn}>
          🗑️ Delete
        </button>
      </div>
    </article>
  )
}

const styles = {
  container: {
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  stats: {
    display: 'flex',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f8fafc',
    borderRadius: '6px',
    marginBottom: '1rem',
    fontSize: '0.875rem',
    color: '#64748b'
  },
  stat: {
    fontWeight: '500'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  empty: {
    textAlign: 'center',
    color: '#94a3b8',
    padding: '2rem'
  },
  card: {
    padding: '1.25rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: '#f8fafc'
  },
  title: {
    margin: '0 0 0.5rem 0',
    color: '#1e293b'
  },
  content: {
    margin: '0 0 1rem 0',
    color: '#475569',
    lineHeight: '1.5'
  },
  actions: {
    display: 'flex',
    gap: '0.5rem'
  },
  likeBtn: {
    padding: '0.375rem 0.75rem',
    backgroundColor: '#fecaca',
    color: '#991b1b',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  deleteBtn: {
    padding: '0.375rem 0.75rem',
    backgroundColor: '#f1f5f9',
    color: '#64748b',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.875rem'
  }
}

export default PostListWithLikes