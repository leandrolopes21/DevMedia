-- Utilizando a cláusula DISTINCT

-- Trata-se de uma cláusula para eliminar repetições em consultas
-- Considerando as colunas informadas na listagem de colunas do comando SELECT
-- Que contenham valores iguais com o mesmo registro

-- Selecionando a coluna email

-- SELECT DISTINCT email
-- FROM clientes

-- Selecionando mais de uma coluna

SELECT
    DISTINCT email
    FROM clientes