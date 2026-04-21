/**
 * 🔹 Task 15.4: Card Component with children prop
 * Reusable wrapper for content
 */
function Card({ children, title, variant = 'default' }) {
  return (
    <div className={`card card-${variant}`} style={{
      ...styles.base,
      ...styles[variant]
    }}>
      {title && <h3 style={styles.title}>{title}</h3>}
      <div style={styles.body}>
        {children}
      </div>
    </div>
  )
}

const styles = {
  base: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden'
  },
  default: {},
  primary: {
    borderLeft: '4px solid #3b82f6'
  },
  success: {
    borderLeft: '4px solid #10b981'
  },
  warning: {
    borderLeft: '4px solid #f59e0b'
  },
  title: {
    margin: 0,
    padding: '1rem 1.5rem',
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '1.125rem',
    color: '#1e293b'
  },
  body: {
    padding: '1.5rem'
  }
}

export default Card