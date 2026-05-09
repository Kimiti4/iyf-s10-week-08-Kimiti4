/**
 * 🔹 SocialHub: UserProfile Component
 * Displays detailed user profile with posts
 */
import { useState } from 'react'
import UserCard from './UserCard'
import PostCard from '../Post/PostCard'

function UserProfile({ user, userPosts = [] }) {
  const [activeTab, setActiveTab] = useState('posts')

  if (!user) {
    return (
      <div style={styles.container}>
        <p style={styles.empty}>Loading user profile...</p>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <UserCard user={user} />
      
      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab('posts')}
          style={{
            ...styles.tab,
            ...(activeTab === 'posts' ? styles.activeTab : {})
          }}
        >
          Posts ({userPosts.length})
        </button>
        <button
          onClick={() => setActiveTab('about')}
          style={{
            ...styles.tab,
            ...(activeTab === 'about' ? styles.activeTab : {})
          }}
        >
          About
        </button>
      </div>

      <div style={styles.content}>
        {activeTab === 'posts' && (
          <div style={styles.postsList}>
            {userPosts.length === 0 ? (
              <p style={styles.empty}>No posts yet</p>
            ) : (
              userPosts.map(post => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={() => {}}
                  onDelete={() => {}}
                />
              ))
            )}
          </div>
        )}

        {activeTab === 'about' && (
          <div style={styles.about}>
            <h4>About {user.name}</h4>
            <p>{user.bio || 'No bio available'}</p>
            <div style={styles.details}>
              <p><strong>Joined:</strong> {user.joinedDate || 'Recently'}</p>
              <p><strong>Email:</strong> {user.email || 'Not provided'}</p>
              <p><strong>Location:</strong> {user.location || 'Not specified'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  tabs: {
    display: 'flex',
    gap: '0.5rem',
    borderBottom: '2px solid #e2e8f0'
  },
  tab: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    fontWeight: '500',
    color: '#64748b',
    transition: 'all 0.2s',
    marginBottom: '-2px'
  },
  activeTab: {
    color: '#3b82f6',
    borderBottomColor: '#3b82f6'
  },
  content: {
    minHeight: '200px'
  },
  postsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  about: {
    color: '#475569'
  },
  details: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  empty: {
    textAlign: 'center',
    color: '#94a3b8',
    padding: '2rem',
    fontStyle: 'italic'
  }
}

export default UserProfile
