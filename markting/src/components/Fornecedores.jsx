// src/components/Fornecedores.js
import React, { useState, useEffect } from 'react';

const Fornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    // Aqui você deve fazer uma chamada para a API para buscar os fornecedores
    // Exemplo: fetch('/api/fornecedores').then(response => response.json()).then(data => setFornecedores(data));
  }, []);

  const handleAddFornecedor = (e) => {
    e.preventDefault();
    // Aqui você deve fazer uma chamada para a API para adicionar um fornecedor
    // Exemplo: fetch('/api/fornecedores', { method: 'POST', body: JSON.stringify({ nome, endereco }) });
    setNome('');
    setEndereco('');
  };

  return (
    <div className="fornecedores">
      <h2>Fornecedores</h2>
      <form onSubmit={handleAddFornecedor}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
        <button type="submit">Adicionar Fornecedor</button>
      </form>
      <ul>
        {fornecedores.map((fornecedor) => (
          <li key={fornecedor.id}>{fornecedor.nome} - {fornecedor.endereco}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fornecedores;