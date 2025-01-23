// src/components/MenuPrincipal.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Produtos from './Produtos';
import Fornecedores from './Fornecedores';
import Compras from './Compras';
import Relatorios from './Relatorios';
import './MenuPrincipal.css'; // Importando o CSS para estilização

const MenuPrincipal = () => {
  return (
    <Router>
      <div className="menu-principal">
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/fornecedores">Fornecedores</Link>
            </li>
            <li>
              <Link to="/compras">Compras</Link>
            </li>
            <li>
              <Link to="/relatorios">Relatórios</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/compras" element={<Compras />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/" element={<Produtos />} /> {/* Página padrão */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MenuPrincipal;