import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Produtos from './Produtos';
import Fornecedores from './Fornecedores';
import Compras from './Compras';
import Relatorios from './Relatorios';
import LoginForm from './LoginForm';
import './MenuPrincipal.css'; // Importando o CSS para estilização

const MenuPrincipal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="menu-principal">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {/* Ícone de hambúrguer */}
          ☰
        </button>
        <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
            <li>
              <Link>Sair</Link>
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