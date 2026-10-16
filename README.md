# Multipage React Dashboard

A responsive, multipage dashboard application built with **React and Vite**. The project demonstrates client-side routing, protected routes, global state management using Context API, and API integration.

## 📌 Project Overview

The Multipage React Dashboard provides a simple interface where users can log in, view dashboard statistics, browse user information, and access their profile.

The application uses mock authentication for demonstration purposes and retrieves sample user data from the JSONPlaceholder API.

## ✨ Features

- **Login Page:** Simple login form with email and password validation.
- **Protected Routes:** Restricts access to dashboard pages when the user is not logged in.
- **Dashboard:** Displays summary statistics and recent user information.
- **Users Page:** Fetches and displays user data in a table with search functionality.
- **Profile Page:** Displays the profile section for the logged-in user.
- **Global State Management:** Uses React Context API to share authentication state across components.
- **React Router:** Supports navigation between pages without full-page reloads.
- **404 Page:** Displays a fallback page for unknown routes.
- **Responsive UI:** Provides a layout designed to work across different screen sizes.
- **API Integration:** Fetches sample user data from an external REST API.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| Vite | Development server and build tool |
| React Router | Client-side routing and navigation |
| Context API | Managing shared authentication state |
| React Hooks | Managing state and component lifecycle |
| JavaScript (ES6+) | Application logic |
| CSS | Styling and responsive layouts |
| Fetch API | Making HTTP requests |
| JSONPlaceholder | Providing sample user data |

## 📂 Project Structure

```text
Multipage-Dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   ├── Profile.jsx
│   │   └── Users.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following software:

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)
- A code editor such as Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/saigrishma21/Multipage-Dashboard.git
```

### 2. Navigate to the Project Folder

```bash
cd Multipage-Dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 🔄 Application Workflow

1. **Login:** The user enters an email address and password.
2. **Authentication:** The application updates the authentication state through Context API.
3. **Route Protection:** ProtectedRoute checks whether the user is authenticated.
4. **Dashboard:** Authenticated users can view dashboard statistics and recent users.
5. **User Management:** The Users page fetches sample data from JSONPlaceholder and supports searching.
6. **Profile:** The user can navigate to the profile page.
7. **Logout:** Logging out clears the authentication state and returns the user to the login page.

## 🌐 API Integration

The application uses the JSONPlaceholder sample API to retrieve user information.

**API Endpoint:**

`https://jsonplaceholder.typicode.com/users`

The Fetch API sends an HTTP request, receives the JSON response, and allows the application to display user information.

JSONPlaceholder provides sample data for development and learning; it is not a production user database.

## 🔐 Authentication Note

This project uses **mock authentication** for demonstration and learning purposes.

- It does not implement a real backend authentication service.
- Credentials are not verified against a database.
- Authentication state is managed on the client side.
- The protected routes demonstrate frontend navigation control, not production-grade security.

A production application should use a secure backend, appropriate session or token handling, and server-side authorization.

## 🚀 Production Build

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## 🎯 Learning Outcomes

By developing this project, I practiced:

- Building reusable React components.
- Implementing multipage navigation using React Router.
- Creating protected routes.
- Managing shared state with Context API.
- Fetching and displaying data from a REST API.
- Implementing search functionality.
- Organizing a React application into components, context, and pages.
- Building and preparing a Vite application for production.

## 🔮 Future Enhancements

- Integrate a real backend authentication system.
- Add persistent login and secure session management.
- Implement pagination, sorting, and filtering for user data.
- Add charts and visual analytics to the dashboard.
- Introduce loading indicators and improved error handling.
- Add unit and integration tests.
- Deploy the application using a hosting platform such as Vercel or Netlify.

## 👩‍💻 Author

**Sai Grishma**

GitHub: [@saigrishma21](https://github.com/saigrishma21)

---

*Built with React to practice modern frontend development concepts.*
