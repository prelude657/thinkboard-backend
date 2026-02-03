Thinkboard 🧠📝

Full-Stack MERN Notes Application (Monorepo)

Thinkboard is a full-stack Notes application built with the MERN stack.
This repository is structured as a monorepo, containing both backend and frontend codebases under a single project.

The backend API is fully implemented and production-ready.
The frontend (React) is planned and scaffolded.

📁 Repository Structure (Monorepo)
MERN Stack-Thinkboard/
├── backend/        # Node.js + Express API (complete)
├── frontend/       # React frontend (coming soon)
├── .gitignore
└── README.md

✅ Backend Status: Complete

The backend handles all core application logic, including database access, API routing, validation, and rate limiting.

🔧 Tech Stack (Backend)

Node.js

Express.js

MongoDB Atlas

Mongoose

Upstash Redis (Rate limiting)

dotenv

Nodemon

📌 Backend Features

RESTful API architecture

CRUD operations for notes

MongoDB schema modeling with Mongoose

Proper HTTP status codes & error handling

Request rate limiting using Redis (Upstash)

Environment variable protection

Fully tested with Postman

📡 API Endpoints
Method	Endpoint	Description
GET	/api/notes	Fetch all notes
GET	/api/notes/:id	Fetch note by ID
POST	/api/notes	Create a new note
PUT	/api/notes/:id	Update a note
DELETE	/api/notes/:id	Delete a note
🔐 Environment Variables (Backend)

Create a .env file inside the backend directory:

MONGO_URI=your_mongodb_connection_string
PORT=5001


⚠️ .env is ignored by Git.
Use .env.example as a reference.

▶️ Running the Backend Locally
cd backend
npm install
npm run dev


Server runs on:

http://localhost:5001

🛠 Frontend Status: Planned

The frontend will be built using React and will consume the existing API.

Planned Frontend Stack

React

Axios / Fetch API

Component-based architecture

Responsive UI

The frontend/ directory exists to reflect intentional project structure and will be implemented next.

🚧 Project Progress
✅ Completed

Backend API architecture

MongoDB integration

CRUD operations

Rate limiting with Redis

Error handling & validation

API testing (Postman)

Monorepo project structure

🔄 In Progress

Frontend planning & design

🔜 Planned

React frontend implementation

Authentication

Deployment (API + UI)

👤 Author

Kurtis Henry
Frontend Developer • QA Engineer • MERN Stack Developer

💡 Note for Recruiters

This repository is intentionally structured as a monorepo.
The backend is complete and production-ready.
The frontend will be added to this same repository once implemented.
