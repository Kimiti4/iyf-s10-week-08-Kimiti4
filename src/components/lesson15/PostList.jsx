/**
 * 🔹 Task 15.3: Rendering Lists with map() and key
 */
import PostCard from './PostCard'

function PostList() {
  const posts = [
    { 
      id: 1, 
      title: "Getting Started with React", 
      excerpt: "Learn the fundamentals of React including components, JSX, and props...", 
      author: "John Doe", 
      date: "Jan 15, 2026",
      likes: 24
    },
    { 
      id: 2, 
      title: "JavaScript Best Practices", 
      excerpt: "Write cleaner, more maintainable code with these proven patterns...", 
      author: "Jane Smith", 
      date: "Jan 10, 2026",
      likes: 18
    },
    { 
      id: 3, 
      title: "Building Your First App", 
      excerpt: "Step-by-step guide to creating a complete React application...", 
      author: "Alex Johnson", 
      date: "Jan 5, 2026",
      likes: 31
    }
  ]
  
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard 
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
          likes={post.likes}
        />
      ))}
    </div>
  )
}

export default PostList