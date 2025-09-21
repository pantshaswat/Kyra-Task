This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Consent Withdrawal Implementation

This project implements a consent withdrawal feature that allows users to easily withdraw their previously given consents. The implementation includes both frontend and backend components.

## Features

- **User Lookup**: Search for users by email to view their consents
- **Consent Management**: View all consents associated with a user
- **Withdraw Consent**: Users can withdraw specific consents with a confirmation step
- **Audit Logging**: All consent withdrawals are logged for compliance

## Technical Implementation

### Backend (Node.js/Express)
- REST API endpoints for user and consent management
- CORS protection for secure cross-origin requests
- Database operations using PostgreSQL
- Audit logging for consent withdrawals

### Frontend (Next.js/React)
- Responsive UI built with Tailwind CSS
- Form for user email lookup
- Consent list with withdrawal functionality
- Confirmation dialog before withdrawal
- Real-time UI updates after withdrawal

## API Endpoints

- `GET /api/users?email={email}` - Retrieve user and their consents
- `POST /api/consent/delete` - Withdraw a specific consent

## Database Schema

- **users**: Stores user information (id, name, email)
- **user_consents**: Tracks user consents with status and timestamps
- **audit_logs**: Records all consent-related actions

## Setup

1. Install dependencies:
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

2. Configure the database connection in `backend/server.js`

3. Start the development servers:
   ```bash
   # Backend
   cd backend
   node server.js
   
   # Frontend
   cd ../frontend
   npm run dev
   ```

4. Access the application at `http://localhost:3000`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
