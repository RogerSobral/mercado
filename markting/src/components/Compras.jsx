// src/components/Compras.jsx
import React, { useState, useEffect } from 'react';
import Button from './Button'; // Importando o componente Button

const Compras = () => {
  const [compras, setCompras] = useState([]);
  const [produtoId, setProdutoId] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    // Aqui você deve fazer uma chamada para a API para buscar as compras
    // Exemplo: fetch('/api/compras').then(response => response.json()).then(data => setCompras(data));
    // Para fins de demonstração, vamos usar dados fictícios
    setCompras([
      { id: 1, produtoId: 1, quantidade: 2, valor: 20.00, data: '2023-10-01' },
      { id: 2, produtoId: 2, quantidade: 1, valor: 15.00, data: '2023-10-02' },
    ]);
  }, []);

  const handleAddCompra = (e) => {
    e.preventDefault();
    // Aqui você deve fazer uma chamada para a API para adicionar uma compra
    // Exemplo: fetch('/api/compras', { method: 'POST', body: JSON.stringify({ produtoId, quantidade, valor, data }) });
    
    // Para fins de demonstração, vamos adicionar a compra localmente
    const newCompra = {
      id: compras.length + 1, // Simulando um ID único
      produtoId,
      quantidade,
      valor: parseFloat(valor),
      data,
    };
    setCompras([...compras, newCompra]);
    setProdutoId('');
    setQuantidade('');
    setValor('');
    setData('');
  };

  return (
    <div className="compras">
      <h2>Compras</h2>
      <form onSubmit={handleAddCompra}>
        <input
          type="number"
          placeholder="ID do Produto"
          value={produtoId}
          onChange={(e) => setProdutoId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <Button type="submit">Adicionar Compra</Button>
      </form>
      <h3>Lista de Compras</h3>
      <ul>
        {compras.map((compra) => (
          <li key={compra.id}>
            Produto ID: {compra.produtoId} - Quantidade: {compra.quantidade} - Valor: R$ {compra.valor.toFixed(2)} - Data: {compra.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Compras;