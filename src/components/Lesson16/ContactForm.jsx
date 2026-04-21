/**
 * 🔹 Task 16.2: Controlled Form with Object State
 */
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', formData)
    setSubmitted(true)
    
    // Reset after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }
  
  if (submitted) {
    return (
      <div style={styles.success}>
        ✅ Message sent successfully!
      </div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.field}>
        <label style={styles.label}>Name *</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          style={styles.input}
          required
        />
      </div>
      
      <div style={styles.field}>
        <label style={styles.label}>Email *</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          style={styles.input}
          required
        />
      </div>
      
      <div style={styles.field}>
        <label style={styles.label}>Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          style={{...styles.input, ...styles.textarea}}
          rows="4"
          required
        />
      </div>
      
      <button type="submit" style={styles.button}>
        Send Message
      </button>
    </form>
  )
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    maxWidth: '500px'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  label: {
    fontWeight: '500',
    color: '#1e293b',
    fontSize: '0.875rem'
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '1rem',
    fontFamily: 'inherit'
  },
  textarea: {
    resize: 'vertical',
    minHeight: '100px'
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    marginTop: '0.5rem'
  },
  success: {
    padding: '1.5rem',
    backgroundColor: '#dcfce7',
    color: '#166534',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: '500',
    maxWidth: '500px'
  }
}

export default ContactForm