-- 1. Criação e seleção do Schema

-- CREATE DATABASE IF NOT EXISTS db_barbearia;
-- USE db_barbearia;

-- 2. Criação da Tabela de servicos
/*
CREATE TABLE IF NOT EXISTS servicos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco INT(10) NOT NULL,
    duracao_servico_minutos INT(3) NOT NULL
);
*/

-- 3. Criação da Tabela de clientes
CREATE TABLE IF NOT EXISTS clientes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL
);

-- 4. Criação da Tabela de atendentes
CREATE TABLE IF NOT EXISTS atendentes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    telefone CHAR(11) NOT NULL,
    data_inicio DATE NOT NULL
);