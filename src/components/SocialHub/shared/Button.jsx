/**
 * 🔹 SocialHub: Reusable Button Component
 */
function Button({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  style: customStyle = {}
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size}`}
      style={{
        ...styles.base,
        ...styles[variant],
        ...styles[size],
        ...(disabled || loading ? styles.disabled : {}),
        ...customStyle
      }}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span style={styles.spinner}>⏳</span>
      ) : (
        children
      )}
    </button>
  )
}

const styles = {
  base: {
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'inherit'
  },
  primary: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  secondary: {
    backgroundColor: '#64748b',
    color: 'white'
  },
  danger: {
    backgroundColor: '#ef4444',
    color: 'white'
  },
  outlined: {
    backgroundColor: 'transparent',
    color: '#3b82f6',
    border: '2px solid #3b82f6'
  },
  ghost: {
    backgroundColor: 'transparent',
    color: '#475569'
  },
  small: {
    padding: '0.375rem 0.75rem',
    fontSize: '0.875rem'
  },
  medium: {
    padding: '0.5rem 1rem',
    fontSize: '1rem'
  },
  large: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.125rem'
  },
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed'
  },
  spinner: {
    animation: 'spin 1s linear infinite'
  }
}

// Add keyframes for spinner animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `
  document.head.appendChild(style)
}

export default Button
