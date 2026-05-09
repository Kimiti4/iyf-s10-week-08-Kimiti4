/**
 * 🔹 Daily Challenge Day 3: List with Keys
 * - Receives array of users as prop
 * - Renders a UserCard for each
 * - Uses proper key prop
 * - Shows message if array is empty
 */

function UserCard({ user }) {
  return (
    <div style={styles.userCard}>
      <div style={styles.avatar}>
        {user.name?.charAt(0).toUpperCase() || 'U'}
      </div>
      <div style={styles.userInfo}>
        <h4 style={styles.userName}>{user.name}</h4>
        <p style={styles.userEmail}>{user.email}</p>
        {user.role && <span style={styles.role}>{user.role}</span>}
      </div>
    </div>
  )
}

function UserList({ users = [] }) {
  // Show message if array is empty
  if (!users || users.length === 0) {
    return (
      <div style={styles.container}>
        <p style={styles.emptyMessage}>👥 No users to display</p>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>User Directory ({users.length} users)</h3>
      <div style={styles.list}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  title: {
    margin: '0 0 1.5rem 0',
    color: '#1f2937',
    fontSize: '1.5rem'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  userCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#8b5cf6',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    flexShrink: 0
  },
  userInfo: {
    flex: 1
  },
  userName: {
    margin: '0 0 0.25rem 0',
    color: '#1f2937',
    fontSize: '1.1rem'
  },
  userEmail: {
    margin: '0 0 0.25rem 0',
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  role: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '1.1rem',
    padding: '3rem',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    border: '2px dashed #d1d5db'
  }
}

// Example usage component
function UserListExamples() {
  const sampleUsers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Developer' }
  ]

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Daily Challenge - Day 3: List with Keys</h1>
      
      <h2>With Users:</h2>
      <UserList users={sampleUsers} />
      
      <h2 style={{ marginTop: '2rem' }}>Empty List:</h2>
      <UserList users={[]} />
    </div>
  )
}

export default UserListExamples
