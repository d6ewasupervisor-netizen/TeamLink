# TeamLink

A Next.js application for team management with impact reporting, recognition, and corrective action forms.

## Setup Instructions

### Prerequisites

- Node.js 20+ (currently using v24.12.0)
- npm 11+ (currently using v11.6.2)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory with the following variables:
   
   ```env
   # Google Genkit AI Configuration
   # Get your API key from: https://aistudio.google.com/apikey
   GOOGLE_GENAI_API_KEY=your_google_genai_api_key_here
   
   # Firebase Configuration (if using Firebase)
   # FIREBASE_API_KEY=your_firebase_api_key
   # FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   # FIREBASE_PROJECT_ID=your_project_id
   # FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   # FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   # FIREBASE_APP_ID=your_app_id
   ```

### Development

- **Start the Next.js development server:**
  ```bash
  npm run dev
  ```
  The app will be available at `http://localhost:9002`

- **Start Genkit AI development server:**
  ```bash
  npm run genkit:dev
  ```

- **Run TypeScript type checking:**
  ```bash
  npm run typecheck
  ```

- **Run linting:**
  ```bash
  npm run lint
  ```

### Build

- **Build for production:**
  ```bash
  npm run build
  ```

- **Start production server:**
  ```bash
  npm start
  ```

## Project Structure

- `src/app/` - Next.js app router pages and layouts
- `src/components/` - React components (UI, dashboard, layout)
- `src/ai/` - Genkit AI flows and configuration
- `src/lib/` - Utilities, types, and mock data
- `src/hooks/` - Custom React hooks

## Features

- Impact Reporting
- Recognition Submission
- Corrective Action Forms (CAF)
- Pattern Detection Tool
- Role-Based Access Control
- Dashboard Views

For more details, see `docs/blueprint.md`.
