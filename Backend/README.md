# Backend API Documentation

## Endpoints

### HTTP POST

`/users/register`

#### Description

This endpoint is used to register a new user in the system.

#### Request Body

The request body must be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min length: 3, required)",
    "lastname": "string (optional, min length: 3)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min length: 6, required)"
}
```

#### Response

- **201 Created**

  - **Description**: User successfully registered.
  - **Body**:
    ```json
    {
      "token": "string (JWT token)",
      "user": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (body)"
        }
      ]
    }
    ```

#### Example Request

```bash
curl -X POST http://localhost:<port>/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

#### Example Response (201 Created)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f9c8e2...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Notes

- Ensure the `Content-Type` header is set to `application/json`.
- The `password` field is hashed before being stored in the database.
- The `token` is a JWT used for authentication in subsequent requests.

### HTTP POST

`/users/login`

#### Description

This endpoint is used to authenticate a user and return a JWT token.

#### Request Body

The request body must be a JSON object with the following structure:

```json
{
  "email": "string (valid email format, required)",
  "password": "string (min length: 6, required)"
}
```

#### Response

- **200 OK**

  - **Description**: User successfully authenticated.
  - **Body**:
    ```json
    {
      "token": "string (JWT token)",
      "user": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (body)"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

#### Example Request

```bash
curl -X POST http://localhost:<port>/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

#### Example Response (200 OK)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f9c8e2...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Notes

- Ensure the `Content-Type` header is set to `application/json`.
- The `token` is a JWT used for authentication in subsequent requests.

### HTTP GET

`/users/profile`

#### Description

This endpoint is used to retrieve the profile of the currently authenticated user.

#### Headers / Cookies

- **Authorization**: Bearer `<JWT token>` (required)

#### Response

- **200 OK**

  - **Description**: Successfully retrieved user profile.
  - **Body**:
    ```json
    {
      "user": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string"
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Missing or invalid token.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request

```bash
curl -X GET http://localhost:<port>/users/profile \
-H "Authorization: Bearer <JWT token>"
```

#### Example Response (200 OK)

```json
{
  "user": {
    "_id": "64f9c8e2...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

### HTTP GET

`/users/logout`

#### Description

This endpoint is used to log out the currently authenticated user by blacklisting their token.

#### Headers

- **Authorization**: Bearer `<JWT token>` (required)

#### Response

- **200 OK**

  - **Description**: Successfully logged out.
  - **Body**:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

- **401 Unauthorized**
  - **Description**: Missing or invalid token.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request

```bash
curl -X GET http://localhost:<port>/users/logout \
-H "Authorization: Bearer <JWT token>"
```

#### Example Response (200 OK)

```json
{
  "message": "Logged out successfully"
}
```

### HTTP POST

`/captains/register`

#### Description

This endpoint is used to register a new captain in the system.

#### Request Body

The request body must be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min length: 3, required)",
    "lastname": "string (optional, min length: 3)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min length: 8, required)",
  "vehicle": {
    "color": "string (min length: 3, required)",
    "plate": "string (min length: 3, required)",
    "capacity": "integer (min: 1, required)",
    "vehicleType": "string (one of: 'car', 'bike', 'auto', required)"
  }
}
```

#### Response

- **201 Created**

  - **Description**: Captain successfully registered.
  - **Body**:
    ```json
    {
      "token": "string (JWT token)",
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "integer",
          "vehicleType": "string"
        }
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (body)"
        }
      ]
    }
    ```

#### Example Request

```bash
curl -X POST http://localhost:<port>/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "email": "john.smith@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```

#### Example Response (201 Created)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64f9c8e2...",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Notes

- Ensure the `Content-Type` header is set to `application/json`.
- The `password` field is hashed before being stored in the database.
- The `token` is a JWT used for authentication in subsequent requests.

### HTTP POST

`/captains/login`

#### Description

This endpoint is used to authenticate a captain and return a JWT token.

#### Request Body

The request body must be a JSON object with the following structure:

```json
{
  "email": "string (valid email format, required)",
  "password": "string (min length: 8, required)"
}
```

#### Response

- **200 OK**

  - **Description**: Captain successfully authenticated.
  - **Body**:
    ```json
    {
      "token": "string (JWT token)",
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "integer",
          "vehicleType": "string"
        }
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (body)"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**:
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

#### Example Request

```bash
curl -X POST http://localhost:<port>/captains/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.smith@example.com",
  "password": "securepassword"
}'
```

#### Example Response (200 OK)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64f9c8e2...",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### HTTP GET

`/captains/profile`

#### Description

This endpoint is used to retrieve the profile of the currently authenticated captain.

#### Headers / Cookies

- **Authorization**: Bearer `<JWT token>` (required)

#### Response

- **200 OK**

  - **Description**: Successfully retrieved captain profile.
  - **Body**:
    ```json
    {
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "integer",
          "vehicleType": "string"
        }
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Missing or invalid token.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request

```bash
curl -X GET http://localhost:<port>/captains/profile \
-H "Authorization: Bearer <JWT token>"
```

#### Example Response (200 OK)

```json
{
  "captain": {
    "_id": "64f9c8e2...",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### HTTP GET

`/captains/logout`

#### Description

This endpoint is used to log out the currently authenticated captain by blacklisting their token.

#### Headers

- **Authorization**: Bearer `<JWT token>` (required)

#### Response

- **200 OK**

  - **Description**: Successfully logged out.
  - **Body**:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

- **401 Unauthorized**
  - **Description**: Missing or invalid token.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request

```bash
curl -X GET http://localhost:<port>/captains/logout \
-H "Authorization: Bearer <JWT token>"
```

#### Example Response (200 OK)

```json
{
  "message": "Logged out successfully"
}
```

### HTTP POST

`/rides/create`

#### Description

This endpoint is used to create a new ride.

#### Request Body

The request body must be a JSON object with the following structure:

```json
{
  "pickup": "string (required, min length: 3)",
  "destination": "string (required, min length: 3)",
  "vehicleType": "string (required, one of: 'auto', 'car', 'bike')"
}
```

#### Response

- **201 Created**
  - **Description**: Ride successfully created.
  - **Body**:
    ```json
    {
      "ride": {
        "_id": "string",
        "user": "string (user ID)",
        "pickup": "string",
        "destination": "string",
        "fare": "number",
        "otp": "string (6-digit OTP)",
        "status": "string (default: 'pending')"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (body)"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: Server error while creating the ride.
  - **Body**:
    ```json
    {
      "error": "string (error message)"
    }
    ```

#### Example Request

```bash
curl -X POST http://localhost:<port>/rides/create \
-H "Authorization: Bearer <JWT token>" \
-H "Content-Type: application/json" \
-d '{
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "vehicleType": "car"
}'
```

#### Example Response (201 Created)

```json
{
  "ride": {
    "_id": "64f9c8e2...",
    "user": "64f9c8e2...",
    "pickup": "123 Main St",
    "destination": "456 Elm St",
    "fare": 150,
    "otp": "123456",
    "status": "pending"
  }
}
```

---

### HTTP GET

`/maps/get-coordinates`

#### Description

This endpoint is used to get the latitude and longitude of a given address.

#### Query Parameters

- `address` (string, required): The address to geocode.

#### Headers

- **Authorization**: Bearer `<JWT token>` (required)

#### Response

- **200 OK**
  - **Description**: Successfully retrieved coordinates.
  - **Body**:
    ```json
    {
      "ltd": "number",
      "lng": "number"
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (query)"
        }
      ]
    }
    ```

#### Example Request

```bash
curl -X GET http://localhost:<port>/maps/get-coordinates?address=123+Main+St \
-H "Authorization: Bearer <JWT token>"
```

#### Example Response (200 OK)

```json
{
  "ltd": 37.7749,
  "lng": -122.4194
}
```

---

### HTTP GET

`/maps/get-distance-time`

#### Description

This endpoint is used to calculate the distance and time between two locations.

#### Query Parameters

- `origin` (string, required): The starting location.
- `destination` (string, required): The destination location.

#### Headers

- **Authorization**: Bearer `<JWT token>` (required)

#### Response

- **200 OK**
  - **Description**: Successfully retrieved distance and time.
  - **Body**:
    ```json
    {
      "distance": {
        "text": "string (e.g., '5 km')",
        "value": "number (in meters)"
      },
      "duration": {
        "text": "string (e.g., '10 mins')",
        "value": "number (in seconds)"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (query)"
        }
      ]
    }
    ```

#### Example Request

```bash
curl -X GET "http://localhost:<port>/maps/get-distance-time?origin=123+Main+St&destination=456+Elm+St" \
-H "Authorization: Bearer <JWT token>"
```

#### Example Response (200 OK)

```json
{
  "distance": {
    "text": "5 km",
    "value": 5000
  },
  "duration": {
    "text": "10 mins",
    "value": 600
  }
}
```

---

### HTTP GET

`/maps/get-suggestions`

#### Description

This endpoint is used to get address suggestions based on a partial address.

#### Query Parameters

- `address` (string, required): The partial address to search for.

#### Headers

- **Authorization**: Bearer `<JWT token>` (required)

#### Response

- **200 OK**
  - **Description**: Successfully retrieved address suggestions.
  - **Body**:
    ```json
    [
      "string (suggested address 1)",
      "string (suggested address 2)",
      ...
    ]
    ```

- **400 Bad Request**
  - **Description**: Validation errors or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (query)"
        }
      ]
    }
    ```

#### Example Request

```bash
curl -X GET "http://localhost:<port>/maps/get-suggestions?address=Main" \
-H "Authorization: Bearer <JWT token>"
```

#### Example Response (200 OK)

```json
[
  "123 Main St, San Francisco, CA",
  "123 Main St, Los Angeles, CA"
]
```
