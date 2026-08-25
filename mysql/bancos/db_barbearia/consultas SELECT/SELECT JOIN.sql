SELECT
	c.id, c.nome, ag.data_agendamento
FROM
	clientes c
LEFT JOIN
	agendamentos ag
ON
	c.id = ag.id_cliente;