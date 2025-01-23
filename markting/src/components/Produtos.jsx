// src/components/Produtos.jsx
import React, { useState, useEffect } from 'react';
import Button from './Button'; // Importando o componente Button

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [fornecedorId, setFornecedorId] = useState('');

  useEffect(() => {
    // Aqui você deve fazer uma chamada para a API para buscar os produtos
    // Exemplo: fetch('/api/produtos').then(response => response.json()).then(data => setProdutos(data));
    // Para fins de demonstração, vamos usar dados fictícios
    setProdutos([
      { id: 1, nome: 'Produto 1', marca: 'Marca A', fornecedorId: 1 },
      { id: 2, nome: 'Produto 2', marca: 'Marca B', fornecedorId: 2 },
    ]);
  }, []);

  const handleAddProduto = (e) => {
    e.preventDefault();
    // Aqui você deve fazer uma chamada para a API para adicionar um produto
    // Exemplo: fetch('/api/produtos', { method: 'POST', body: JSON.stringify({ nome, marca, fornecedorId }) });
    
    // Para fins de demonstração, vamos adicionar o produto localmente
    const newProduto = {
      id: produtos.length + 1, // Simulando um ID único
      nome,
      marca,
      fornecedorId,
    };
    setProdutos([...produtos, newProduto]);
    setNome('');
    setMarca('');
    setFornecedorId('');
  };

  return (
    <div className="produtos">
      <h2>Produtos</h2>
      <form onSubmit={handleAddProduto}>
        <input
          type="text"
          placeholder="Nome do Produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <input
          type="number"
          placeholder="ID do Fornecedor"
          value={fornecedorId}
          onChange={(e) => setFornecedorId(e.target.value)}
          required
        />
        <Button type="submit">Adicionar Produto</Button>
      </form>
      <h3>Lista de Produtos</h3>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.marca} (Fornecedor ID: {produto.fornecedorId})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;