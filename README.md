# Movie Watchlist App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Movie Watchlist App is a web application that allows users to sign up and log in, search for movies, view movie details, and manage a personal watchlist. The app uses the OMDb API to fetch movie data and stores user data and watchlists locally.

## Features
- **User Authentication**: Sign up and log in using an email address.
- **Movie Search**: Search for movies by title.
- **Movie Detail**: View detailed information about a specific movie.
- **Personal Watchlist**: Add and remove movies from a personal watchlist.

## Tech Stack
- **Frontend**: React.js
- **State Management**: Redux
- **Routing**: React Router
- **API**: OMDb API
- **Storage**: Local Storage

## Setup
To get started with the project, follow these steps:

1. Clone the repository

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OMDb API key:
    ```env
    OMDB_API_KEY=your_api_key_here
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

The app should now be running at `http://localhost:5173/`.

## Usage
1. **Sign Up**: Create a new account by providing an email and password.
2. **Log In**: Log in using the email and password you used during sign-up.
3. **Search Movies**: Use the search bar on the movie list page to find movies by title.
4. **View Movie Details**: Click on a movie to view detailed information.
5. **Manage Watchlist**: Add movies to your watchlist and remove them as needed.



## Available Scripts
In the project directory, you can run:

### `npm run dev`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.


## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
