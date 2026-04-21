/**
 * 🔹 Task 15.2: Button Component (with props prep)
 */
function Button({ 
  children, 
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      style={{
        ...styles.base,
        ...styles[variant],
        ...styles[size],
        ...(disabled ? styles.disabled : {})
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
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
    gap: '0.5rem'
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
  }
}

export default Button