
---

# 📄 Week 8 README.md

```markdown
# iyf-s10-week-08-Kimiti4
# Week 8: React Fundamentals

## Author
- **Name:** Amos Kimiti
- **GitHub:** [@Kimiti4](https://github.com/Kimiti4)
- **Date:** April 21, 2026

## Project Description
A React fundamentals repository built with Vite, covering JSX, components, props, state management with `useState`, event handling, and component composition. Features the CommunityHub frontend—a social platform UI with posts, user interactions, and dynamic content—plus daily challenge components demonstrating progressive React skills.

## Technologies Used
- React 18 (Functional Components + Hooks)
- Vite (Build tool & dev server)
- JavaScript (ES6+)
- JSX (JavaScript XML)
- CSS-in-JS (inline styles for portability)

## Features
### Lesson 15: React Foundations
- ✅ JSX syntax: expressions, conditionals, comments
- ✅ Functional components (Header, Footer, PostCard, Sidebar, Button)
- ✅ Props: passing data, defaults, destructuring
- ✅ Rendering lists with `.map()` and unique `key` props
- ✅ Component composition with `children` prop
- ✅ Conditional rendering patterns (`&&`, ternary, early return)

### Lesson 16: State & Events
- ✅ `useState` hook for local component state
- ✅ Event handlers: `onClick`, `onChange`, `onSubmit`
- ✅ Controlled forms with object state
- ✅ Immutable updates for arrays/objects in state
- ✅ Lifting state up to share between components

### Mini-Project: CommunityHub Frontend
#### 🏘️ Layout Components
- **Header**: Logo, navigation, user login/logout toggle
- **Footer**: Links, copyright, responsive design
- **Sidebar**: About section, popular posts, tag cloud

#### 📝 Post Management
- **PostList**: Dynamic rendering from state array
- **PostCard**: Title, excerpt, author, date, like/delete actions
- **CreatePost**: Form to add new posts with validation
- **Search/Filter**: Real-time post filtering by keyword

#### ⚙️ Interactive Features
- ❤️ Like/unlike posts with immediate UI feedback
- 🗑️ Delete posts with confirmation
- 🔍 Search posts by title, content, or author
- ➕ Create new posts that persist in component state
- 📊 Live stats: total posts, total likes

### Daily Challenges
| Day | Component | Skills Demonstrated |
|-----|-----------|-------------------|
| 1 | `Greeting.jsx` | Props, conditional logic, time-based messages |
| 2 | `Card.jsx` | Variant prop, reusable styling, children composition |
| 3 | `UserList.jsx` | List rendering, keys, empty state handling |
| 4 | `Button.jsx` | Multiple props, loading state, accessibility |
| 5 | `PageLayout.jsx` | Layout composition, responsive design patterns |

## How to Run
### Option 1: Development Mode
```bash
# 1. Clone the repository
git clone https://github.com/Kimiti4/iyf-s10-week-08-Kimiti4.git
cd iyf-s10-week-08-Kimiti4

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# → Visit http://localhost:5173
```

### Option 2
# Create a new Vite project: 
npm create vite@latest test -- --template react

# Copy any component file into src/components/

# Import and use in App.jsx