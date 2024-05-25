# Movie Watchlist App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
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

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/movie-watchlist-app.git
    cd movie-watchlist-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OMDb API key:
    ```env
    REACT_APP_OMDB_API_KEY=your_api_key_here
    ```

4. Start the development server:
    ```bash
    npm start
    ```

The app should now be running at `http://localhost:3000`.

## Usage
1. **Sign Up**: Create a new account by providing an email and password.
2. **Log In**: Log in using the email and password you used during sign-up.
3. **Search Movies**: Use the search bar on the movie list page to find movies by title.
4. **View Movie Details**: Click on a movie to view detailed information.
5. **Manage Watchlist**: Add movies to your watchlist and remove them as needed.

## Folder Structure
movie-watchlist-app/
├── public/
├── src/
│ ├── components/
│ │ ├── Auth/
│ │ │ ├── SignUp.js
│ │ │ ├── Login.js
│ │ ├── Movies/
│ │ │ ├── MovieList.js
│ │ │ ├── MovieDetail.js
│ │ │ ├── MovieCard.js
│ │ ├── Watchlist/
│ │ │ ├── Watchlist.js
│ │ │ ├── WatchlistItem.js
│ ├── redux/
│ │ ├── actions/
│ │ │ ├── authActions.js
│ │ │ ├── movieActions.js
│ │ │ ├── watchlistActions.js
│ │ ├── reducers/
│ │ │ ├── authReducer.js
│ │ │ ├── movieReducer.js
│ │ │ ├── watchlistReducer.js
│ │ │ ├── rootReducer.js
│ │ ├── store.js
│ ├── services/
│ │ ├── api.js
│ ├── utils/
│ │ ├── localStorage.js
│ ├── App.js
│ ├── index.js
│ ├── PrivateRoute.js
│ ├── PublicRoute.js
├── .env
├── package.json
└── README.md


## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
