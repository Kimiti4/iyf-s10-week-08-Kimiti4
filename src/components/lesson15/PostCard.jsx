/**
 * 🔹 Task 15.2: PostCard Component (static version)
 */
function PostCard() {
  return (
    <article className="post-card" style={styles.card}>
      <h3 style={styles.title}>Post Title</h3>
      <p style={styles.excerpt}>Post excerpt goes here...</p>
      <span style={styles.meta}>Posted on January 1, 2026</span>
    </article>
  )
}

const styles = {
  card: {
    padding: '1.5rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  title: {
    margin: '0 0 0.5rem 0',
    color: '#1e293b'
  },
  excerpt: {
    margin: '0 0 1rem 0',
    color: '#64748b',
    lineHeight: '1.5'
  },
  meta: {
    fontSize: '0.875rem',
    color: '#94a3b8'
  }
}

export default PostCard

