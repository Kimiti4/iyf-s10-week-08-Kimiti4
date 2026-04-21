/**
 * 🔹 CommunityHub: Reusable Card Component
 */
function Card({ children, title, variant = 'default', style: customStyle = {} }) {
  return (
    <div 
      className={`card card-${variant}`}
      style={{
        ...styles.base,
        ...styles[variant],
        ...customStyle
      }}
    >
      {title && <h4 style={styles.title}>{title}</h4>}
      <div style={styles.body}>
        {children}
      </div>
    </div>
  )
}

const styles = {
  base: {
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
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
  danger: {
    borderLeft: '4px solid #ef4444'
  },
  title: {
    margin: 0,
    padding: '1rem 1.25rem',
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1e293b'
  },
  body: {
    padding: '1.25rem'
  }
}

export default Card