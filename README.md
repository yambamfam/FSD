# TEAM BIRBAL – Student Team Members Management Application

A full-stack MERN (MongoDB, Express, React, Node.js) web application for managing student team members. Users can add new members with their academic and personal details, view all team members, and view individual profiles with photos.

---

## 🚀 Project Description

This application was built as part of the SRM course **21CSS301T - Full Stack Development**. It includes:

- A landing page showing the team name and navigation buttons
- A form to **add team members** with a photo
- A page to **view all members** in a card layout
- A **details page** for each member showing all submitted information
- Uses **MongoDB** to store data and **uploads folder** to store profile images

---

## 🛠️ Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/TEAM-BIRBAL.git # Replace <your-username> with the actual username/organization
cd TEAM-BIRBAL
```

### 2. Install Frontend Dependencies

Navigate to the root directory and install the necessary packages:

```bash
npm install
```

### 3. Install Backend Dependencies

Navigate to the `backend` directory and install the necessary packages:

```bash
cd backend
npm install
```

### 4. Set up MongoDB

Ensure you have MongoDB installed and running on your local machine. The application connects to `mongodb://localhost:27017/teamdb` by default.

---

## ⚙️ API Endpoints

The backend server provides the following API endpoints under the `/api/members` route:

-   `GET /`: Fetches all team members.
-   `POST /`: Adds a new team member. Expects `multipart/form-data` including an `image` file and other member details (`name`, `role`, `email`).
-   `GET /:id`: Fetches a single team member by their MongoDB `_id`.

The server also serves uploaded images statically via the `/uploads` route:

-   `GET /uploads/:filename`: Accesses an uploaded member image.

---

## ▶️ How to Run the App

### 1. Start the Backend Server

Navigate to the `backend` directory and start the Node.js server:

```bash
cd backend
node server.js
# The server will start on http://localhost:5000
```

### 2. Start the Frontend Development Server

Navigate back to the root project directory and start the React development server:

```bash
cd .. 
npm start
# The application will open automatically in your browser at http://localhost:3000
```

