/**
 * 🔹 CommunityHub: CreatePost Form Component
 */
import { useState } from 'react'
import Input from '../shared/Input'
import Button from '../shared/Button'

function CreatePost({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: 'Kimiti4' // Default to current user
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.excerpt.trim()) {
      alert('Please fill in all required fields')
      return
    }
    
    onSubmit?.({
      title: formData.title.trim(),
      excerpt: formData.excerpt.trim(),
      author: formData.author.trim() || 'Anonymous',
      likes: 0
    })
  }
  
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.title}>✨ Create New Post</h3>
      
      <div style={styles.field}>
        <label style={styles.label}>Title *</label>
        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="What's on your mind?"
          required
        />
      </div>
      
      <div style={styles.field}>
        <label style={styles.label}>Content *</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          placeholder="Share your thoughts..."
          style={styles.textarea}
          rows="4"
          required
        />
      </div>
      
      <div style={styles.field}>
        <label style={styles.label}>Author</label>
        <Input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>
      
      <div style={styles.actions}>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Publish Post
        </Button>
      </div>
    </form>
  )
}

const styles = {
  form: {
    padding: '1.5rem',
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  title: {
    margin: '0 0 1rem 0',
    color: '#1e293b'
  },
  field: {
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  label: {
    fontWeight: '500',
    color: '#1e293b',
    fontSize: '0.875rem'
  },
  textarea: {
    padding: '0.5rem',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: '100px'
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'flex-end',
    marginTop: '1rem'
  }
}

export default CreatePost