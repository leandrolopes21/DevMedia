-- Criando consulta com GROUP BY
SELECT
  id_atendente,
  COUNT(id) AS total_agendamentos -- Conta os agendamentos e dá um apelido
FROM
  agendamentos
WHERE
	data_agendamento BETWEEN '2026-07-01' AND '2026-07-05' -- Filtra por período de data
GROUP
  BY id_atendente -- Agrupa os resultados por atendente
ORDER BY
	id_atendente;