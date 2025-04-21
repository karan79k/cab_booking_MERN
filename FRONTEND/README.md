# EasyRide Frontend Documentation 🚗

## Core Features

### Authentication System 🔐
- Separate flows for Users and Captains
- Protected routes using wrapper components
- JWT token management
- Persistent login state

### Context Management 🔄
- `UserContext`: Manages user authentication state
- `CaptainContext`: Manages captain authentication state
- `LocationContext`: Manages ride location state

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

### Component Features 🎯
1. **Home Page**
   - Animated bottom sheet for ride booking
   - Location search with recent places
   - Interactive input fields
   - Smooth transitions and animations

2. **Location Search**
   - Recent locations display
   - Search suggestions
   - Interactive map integration (coming soon)
   - Location validation

### UI/UX Features ✨
- Bottom sheet interactions
- Form animations
- Location suggestions
- Custom curved borders
- Backdrop blur effects
- Interactive feedback
- Loading states

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
- Location search panel
- Interactive bottom sheet

### Styling 🎨
- TailwindCSS for styling
- Framer Motion for animations
- GSAP for advanced animations
- Responsive design
- Custom color schemes
- Glassmorphism effects

## Setup ⚙️

```bash
npm install
npm run dev
```

### Environment Variables
```env
VITE_BASE_URL=http://your-backend-url
VITE_GOOGLE_MAPS_API_KEY=your-maps-api-key
```

## Tech Stack 💻
- React + Vite
- React Router v7
- Axios
- TailwindCSS
- Framer Motion
- GSAP
- Lucide Icons

## Authentication Flow 🔑
1. User/Captain logs in
2. JWT token stored in localStorage
3. Context updated with user/captain data
4. Protected routes become accessible
5. Token included in API requests

## Ride Booking Flow 🚗
1. User opens home page
2. Selects pickup location
3. Chooses destination
4. Views available rides (coming soon)
5. Confirms booking (coming soon)
