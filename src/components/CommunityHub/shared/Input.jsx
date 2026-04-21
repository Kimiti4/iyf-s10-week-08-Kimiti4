/**
 * 🔹 CommunityHub: Reusable Input Component
 */
function Input({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error,
  style: customStyle = {}
}) {
  return (
    <div style={styles.container}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        style={{
          ...styles.input,
          ...(error ? styles.error : {}),
          ...(disabled ? styles.disabled : {}),
          ...customStyle
        }}
      />
      {error && <span style={styles.errorText}>{error}</span>}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none'
  },
  error: {
    borderColor: '#ef4444',
    backgroundColor: '#fef2f2'
  },
  disabled: {
    backgroundColor: '#f8fafc',
    cursor: 'not-allowed'
  },
  errorText: {
    fontSize: '0.75rem',
    color: '#ef4444'
  }
}

export default Input