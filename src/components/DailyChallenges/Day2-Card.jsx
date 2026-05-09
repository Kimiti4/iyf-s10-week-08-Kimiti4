/**
 * 🔹 Daily Challenge Day 2: Card Component with Props
 * - title prop
 * - children prop
 * - variant prop (primary, secondary, outlined)
 * - Different styles based on variant
 */

function Card({ title, children, variant = 'primary' }) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#eff6ff',
          borderColor: '#3b82f6',
          titleColor: '#1e40af'
        }
      case 'secondary':
        return {
          backgroundColor: '#f3f4f6',
          borderColor: '#6b7280',
          titleColor: '#374151'
        }
      case 'outlined':
        return {
          backgroundColor: 'white',
          borderColor: '#d1d5db',
          titleColor: '#1f2937'
        }
      default:
        return {
          backgroundColor: '#eff6ff',
          borderColor: '#3b82f6',
          titleColor: '#1e40af'
        }
    }
  }

  const variantStyles = getVariantStyles()

  return (
    <div style={{
      ...styles.container,
      backgroundColor: variantStyles.backgroundColor,
      borderColor: variantStyles.borderColor
    }}>
      {title && (
        <h3 style={{
          ...styles.title,
          color: variantStyles.titleColor
        }}>
          {title}
        </h3>
      )}
      <div style={styles.content}>
        {children}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '1.5rem',
    borderRadius: '12px',
    border: '2px solid',
    marginBottom: '1rem',
    maxWidth: '500px',
    margin: '1rem auto'
  },
  title: {
    margin: '0 0 1rem 0',
    fontSize: '1.25rem',
    fontWeight: '600'
  },
  content: {
    color: '#4b5563'
  }
}

// Example usage component
function CardExamples() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Daily Challenge - Day 2: Card Component</h1>
      
      <Card title="Primary Card" variant="primary">
        <p>This is a primary card with blue styling.</p>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Learn More
        </button>
      </Card>

      <Card title="Secondary Card" variant="secondary">
        <p>This is a secondary card with gray styling.</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </Card>

      <Card title="Outlined Card" variant="outlined">
        <p>This is an outlined card with minimal styling.</p>
        <img src="https://via.placeholder.com/400x200" alt="Placeholder" style={{ width: '100%', borderRadius: '8px' }} />
      </Card>

      <Card>
        <p>This card has no title, just content using children prop.</p>
      </Card>
    </div>
  )
}

export default CardExamples
