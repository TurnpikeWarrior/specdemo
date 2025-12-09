# API Contracts (Auth Routes)

**Note**: These endpoints are automatically generated and handled by `next-auth`.

## Auth Endpoints

### `GET /api/auth/signin`
Initiates the sign-in flow. Redirects to GitHub.

### `GET /api/auth/signout`
Initiates the sign-out flow. Clears session cookies.

### `GET /api/auth/callback/github`
Handles the OAuth callback from GitHub. Exchanges code for tokens and sets session cookies.

### `GET /api/auth/session`
Returns the current session object (Client-side use).

## Server-Side Contract (Internal)

### `auth()`
Function to retrieve the current session in Server Components or Server Actions.

- **Input**: None (reads headers/cookies)
- **Output**: `Promise<Session | null>`
