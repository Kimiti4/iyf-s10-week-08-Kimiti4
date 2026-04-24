import Card from '../shared/Card'

function AboutSection() {
  const values = [
    {
      title: 'Learn in public',
      description: 'Members share rough drafts, small wins, and useful lessons so others can grow with them.'
    },
    {
      title: 'Help generously',
      description: 'Questions are welcome, feedback stays kind, and practical advice matters more than showing off.'
    },
    {
      title: 'Build momentum',
      description: 'The platform encourages steady progress through routines, events, and collaborative support.'
    }
  ]

  const stats = [
    { value: '3', label: 'Core community values' },
    { value: '12', label: 'Weekly themed sessions' },
    { value: '100%', label: 'Focused on friendly peer support' }
  ]

  return (
    <section id="about" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.kicker}>About</span>
        <h2 style={styles.title}>What SocialHub is building for its community</h2>
        <p style={styles.description}>
          SocialHub is a collaborative space for people who want to learn, share ideas, and stay consistent while building projects.
        </p>
      </div>

      <div style={styles.statsGrid}>
        {stats.map((item) => (
          <div key={item.label} style={styles.statCard}>
            <p style={styles.statValue}>{item.value}</p>
            <p style={styles.statLabel}>{item.label}</p>
          </div>
        ))}
      </div>

      <div style={styles.grid}>
        <Card title="Our mission" variant="primary">
          <p style={styles.text}>
            We want online communities to feel practical and welcoming. SocialHub gives learners and creators one place to publish ideas, discover useful conversations, and connect with people working through similar goals.
          </p>
        </Card>

        <Card title="How the community works" variant="success">
          <div style={styles.values}>
            {values.map((value) => (
              <div key={value.title} style={styles.valueItem}>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.text}>{value.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
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
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '18px',
    textAlign: 'left'
  },
  kicker: {
    display: 'inline-flex',
    marginBottom: '0.75rem',
    color: '#0f766e',
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1rem'
  },
  statCard: {
    padding: '1.2rem',
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    textAlign: 'left'
  },
  statValue: {
    margin: '0 0 0.35rem 0',
    fontSize: '1.7rem',
    fontWeight: '700',
    color: '#0f172a'
  },
  statLabel: {
    margin: 0,
    color: '#64748b',
    lineHeight: '1.5'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem'
  },
  values: {
    display: 'grid',
    gap: '1rem'
  },
  valueItem: {
    display: 'grid',
    gap: '0.35rem'
  },
  valueTitle: {
    margin: 0,
    fontSize: '1.05rem',
    color: '#0f172a'
  },
  text: {
    margin: 0,
    color: '#475569',
    lineHeight: '1.7'
  }
}

export default AboutSection
