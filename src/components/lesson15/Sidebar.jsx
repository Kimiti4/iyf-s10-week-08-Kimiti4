/**
 * 🔹 Task 15.2: Sidebar Component
 */
function Sidebar() {
  return (
    <aside className="sidebar" style={styles.sidebar}>
      <section style={styles.section}>
        <h4>About</h4>
        <p style={styles.text}>CommunityHub connects people through shared interests.</p>
      </section>
      
      <section style={styles.section}>
        <h4>Popular Posts</h4>
        <ul style={styles.list}>
          <li>Getting Started with React</li>
          <li>JavaScript Tips & Tricks</li>
          <li>Building Your First App</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h4>Tags</h4>
        <div style={styles.tags}>
          {['react', 'javascript', 'webdev', 'tutorial'].map(tag => (
            <span key={tag} style={styles.tag}>#{tag}</span>
          ))}
        </div>
      </section>
    </aside>
  )
}

const styles = {
  sidebar: {
    padding: '1.5rem',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  section: {
    marginBottom: '1.5rem'
  },
  text: {
    fontSize: '0.875rem',
    color: '#64748b',
    margin: '0.5rem 0 0 0'
  },
  list: {
    margin: '0.5rem 0 0 0',
    paddingLeft: '1.25rem',
    color: '#475569',
    fontSize: '0.875rem'
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem'
  },
  tag: {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    fontSize: '0.75rem',
    color: '#475569'
  }
}

export default Sidebar