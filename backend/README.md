# CaNi Backend API

This is the backend API server for the CaNi application.

## Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

   Or for development with auto-restart:
   ```
   npm run dev
   ```

The server will run on http://localhost:9876

## API Endpoints

- GET /api/openai?q=<query>
  - Returns a JSON array of search results with title and description.

## Notes

This is a mock implementation. In a production environment, you would integrate with actual search services or APIs like OpenAI.
