import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path='/signup' element= {<SignUp />} />
      <Route path='/dashboard' element={<Dashboard /> } />
    </Routes>
  );
}

export default App;
  