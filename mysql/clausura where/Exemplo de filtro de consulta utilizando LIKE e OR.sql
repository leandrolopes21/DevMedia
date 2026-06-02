-- Exemplo de filtro de consulta utilizando LIKE e OR

SELECT nome
FROM empresa.clientes
WHERE email LIKE '%autodesk%' OR email LIKE '%book%';