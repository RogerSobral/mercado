// src/App.jsx
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import MenuPrincipal from './components/MenuPrincipal';
import './App.css'; // Importando estilos específicos do App

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <MenuPrincipal />
      )}
    </div>
  );
};

export default App;