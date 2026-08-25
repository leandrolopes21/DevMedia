-- Resumo de agendamentos por atendente
SELECT
  ag.id AS id_agendamento,
  at.nome_atendente AS nome_atendente,
  SUM(s.preco) AS valor_total_agendamento,
  COUNT(ag.id) AS total_servico_no_agendamento
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
ORDER BY
  at.nome_atendente