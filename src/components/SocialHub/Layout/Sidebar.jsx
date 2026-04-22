/**
 * 🔹 SocialHub: Sidebar Component
 */
import Card from '../shared/Card'

function Sidebar({ popularPosts = [], tags = [] }) {
  const defaultPopular = [
    { id: 1, title: "Getting Started with React", likes: 42 },
    { id: 2, title: "JavaScript Best Practices", likes: 38 },
    { id: 3, title: "Building Your First App", likes: 31 }
  ]
  
  const defaultTags = ['react', 'javascript', 'webdev', 'tutorial', 'beginner', 'frontend']
  
  const posts = popularPosts.length ? popularPosts : defaultPopular
  const tagList = tags.length ? tags : defaultTags
  
  return (
    <aside style={styles.sidebar}>
      <Card title="📚 About" variant="primary">
        <p style={styles.text}>
          SocialHub connects developers to share knowledge, 
          ask questions, and grow together.
        </p>
      </Card>
      
      <Card title="🔥 Popular Posts">
        <ul style={styles.list}>
          {posts.map(post => (
            <li key={post.id} style={styles.listItem}>
              <span style={styles.postTitle}>{post.title}</span>
              <span style={styles.likes}>❤️ {post.likes}</span>
            </li>
          ))}
        </ul>
      </Card>
      
      <Card title="🏷️ Tags">
        <div style={styles.tags}>
          {tagList.map(tag => (
            <span key={tag} style={styles.tag}>#{tag}</span>
          ))}
        </div>
      </Card>
    </aside>
  )
}

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '280px',
    flexShrink: 0
  },
  text: {
    margin: 0,
    fontSize: '0.875rem',
    color: '#475569',
    lineHeight: '1.5'
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f1f5f9',
    fontSize: '0.875rem'
  },
  postTitle: {
    color: '#1e293b',
    fontWeight: '500'
  },
  likes: {
    color: '#64748b',
    fontSize: '0.75rem'
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  tag: {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    fontSize: '0.75rem',
    color: '#475569',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }
}

export default Sidebar
