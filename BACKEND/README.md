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