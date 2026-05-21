-- 1. Criação e seleção do Schema

CREATE DATABASE IF NOT EXISTS empresa;
USE empresa;

-- 2. Criação da Tabela de Departamentos
CREATE TABLE IF NOT EXISTS departamentos (
	id_departamento INT AUTO_INCREMENT PRIMARY KEY,
    nome_departamento VARCHAR(100) NOT NULL,
    sigla VARCHAR(10) NOT NULL
);

-- 3. Criação da Tabela de Cargos
CREATE TABLE IF NOT EXISTS cargos (
	id_cargo INT AUTO_INCREMENT PRIMARY KEY,
    titulo_cargo VARCHAR(100) NOT NULL,
    salario_base DECIMAL(10, 2) NOT NULL
);

-- 4. Criação da Tabela de Funcionários e Definição das Relações
CREATE TABLE IF NOT EXISTS funcionarios (
	id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    data_admissão DATE NOT NULL,
    id_departamento INT,
    id_cargo INT,
    
    -- Restrição da relação com Departamentos
    CONSTRAINT fk_funcionario_departamento
		FOREIGN KEY (id_departamento)
        REFERENCES departamentos (id_departamento)
        ON DELETE SET NULL,
        
	-- Restrição da relação com Cargos
    CONSTRAINT fk_funcionario_cargo
		FOREIGN KEY (id_cargo)
        REFERENCES cargos (id_cargo)
        ON DELETE RESTRICT
);