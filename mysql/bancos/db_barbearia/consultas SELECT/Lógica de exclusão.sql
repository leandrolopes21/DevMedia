-- Lista de clientes sem agendamento no período definido na consulta
SELECT * FROM clientes

WHERE id NOT IN (

    -- Subquery: Retorna os IDs dos clientes que agendaram no período

    SELECT DISTINCT id_cliente

    FROM agendamentos

    WHERE data_agendamento BETWEEN '2026-07-01' AND '2026-07-31'
    
    ORDER BY id_cliente

);