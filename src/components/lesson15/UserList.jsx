/**
 * 🔹 Day 3 Challenge: List with Keys
 * Receives array of users as prop and renders UserCard for each
 */

function UserList({ users = [] }) {
  if (!users || users.length === 0) {
    return (
      <div style={styles.container}>
        <p style={styles.empty}>No users to display</p>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Users ({users.length})</h3>
      <div style={styles.list}>
        {users.map(user => (
          <div key={user.id} style={styles.card}>
            <div style={styles.avatar}>
              {user.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div style={styles.info}>
              <h4 style={styles.name}>{user.name}</h4>
              <p style={styles.email}>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  title: {
    margin: '0 0 1rem 0',
    color: '#1e293b'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem',
    backgroundColor: '#f8fafc',
    borderRadius: '6px',
    border: '1px solid #e2e8f0'
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flexShrink: 0
  },
  info: {
    flex: 1
  },
  name: {
    margin: '0 0 0.25rem 0',
    color: '#1e293b',
    fontSize: '1rem'
  },
  email: {
    margin: 0,
    color: '#64748b',
    fontSize: '0.875rem'
  },
  empty: {
    textAlign: 'center',
    color: '#94a3b8',
    fontStyle: 'italic'
  }
}

export default UserList
