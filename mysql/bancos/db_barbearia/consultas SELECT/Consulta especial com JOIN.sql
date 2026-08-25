SELECT
	ate.nome_atendente AS Atendente,
	c.nome AS Cliente,
    ag.data_agendamento AS Data,
    ag.hora_agendamento AS Horário
FROM agendamentos ag
    JOIN clientes c ON c.id = ag.id_cliente
	JOIN atendentes ate ON ate.id = ag.id_atendente;