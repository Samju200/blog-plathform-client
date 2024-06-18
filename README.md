# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

The frontend is built with React and includes several key features:

React Router: Used for navigating between different pages (e.g., home, login, signup, post details).
Axios for API Requests: Axios is used to make HTTP requests to the backend.
Context API for State Management: The Context API is used to manage global state, particularly for user authentication.
React Markdown: Allows users to write and render markdown content in posts.
Key Components
Home: Displays a list of blog posts with search functionality.
Login/Signup: Handles user authentication.
Post: Displays a single blog post and its comments.
Create/Edit Post: Allows users to create and edit blog posts.
Protected Route: Ensures that only authenticated users can access certain routes.
Assumptions
User Authentication: The system assumes that users will need to sign up and log in to create or comment on posts.
Markdown Support: Posts are written in markdown, leveraging react-markdown for rendering.
API Endpoints: Assumes a RESTful API design for managing posts and comments.
Choice of Tools and Libraries
Express: Chosen for its simplicity and minimalism, making it easy to set up and extend.
Mongoose: Provides a straightforward way to model application data and interact with MongoDB.
JWT: Offers a secure and stateless way to handle user authentication.
React: A popular library for building dynamic user interfaces.
Axios: Simplifies making HTTP requests and handling responses.
React Router: Facilitates navigation between different parts of the application.
React Markdown: Enables easy integration of markdown content, which is common in blogging platforms.
