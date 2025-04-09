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
