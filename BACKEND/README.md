# Cab Booking API Documentation 🚗

## User Registration Endpoint 👤

### `POST /users/register`

Register a new user in the cab booking system.

#### Request Body 📝

```json
{
  "fullname": {
    "firstname": "John",     // minimum 3 characters
    "lastname": "Doe"        // minimum 3 characters
  },
  "email": "john@email.com", // valid email format
  "password": "123456"       // minimum 6 characters
}
```

#### Response 📨

**Success Response (201 Created)**
```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@email.com",
    "_id": "user_id_here"
  }
}
```

**Error Responses**

*Validation Error (400 Bad Request)*
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "path": "email"
    },
    {
      "msg": "password must be at least 6 character",
      "path": "password"
    },
    {
      "msg": "first name must be at least 3 char",
      "path": "fullname.firstname"
    }
  ]
}
```

*Missing Fields Error (401 Unauthorized)*
```json
{
  "message": "all fields must be required"
}
```

### Validation Rules ✅

- Email must be valid format
- Password must be minimum 6 characters
- First name must be minimum 3 characters
- Last name must be minimum 3 characters (optional field)

### Security Features 🔒

- Password is hashed using bcrypt
- JWT token is generated for authentication
- Password is excluded from user responses

## User Login Endpoint 🔑

### `POST /users/login`

Authenticate a user and get access token.

#### Request Body 📝

```json
{
  "email": "john@email.com",    // registered email
  "password": "123456"          // account password
}
```

#### Response 📨

**Success Response (201 Created)**
```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@email.com",
    "_id": "user_id_here"
  }
}
```

**Error Responses**

*Validation Error (400 Bad Request)*
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "path": "email"
    },
    {
      "msg": "password must be at least 6 character",
      "path": "password"
    }
  ]
}
```

*Authentication Error (401 Unauthorized)*
```json
{
  "message": "Invalid email or password"
}
```

### Validation Rules ✅

- Email must be valid format
- Password must be minimum 6 characters
- Both email and password are required fields

### Security Features 🔒

- Password is compared using bcrypt
- JWT token is generated upon successful authentication
- Password is never returned in response
- Invalid credentials return generic error message

## User Profile Endpoint 👨‍💼

### `GET /users/profile`

Get the authenticated user's profile information.

#### Request Headers 🔓

```
Authorization: Bearer <jwt_token>
```

#### Response 📨

**Success Response (200 OK)**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@email.com",
  "_id": "user_id_here"
}
```

**Error Response**

*Unauthorized (401)*
```json
{
  "message": "Authentication required"
}
```

### Security Features 🔒
- Requires valid JWT token
- Protected route using auth middleware
- Password field excluded from response

## User Logout Endpoint 🚪

### `GET /users/logout`

Logout the currently authenticated user.

#### Request Headers 🔓

```
Authorization: Bearer <jwt_token>
```

#### Response 📨

**Success Response (200 OK)**
```json
{
  "message": "Logged Out"
}
```

**Error Response**

*Unauthorized (401)*
```json
{
  "message": "Authentication required"
}
```

### Security Features 🔒
- Clears authentication cookie
- Blacklists the current JWT token
- Requires valid JWT token
- Protected route using auth middleware