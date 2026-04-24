function HomeHero({ user }) {
  const quickStats = [
    { label: 'Active communities', value: '24' },
    { label: 'Weekly discussions', value: '128' },
    { label: 'Mentors online', value: '16' }
  ]

  return (
    <section id="home" style={styles.section}>
      <div style={styles.hero}>
        <div style={styles.copy}>
          <span style={styles.eyebrow}>Welcome to SocialHub</span>
          <h2 style={styles.title}>Discover ideas, share progress, and learn with other builders.</h2>
          <p style={styles.text}>
            {user
              ? `Welcome back, ${user.name}. Your community feed is ready with fresh posts, trending topics, and spaces to connect.`
              : 'SocialHub brings developers, creators, and curious learners together in one place to ask questions, publish updates, and explore what is trending.'}
          </p>

          <div style={styles.actions}>
            <a href="#posts" style={styles.primaryAction}>Browse Posts</a>
            <a href="#explore" style={styles.secondaryAction}>Explore Topics</a>
          </div>
        </div>

        <div style={styles.statsGrid}>
          {quickStats.map((item) => (
            <div key={item.label} style={styles.statCard}>
              <p style={styles.statValue}>{item.value}</p>
              <p style={styles.statLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    scrollMarginTop: '6rem'
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
    padding: '1.75rem',
    background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 55%, #ecfeff 100%)',
    border: '1px solid #dbeafe',
    borderRadius: '20px',
    boxShadow: '0 12px 30px rgba(59, 130, 246, 0.08)'
  },
  copy: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
    textAlign: 'left'
  },
  eyebrow: {
    display: 'inline-flex',
    alignSelf: 'flex-start',
    padding: '0.35rem 0.75rem',
    borderRadius: '999px',
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    fontSize: '0.85rem',
    fontWeight: '600'
  },
  title: {
    margin: 0,
    fontSize: '2rem',
    lineHeight: '1.15',
    color: '#0f172a'
  },
  text: {
    margin: 0,
    color: '#475569',
    lineHeight: '1.7',
    fontSize: '1rem'
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginTop: '0.25rem'
  },
  primaryAction: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.8rem 1.1rem',
    borderRadius: '10px',
    backgroundColor: '#2563eb',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600'
  },
  secondaryAction: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.8rem 1.1rem',
    borderRadius: '10px',
    backgroundColor: 'white',
    border: '1px solid #bfdbfe',
    color: '#1d4ed8',
    textDecoration: 'none',
    fontWeight: '600'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '0.75rem',
    alignContent: 'start'
  },
  statCard: {
    padding: '1rem',
    backgroundColor: 'rgba(255,255,255,0.86)',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    textAlign: 'left'
  },
  statValue: {
    margin: '0 0 0.35rem 0',
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#0f172a'
  },
  statLabel: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#64748b'
  }
}

export default HomeHero
