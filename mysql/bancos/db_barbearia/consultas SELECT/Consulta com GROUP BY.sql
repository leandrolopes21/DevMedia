-- Criando consulta com GROUP BY
SELECT
  id_atendente,
  COUNT(id) AS total_agendamentos -- Conta os agendamentos e dá um apelido
FROM
  agendamentos
GROUP
  BY id_atendente -- Agrupa os resultados por atendente
ORDER BY
	id_atendente;