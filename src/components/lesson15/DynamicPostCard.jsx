/**
 * 🔹 Task 15.3: PostCard with Props (replaces static version)
 */
function PostCard({ title, excerpt, author, date, likes = 0 }) {
  return (
    <article className="post-card" style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.excerpt}>{excerpt}</p>
      <div style={styles.meta}>
        <span>By {author}</span>
        <span>•</span>
        <span>{date}</span>
        {likes > 0 && (
          <>
            <span>•</span>
            <span>❤️ {likes}</span>
          </>
        )}
      </div>
    </article>
  )
}

const styles = {
  card: {
    padding: '1.5rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '1rem'
  },
  title: {
    margin: '0 0 0.5rem 0',
    color: '#1e293b',
    fontSize: '1.25rem'
  },
  excerpt: {
    margin: '0 0 1rem 0',
    color: '#64748b',
    lineHeight: '1.5'
  },
  meta: {
    fontSize: '0.875rem',
    color: '#94a3b8',
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  }
}

export default PostCard