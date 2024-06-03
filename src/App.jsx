import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MovieList from './pages/Movies/MovieList';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import ProtectedRoute from './utills/ProtectedRoute';
import Header from './components/Header';
import Watchlist from './pages/Movies/Watchlist';
import MovieDetails from './pages/Movies/MovieDetails';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ProtectedRoute>{<MovieList /> }</ProtectedRoute>} />
        <Route path="/movie/:id" element={<ProtectedRoute>{<MovieDetails /> }</ProtectedRoute>} />
        <Route path="/watchlist" element={<ProtectedRoute>{<Watchlist /> }</ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
