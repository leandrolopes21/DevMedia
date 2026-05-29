-- CREATE DATABASE IF NOT EXISTS engenharia;
-- USE engenharia;

-- 2. Criação da Tabela resultado

CREATE TABLE IF NOT EXISTS resultado (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_peca VARCHAR(50) NOT NULL,
    material VARCHAR(50) NOT NULL,
    dimensao_x VARCHAR(10) NOT NULL,
    dimensao_y VARCHAR(10) NOT NULL,
    espessura VARCHAR(10) NOT NULL,
    quantidade INT NOT NULL
);