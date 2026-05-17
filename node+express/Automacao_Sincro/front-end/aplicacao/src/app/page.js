"use client"; // Obrigatório no Next.js para permitir o uso de estados (useState) e cliques em botões

import { useState } from 'react';

export default function Home() {
  const [arquivo, setArquivo] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const handleSelecionarArquivo = (event) => {
    setArquivo(event.target.files[0]);
    setResultado(null);
    setErro('');
  };

  const handleProcessar = async () => {
    if (!arquivo) {
      setErro('Por favor, selecione um arquivo PDF.');
      return;
    }

    setCarregando(true);
    setErro('');

    const formData = new FormData();
    formData.append('arquivoPdf', arquivo);

    try {
      // Fazendo a requisição para a nossa API separada (Express) que está rodando na porta 3001
      const response = await fetch('http://localhost:3001/api/taxas', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Falha na comunicação com o Back-end.');
      }

      const data = await response.json();
      setResultado(data);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '80px auto', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>📊 Leitor de Taxas Asaas</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Selecione o seu extrato em PDF para calcular o total de tarifas.
      </p>
      
      <div style={{ padding: '30px', border: '2px dashed #000', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#f8f9fa' }}>
        <input 
          type="file" 
          accept="application/pdf" 
          onChange={handleSelecionarArquivo} 
          style={{ fontSize: '16px' }}
        />
      </div>

      <button 
        onClick={handleProcessar} 
        disabled={carregando}
        style={{ 
          padding: '12px 24px', 
          fontSize: '16px', 
          cursor: carregando ? 'not-allowed' : 'pointer', 
          backgroundColor: carregando ? '#ccc' : '#000', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          fontWeight: 'bold'
        }}
      >
        {carregando ? 'Lendo o PDF...' : 'Calcular Taxas'}
      </button>

      {erro && <p style={{ color: 'red', marginTop: '20px', fontWeight: 'bold' }}>{erro}</p>}

      {resultado && (
        <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#eaffea', borderRadius: '8px', border: '1px solid #28a745' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#155724' }}>Resultado da Extração:</h2>
          <p style={{ fontSize: '18px', color: '#155724' }}><strong>Quantidade de taxas:</strong> {resultado.quantidade}</p>
          <p style={{ fontSize: '32px', color: '#28a745', fontWeight: 'bold', margin: '10px 0 0 0' }}>
            Total em taxas {resultado.totalFormatado}
          </p>
        </div>
      )}
    </div>
  );
}
