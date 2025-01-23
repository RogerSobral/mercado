// src/components/Relatorios.jsx
import React from 'react';

const Relatorios = () => {
  // Exemplo de dados de relatórios
  const relatorios = [
    { id: 1, nome: 'Relatório de Vendas - Outubro', data: '2023-10-01' },
    { id: 2, nome: 'Relatório de Compras - Setembro', data: '2023-09-01' },
    { id: 3, nome: 'Relatório de Estoque - Agosto', data: '2023-08-01' },
  ];

  return (
    <div className="relatorios">
      <h2>Relatórios</h2>
      <ul>
        {relatorios.map((relatorio) => (
          <li key={relatorio.id}>
            {relatorio.nome} - Data: {relatorio.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Relatorios;