-- 1. Criação e seleção do Schema

-- CREATE DATABASE IF NOT EXISTS db_barbearia;
-- USE db_barbearia;

-- 2. Criação da Tabela de servicos
/*
CREATE TABLE IF NOT EXISTS servicos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome_servico VARCHAR(100) NOT NULL,
  preco INT NOT NULL,
  duracao_servico_minutos INT NOT NULL,
);
*/

-- 3. Criação da Tabela de clientes
/*
CREATE TABLE IF NOT EXISTS clientes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    status_cliente BOOLEAN NOT NULL
);
*/

-- 4. Criação da Tabela de atendentes
CREATE TABLE IF NOT EXISTS atendentes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data_inicio DATE NOT NULL,
    status_atendente BOOLEAN NOT NULL
);