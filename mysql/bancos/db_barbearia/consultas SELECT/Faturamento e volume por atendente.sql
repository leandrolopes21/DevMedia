-- Faturamento e volume por atendente
SELECT
	sub.nome_atendente,
    SUM(sub.valor_total_agendamento) AS Total_faturamento,
    COUNT(sub.id_agendamento) AS total_agendamentos
FROM
(
	SELECT
	  at.id AS id_atendente,
	  at.nome_atendente,
      ag.id AS id_agendamento,
	  SUM(s.preco) AS valor_total_agendamento
	FROM
	  agendamentos ag
	JOIN
	  atendentes at ON ag.id_atendente = at.id
	JOIN
	  agendamento_servicos ags ON ag.id = ags.id_agendamento
	JOIN
	  servicos s ON ags.id_servico = s.id
	WHERE
	  ag.data_agendamento BETWEEN '2026-07-01' AND '2026-08-10'
	GROUP BY
	  ag.id, at.nome_atendente, at.id
) AS sub
GROUP BY
	sub.id_atendente, sub.nome_atendente
ORDER BY
	total_faturamento DESC;