import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
import MesReservations from './pages/MesReservations';
import ProposerTrajet from './pages/ProposerTrajet';
import MesTrajets from './pages/MesTrajets';
import Profil from './pages/Profil';
import { NotificationProvider } from './contexts/NotificationContext';
import './index.css';
function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/mes-reservations"
              element={
                <ProtectedRoute roles={['PASSAGER', 'CONDUCTEUR']}>
                  <MesReservations />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profil"
              element={
                <ProtectedRoute>
                  <Profil />
                </ProtectedRoute>
              }
            />

            <Route
              path="/proposer"
              element={
                <ProtectedRoute requiredRole="CONDUCTEUR">
                  <ProposerTrajet />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mes-trajets"
              element={
                <ProtectedRoute requiredRole="CONDUCTEUR">
                  <MesTrajets />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="ADMIN">
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
