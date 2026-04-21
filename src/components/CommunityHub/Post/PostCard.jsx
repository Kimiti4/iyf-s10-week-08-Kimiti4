/**
 * 🔹 CommunityHub: PostCard with interactive features
 */
import { useState } from 'react'
import Button from '../shared/Button'

function PostCard({ post, onLike, onDelete, onEdit }) {
  const [liked, setLiked] = useState(false)
  
  const handleLike = () => {
    setLiked(!liked)
    onLike?.(post.id)
  }
  
  return (
    <article style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>{post.title}</h3>
        <div style={styles.meta}>
          <span style={styles.author}>By {post.author}</span>
          <span style={styles.dot}>•</span>
          <span style={styles.date}>{post.date}</span>
        </div>
      </div>
      
      <p style={styles.excerpt}>{post.excerpt}</p>
      
      <div style={styles.footer}>
        <Button 
          variant={liked ? 'primary' : 'outlined'}
          size="small"
          onClick={handleLike}
        >
          {liked ? '❤️' : '🤍'} {post.likes + (liked ? 1 : 0)}
        </Button>
        
        <div style={styles.actions}>
          {onEdit && (
            <button style={styles.actionBtn} onClick={() => onEdit?.(post.id)}>
              ✏️
            </button>
          )}
          {onDelete && (
            <button 
              style={{...styles.actionBtn, ...styles.deleteBtn}} 
              onClick={() => onDelete?.(post.id)}
            >
              🗑️
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

const styles = {
  card: {
    padding: '1.5rem',
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '1rem',
    transition: 'box-shadow 0.2s'
  },
  header: {
    marginBottom: '0.75rem'
  },
  title: {
    margin: '0 0 0.25rem 0',
    color: '#1e293b',
    fontSize: '1.25rem'
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#64748b'
  },
  dot: {
    color: '#cbd5e1'
  },
  excerpt: {
    margin: '0 0 1rem 0',
    color: '#475569',
    lineHeight: '1.6'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '0.75rem',
    borderTop: '1px solid #f1f5f9'
  },
  actions: {
    display: 'flex',
    gap: '0.5rem'
  },
  actionBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '0.25rem',
    opacity: 0.7,
    transition: 'opacity 0.2s'
  },
  deleteBtn: {
    color: '#ef4444'
  }
}

export default PostCard