# Italiano Restaurant - Backend API

Backend API for the Italiano restaurant website, providing endpoints for menu management, gallery, location information, and contact functionality.

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and configure environment variables
4. Start development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm start` - Start production server

## API Endpoints

The API is versioned and follows RESTful conventions:

- Base URL: `http://localhost:3000/api/v1`
- Health check: `GET /health`

### External (Public) Endpoints

- `/api/v1/external/*` - Public access endpoints

### Internal (Authenticated) Endpoints

- `/api/v1/internal/*` - Authenticated access endpoints

## Environment Variables

See `.env.example` for required environment variables.

## Development Guidelines

- Follow TypeScript strict mode
- Use path aliases (`@/`) for imports
- Implement proper error handling
- Document all API endpoints
- Write tests for business logic

## License

ISC