import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieList from './pages/Movies/MovieList';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import ProtectedRoute from './utills/ProtectedRoute';
import Header from './components/Header';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ProtectedRoute>{isAuthenticated ? <MovieList /> : <Navigate to="/login" replace />}</ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
