SELECT c.id AS id_cliente,
    c.nome AS nome_cliente,
    -- Início da Subquery Correlacionada
    (
        SELECT COUNT(ate.id)
        FROM atendimentos ate
        WHERE ate.id_cliente = c.id -- A "correlação"
    ) AS total_atendimentos
FROM agendamentos ag
    JOIN clientes c ON ag.id_cliente = c.id
WHERE ag.data_agendamento BETWEEN '2026-07-01' AND '2026-08-11'
GROUP BY c.id,
    c.nome
HAVING total_atendimentos > 0
ORDER BY total_atendimentos DESC;