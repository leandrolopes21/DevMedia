-- USE empresa;

-- CREATE TABLE IF NOT EXISTS produtos (
--     id_produto INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     preco DECIMAL(10, 2) NOT NULL
-- );

CREATE TABLE IF NOT EXISTS vendaProduto (
    id_vendaProduto INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    data_venda DATE NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    id_produto INT NOT NULL,

    CONSTRAINT fk_vendaProduto_produto
        FOREIGN KEY (id_produto)
        REFERENCES produtos (id_produto)
        ON DELETE RESTRICT
);