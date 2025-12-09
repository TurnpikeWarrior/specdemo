# Data Model: GitHub User Authentication

## Entities

### User (Session Context)

Represents the authenticated user state stored in the JWT session.

| Field | Type | Description | Source |
|-------|------|-------------|--------|
| `name` | `string` | User's display name | GitHub Profile |
| `email` | `string` | User's email address | GitHub Profile |
| `image` | `string` | URL to user's avatar | GitHub Profile |

## Storage

No persistent database storage is implemented for users in this phase. User identity is derived transiently from the GitHub OAuth session and stored in a secure HTTP-only cookie (JWT).

## Validation Rules

- **Email**: Must be present and verified by GitHub.
- **Session**: Must be valid (signed by `AUTH_SECRET`).
