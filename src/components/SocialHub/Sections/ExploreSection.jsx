import Card from '../shared/Card'

function ExploreSection() {
  const discoveryGroups = [
    {
      title: 'Trending topics',
      variant: 'primary',
      items: ['React component design', 'Portfolio feedback', 'API integration workflows', 'Career growth for juniors']
    },
    {
      title: 'Learning paths',
      variant: 'success',
      items: ['Frontend basics in 7 days', 'Build your first full-stack project', 'Testing React apps', 'Design systems starter guide']
    },
    {
      title: 'Community events',
      variant: 'warning',
      items: ['Live code review on Friday', 'UI critique session', 'Open-source onboarding hour', 'Weekly accountability check-in']
    }
  ]

  const quickLinks = ['#react', '#javascript', '#career', '#opensource', '#design', '#learning']

  return (
    <section id="explore" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.kicker}>Explore</span>
        <h2 style={styles.title}>Find topics, events, and learning tracks worth following</h2>
        <p style={styles.description}>
          The explore area helps members discover what is active right now across the wider community.
        </p>
      </div>

      <div style={styles.grid}>
        {discoveryGroups.map((group) => (
          <Card key={group.title} title={group.title} variant={group.variant}>
            <ul style={styles.list}>
              {group.items.map((item) => (
                <li key={item} style={styles.listItem}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card title="Popular tags" variant="default">
        <div style={styles.tags}>
          {quickLinks.map((tag) => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>
      </Card>
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
    backgroundColor: '#0f172a',
    borderRadius: '18px',
    textAlign: 'left',
    color: 'white'
  },
  kicker: {
    display: 'inline-flex',
    marginBottom: '0.75rem',
    color: '#7dd3fc',
    fontWeight: '700',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em'
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.9rem',
    color: 'white'
  },
  description: {
    margin: 0,
    color: '#cbd5e1',
    lineHeight: '1.7'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem'
  },
  list: {
    margin: 0,
    paddingLeft: '1rem',
    color: '#475569',
    display: 'grid',
    gap: '0.6rem'
  },
  listItem: {
    lineHeight: '1.5'
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem'
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.45rem 0.8rem',
    borderRadius: '999px',
    backgroundColor: '#e0f2fe',
    color: '#0369a1',
    fontWeight: '600',
    fontSize: '0.9rem'
  }
}

export default ExploreSection
