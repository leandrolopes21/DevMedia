-- Agendamentos por atendente
SELECT
  ag.id_atendente,
  COUNT(ag.id) AS total_agendamentos -- Conta os agendamentos e dá um apelido
FROM
  agendamentos ag
WHERE
  ag.data_agendamento BETWEEN '2026-07-01' AND '2026-07-30' -- Filtra o período
GROUP
  BY id_atendente -- Agrupa os resultados por atendente
HAVING
  COUNT(ag.id) > 1 -- Filtra os grupos com contagem maior que 1
ORDER BY total_agendamentos DESC; -- Ordena pelo apelido, do maior para o menor