# Quickstart: GitHub User Authentication

## Prerequisites

- GitHub Account
- GitHub OAuth App (Client ID and Secret)

## Setup

1.  **Register GitHub App**
    - Go to GitHub Developer Settings -> OAuth Apps -> New OAuth App.
    - **Homepage URL**: `http://localhost:3000`
    - **Callback URL**: `http://localhost:3000/api/auth/callback/github`
    - Copy **Client ID** and generate a new **Client Secret**.

2.  **Configure Environment**
    - Create `.env.local` in project root:
      ```env
      AUTH_GITHUB_ID=your_client_id
      AUTH_GITHUB_SECRET=your_client_secret
      AUTH_SECRET=your_random_secret_string # Run `npx auth secret` to generate
      ```

3.  **Install Dependencies**
    ```bash
    npm install next-auth@beta
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

## Manual Verification

1.  **Login**:
    - Click "Sign in with GitHub" on the home page.
    - Verify redirection to GitHub.
    - Authorize app.
    - Verify redirection back to home page.
    - Verify your name/avatar appears.

2.  **Session Persistence**:
    - Refresh page.
    - Verify you remain logged in.

3.  **Logout**:
    - Click "Sign Out".
    - Verify you are logged out (UI shows "Sign in" again).
