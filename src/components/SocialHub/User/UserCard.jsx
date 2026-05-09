/**
 * 🔹 SocialHub: UserCard Component
 * Displays user information in a card format
 */
import Card from '../shared/Card'

function UserCard({ user, onFollow }) {
  if (!user) {
    return (
      <Card title="User">
        <p style={styles.empty}>No user data available</p>
      </Card>
    )
  }

  return (
    <Card variant="primary">
      <div style={styles.card}>
        <div style={styles.avatar}>
          {user.name?.charAt(0).toUpperCase() || 'U'}
        </div>
        <div style={styles.info}>
          <h4 style={styles.name}>{user.name}</h4>
          <p style={styles.bio}>{user.bio || 'No bio yet'}</p>
          <div style={styles.stats}>
            <span>{user.posts || 0} posts</span>
            <span>{user.followers || 0} followers</span>
          </div>
        </div>
        {onFollow && (
          <button 
            onClick={() => onFollow(user.id)}
            style={styles.followBtn}
          >
            {user.isFollowing ? 'Following' : 'Follow'}
          </button>
        )}
      </div>
    </Card>
  )
}

const styles = {
  card: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    flexShrink: 0
  },
  info: {
    flex: 1
  },
  name: {
    margin: '0 0 0.25rem 0',
    color: '#1e293b'
  },
  bio: {
    margin: '0 0 0.5rem 0',
    fontSize: '0.875rem',
    color: '#64748b'
  },
  stats: {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.75rem',
    color: '#94a3b8'
  },
  followBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '0.875rem',
    whiteSpace: 'nowrap'
  },
  empty: {
    color: '#94a3b8',
    fontStyle: 'italic'
  }
}

export default UserCard
