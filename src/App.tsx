import { useState } from 'react'
import Login from './pages/Login'
import Game from './pages/Game'
import Dashboard from './pages/Dashboard'

import './App.css'

import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import { UserProvider } from './context/user'

function App() {

  return (
  
<>

    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<Login />} />

            <Route element={<ProtectedRoutes />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='game' element={<Game />} />
            </Route>

            <Route path='/' element={<Navigate to={'/login'} />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>

</>

  );
}

export default App
