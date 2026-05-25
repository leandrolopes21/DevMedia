-- Criei a tabela clientes, inicialmente apenas com id_cliente e nome

/*
CREATE TABLE clientes
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL;
*/

-- Abaixo o código de alteração, para incluir novas colunas

/*
ALTER TABLE clientes
ADD cnpj VARCHAR(18) UNIQUE,
ADD email VARCHAR(100),
ADD telefone VARCHAR(20),
ADD data_cadastro DATE,
ADD ativo BOOLEAN DEFAULT TRUE;
*/

SELECT * FROM clientes

/*
INSERT INTO clientes (
    nome, cnpj, email, telefone, data_cadastro
) VALUES
    ('Siemens Energy', '08470856000145', 'siemens@siemens.com', '41887712545', '2026-05-25'),
    ('Autodesk', '08950410000145', 'autodesk@autodesk.com', '49889712536', '2026-05-25'),
    ('BookBuilding', '04845970000125', 'book@building.com', '51985415872', '2026-05-25');
*/

-- Deletando linhas específicas pelo id
/*
DELETE FROM clientes
WHERE id_cliente IN (1,2,3);
*/