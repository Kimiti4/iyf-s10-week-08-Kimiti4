import Card from '../shared/Card'
import PostList from '../Post/PostList'

function PostsSection() {
  const highlights = [
    {
      title: 'Community feed',
      description: 'Read fresh updates, save useful ideas, and jump into conversations without leaving the main page.',
      variant: 'primary'
    },
    {
      title: 'Share your work',
      description: 'Use the post composer to publish progress updates, tutorials, launch notes, or questions for the community.',
      variant: 'success'
    }
  ]

  return (
    <section id="posts" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.kicker}>Posts</span>
        <h2 style={styles.title}>Latest discussions from the SocialHub feed</h2>
        <p style={styles.description}>
          Search by keyword, create a new post, and react to ideas that help you learn faster.
        </p>
      </div>

      <div style={styles.highlights}>
        {highlights.map((item) => (
          <Card key={item.title} title={item.title} variant={item.variant}>
            <p style={styles.cardText}>{item.description}</p>
          </Card>
        ))}
      </div>

      <PostList />
    </section>
  )
}

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    scrollMarginTop: '6rem'
  },
  header: {
    padding: '1.5rem',
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '18px',
    textAlign: 'left'
  },
  kicker: {
    display: 'inline-flex',
    marginBottom: '0.75rem',
    color: '#2563eb',
    fontWeight: '700',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em'
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.9rem',
    color: '#0f172a'
  },
  description: {
    margin: 0,
    color: '#64748b',
    lineHeight: '1.7'
  },
  highlights: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem'
  },
  cardText: {
    margin: 0,
    color: '#475569',
    lineHeight: '1.6'
  }
}

export default PostsSection
