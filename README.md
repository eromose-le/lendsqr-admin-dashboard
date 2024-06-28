# Lendsqr Admin User Dashboard

## Table of Contents
- [Lendsqr Admin User Dashboard](#lendsqr-admin-user-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Routes](#routes)
  - [File Directory Structure](#file-directory-structure)
  - [Setup and Running the Application](#setup-and-running-the-application)
  - [Testing](#testing)
  - [Behaviour](#behaviour)

## Introduction
Lendsqr Admin User Dashboard is a single-page web application designed to manage and display user data effectively. It leverages a range of modern web technologies to ensure a smooth, efficient, and scalable application.

## Technologies
- **React**: The frontend library.
- **React Router**: To handle routing within the single-page application.
- **React-table**: Optimizes data loading and simplifies code due to its treeshakeable nature, making it lightweight.
- **Momentjs**: Similar to DateFns, used for date formatting.
- **Redux**: Handles data storage.
- **Rtkquery**: A subset of Redux, used to fetch data and manage state changes (error, success, loading).
- **Axios**: A library for making API calls.
- **react-tooltip**: Displays tooltips on hover over component elements.
- **Sass**: Used for styling React components.
- **Vite**: A modern bundler for React, known for its speed and optimization.
- **Typescript**: Provides type safety and helps catch bugs at runtime.
- **Jest**: A react tool for unit testing.

## Routes
- `/dashboard`: Shows the overview of the dashboard.
- `/users`: Displays a list of all users.
- `/users/:id`: Shows detailed information about a user whose ID was clicked on.
- `/login`: Displays the page for collecting user credentials (email and password) before signing in.

## File Directory Structure
- **public**: Stores all public assets.
- **common**: Stores all reusable components shared across the codebase.
- **components**: Contains smaller chunks or parts of a webpage.
- **constants**: Stores all reusable or static variables.
- **hooks**: Contains all reusable React functions.
- **pages**: Contains all pages.
- **router**: Contains all routing system files.
- **store**: Contains all state management setup files and configurations.
- **styles**: Contains all styling boilerplate codes.
- **utils**: Contains all utility or helper functions.
- **types**: Contains all TypeScript files and folders.
- **src**: Contains all file folders plus the root files, data files for dummy user data, and TypeScript bypass files.
- **root dir**: Contains env files, gitignore files, TypeScript configuration files, index files, Vite configuration files, ESLint files, and package.json files, test files.

## Setup and Running the Application
To set up the project and run the application, follow these steps:
1. Install the necessary dependencies:
    ```bash
    npm install
    ```
2. Start the development server:
    ```bash
    yarn dev
    ```

## Testing
1. Run test script:
    ```bash
    yarn test
    ```

## Behaviour
1. Navigate to the `/login` route.
2. Click the login button to be directed to the `/dashboard` page.
3. Locate "Users" on the side navigation bar and click on it to be directed to the `/users` page.
4. On page mount, a mock API call will be made to populate the dashboard with a list of users.
5. Click on any user record to go to the user detail page, or click the icon at the far right of the user row to bring up a small menu list.
6. You can also go to a user detail page by clicking on "view details."
7. On the user detail page, another mock API call will be made to fetch detailed user information, which will be saved to the localStorage (via Redux).
8. Click the header row on the table to display the filter modal.
