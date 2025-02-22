# Taskly - Task Management Application

## Short Description
Taskly is a task management application that helps users organize and manage their tasks efficiently. With features like drag-and-drop task management, real-time updates using WebSocket, and MongoDB-backed data storage, Taskly provides a smooth and intuitive experience for managing daily tasks. The app is fully responsive and allows users to easily move tasks between categories such as "To-Do", "In Progress", and "Done".

## Live Links
- **Frontend**: [https://taskly-d02fb.web.app/](https://taskly-d02fb.web.app/) (Replace this with your actual live URL on Firebase)
- **Backend**: [https://taskly-backend-sigma.vercel.app/](https://taskly-backend-sigma.vercel.app/) (Replace this with your actual backend URL)

## Dependencies
Here are the key dependencies used in the project:

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: A library for handling navigation in React applications.
- **Tailwind CSS**: A utility-first CSS framework for creating modern designs.
- **React Query**: A data-fetching library to manage and cache server state.
- **react-beautiful-dnd**: A library for drag-and-drop functionality.
- **Firebase**: A platform for building and hosting web apps, used here for authentication and hosting.
  
### Backend
- **Express.js**: A minimal web framework for Node.js to handle API requests.
- **MongoDB**: A NoSQL database for storing tasks.
- **WebSocket**: A protocol for real-time communication between the client and server.
- **CORS**: A middleware to enable cross-origin requests.

## Installation Steps
### To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/taskly.git
2. **Navigate to the frontend directory**:

    cd taskly/frontend
3.**Install frontend dependencies**:

    npm install
4. **Navigate to the backend directory**:

    cd ../backend
5. **Install backend dependencies**:

    npm install
6. **Set up environment variables**:

    DB_USER=your-mongo-db-username
    DB_PASS=your-mongo-db-password
    PORT=5000
7. **Start the backend server**:

    npm run start
8. **Start the frontend application**:

    cd ../frontend
    npm run start
9. **Visit the app in your browser**:

    Open http://localhost:3000 to see the application running locally.

## Technologies Used

- **Frontend**: React, Tailwind CSS, React Router DOM, React Query, Firebase Authentication, react-beautiful-dnd
- **Backend**: Node.js, Express.js, MongoDB, WebSocket, CORS
- **Database**: MongoDB (MongoDB Atlas)
- **Hosting**: Firebase Hosting for the frontend and your custom backend hosting (e.g., Heroku, DigitalOcean)


