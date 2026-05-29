-- Consulta para ver o 3 produtos de maior receita, tabelas produtos e vendaproduto

SELECT p.nome, SUM(v.valor) AS total
FROM vendaproduto v
JOIN produtos p ON v.id_produto = p.id_produto
GROUP BY p.nome
ORDER BY total DESC
LIMIT 3;