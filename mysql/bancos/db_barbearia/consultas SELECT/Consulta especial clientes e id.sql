SELECT
	c.id AS id_cliente, c.nome AS nome_cliente
FROM
	agendamentos ag
JOIN
	clientes c ON c.id = ag.id_cliente
WHERE
	ag.data_agendamento BETWEEN '2026-07-01' AND '2026-08-20'
GROUP BY
	c.id, c.nome;