# EasyRide Frontend Documentation 🚗

## Core Features til now

### Authentication System 🔐
- Separate flows for Users and Captains
- Protected routes using wrapper components
- JWT token management
- Persistent login state

### Context Management 🔄
- `UserContext`: Manages user authentication state
- `CaptainContext`: Manages captain authentication state

### Route Structure 🛣️

#### Public Routes
```jsx
/                 - Start page
/userlogin       - User login
/usersignup      - User registration
/captainlogin    - Captain login
/captainsignup   - Captain registration
```

#### Protected Routes
```jsx
/home           - User dashboard (requires user auth)
/user/logout    - User logout (requires user auth)
/captainhome    - Captain dashboard (requires captain auth)
/captain/logout - Captain logout (requires captain auth)
```

### Security Features 🛡️
- Token-based authentication
- Protected route wrappers
- Automatic logout on token expiry
- Local storage management

### Component Structure 📦
- Auth components (Login/Signup)
- Protected wrappers
- Context providers
- Home components

### Styling 🎨
- TailwindCSS for styling
- Framer Motion for animations
- Responsive design
- Custom color schemes for user/captain

## Setup ⚙️

```bash
npm install
npm run dev
```

### Environment Variables
```env
VITE_BASE_URL=http://your-backend-url 
```

## Tech Stack 💻
- React + Vite
- React Router v7
- Axios
- TailwindCSS
- Framer Motion

## Authentication Flow 🔑
1. User/Captain logs in
2. JWT token stored in localStorage
3. Context updated with user/captain data
4. Protected routes become accessible
5. Token included in API requests
