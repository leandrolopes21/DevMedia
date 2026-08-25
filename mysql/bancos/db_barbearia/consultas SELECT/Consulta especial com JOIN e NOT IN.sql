SELECT
	'Sem atendente' AS Atendente,
    c.nome AS Cliente,
    ag.data_agendamento AS Data,
    ag.hora_agendamento AS Horário
FROM agendamentos ag
    JOIN clientes c ON c.id = ag.id_cliente
WHERE ag.id_atendente NOT IN (
	SELECT DISTINCT id_atendente
    FROM atendentes ate
    WHERE id_atendente IS NOT NULL
);