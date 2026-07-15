-- 1. Criação e seleção do Schema

-- CREATE DATABASE IF NOT EXISTS db_barbearia;
-- USE db_barbearia;

-- 2. Criação da Tabela de servicos
/*
CREATE TABLE IF NOT EXISTS servicos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome_servico VARCHAR(100) NOT NULL,
  preco INT NOT NULL,
  duracao_servico_minutos INT NOT NULL
);
*/

-- 3. Criação da Tabela de clientes
/*
CREATE TABLE IF NOT EXISTS clientes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20)
);
*/

-- 4. Criação da Tabela de atendentes
/*
CREATE TABLE IF NOT EXISTS atendentes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data_inicio DATE NOT NULL
);
*/

-- 5. Alterar atributo de coluna
/*
ALTER TABLE clientes
MODIFY COLUMN email VARCHAR(100) NOT NULL;
*/
/*
ALTER TABLE atendentes
MODIFY COLUMN telefone VARCHAR(20),
MODIFY COLUMN data_inicio DATE,
MODIFY COLUMN status_atendente VARCHAR(50) NOT NULL;
*/

-- 6. Criar no campo com atributo
/*
ALTER TABLE clientes
ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'ativo'; -- Adiciona o campo status
*/
/*
ALTER TABLE clientes
ADD COLUMN teste NUMERIC; -- Adiciona o campo teste
*/
/*
ALTER TABLE clientes
DROP COLUMN teste; -- Remove o campo teste
*/

-- 7. Excluir uma tabela, se ela existir
/*
DROP TABLE IF EXISTS enderecos;
*/
ALTER TABLE atendentes
MODIFY COLUMN nome VARCHAR(200) NOT NULL;