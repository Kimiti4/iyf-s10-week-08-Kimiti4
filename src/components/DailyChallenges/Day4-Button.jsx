/**
 * 🔹 Daily Challenge Day 4: Reusable Button
 * - text prop
 * - onClick prop
 * - variant prop (primary, secondary, danger)
 * - disabled prop
 * - size prop (small, medium, large)
 * - loading prop (shows spinner)
 */

function Button({ 
  text = 'Click me',
  onClick,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  loading = false
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: disabled ? '#9ca3af' : '#3b82f6',
          color: 'white',
          borderColor: '#3b82f6'
        }
      case 'secondary':
        return {
          backgroundColor: disabled ? '#e5e7eb' : 'white',
          color: disabled ? '#9ca3af' : '#374151',
          borderColor: '#d1d5db'
        }
      case 'danger':
        return {
          backgroundColor: disabled ? '#fca5a5' : '#ef4444',
          color: 'white',
          borderColor: '#ef4444'
        }
      default:
        return {
          backgroundColor: '#3b82f6',
          color: 'white',
          borderColor: '#3b82f6'
        }
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '0.375rem 0.75rem',
          fontSize: '0.875rem'
        }
      case 'large':
        return {
          padding: '0.75rem 1.5rem',
          fontSize: '1.125rem'
        }
      case 'medium':
      default:
        return {
          padding: '0.5rem 1rem',
          fontSize: '1rem'
        }
    }
  }

  const variantStyles = getVariantStyles()
  const sizeStyles = getSizeStyles()

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        ...styles.button,
        ...variantStyles,
        ...sizeStyles,
        opacity: (disabled || loading) ? 0.6 : 1,
        cursor: (disabled || loading) ? 'not-allowed' : 'pointer'
      }}
    >
      {loading ? (
        <span style={styles.loadingContainer}>
          <span style={styles.spinner}></span>
          <span>Loading...</span>
        </span>
      ) : (
        text
      )}
    </button>
  )
}

const styles = {
  button: {
    border: '2px solid',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid currentColor',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: 'spin 0.6s linear infinite'
  }
}

// Add keyframes for spinner animation
const styleSheet = document.createElement('style')
styleSheet.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`
document.head.appendChild(styleSheet)

// Example usage component
function ButtonExamples() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Daily Challenge - Day 4: Reusable Button</h1>
      
      <h2>Variants:</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button text="Primary" variant="primary" onClick={handleClick} />
        <Button text="Secondary" variant="secondary" onClick={handleClick} />
        <Button text="Danger" variant="danger" onClick={handleClick} />
      </div>

      <h2>Sizes:</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem', alignItems: 'center' }}>
        <Button text="Small" size="small" onClick={handleClick} />
        <Button text="Medium" size="medium" onClick={handleClick} />
        <Button text="Large" size="large" onClick={handleClick} />
      </div>

      <h2>States:</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button text="Enabled" onClick={handleClick} />
        <Button text="Disabled" disabled={true} />
        <Button text="Loading" loading={true} />
      </div>

      <h2>Combinations:</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button text="Small Primary" variant="primary" size="small" onClick={handleClick} />
        <Button text="Large Danger" variant="danger" size="large" onClick={handleClick} />
        <Button text="Disabled Secondary" variant="secondary" disabled={true} />
      </div>
    </div>
  )
}

export default ButtonExamples
