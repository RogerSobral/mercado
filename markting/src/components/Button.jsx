// src/components/Button.js
import React from 'react';
import './Button.css'; // Importando o CSS para estilização

const Button = ({ onClick, children, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`custom-button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

