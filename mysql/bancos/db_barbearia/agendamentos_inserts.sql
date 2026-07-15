-- Inserts para agendamentos
INSERT INTO agendamentos (id_cliente, id_atendente, status_agendamento, data_agendamento) VALUES
(12, 1, 'agendado', '2026-07-01'),
(7, 2, 'confirmado', '2026-07-02'),
(21, 1, 'concluido', '2026-07-03'),
(3, 3, 'agendado', '2026-07-04'),
(18, 2, 'cancelado', '2026-07-05'),
(29, 4, 'confirmado', '2026-07-06'),
(5, 3, 'agendado', '2026-07-07'),
(31, 5, 'concluido', '2026-07-08'),
(14, 2, 'confirmado', '2026-07-09'),
(9, 6, 'agendado', '2026-07-10'),
(26, 4, 'cancelado', '2026-07-11'),
(1, 1, 'confirmado', '2026-07-12'),
(17, 3, 'agendado', '2026-07-13'),
(23, 5, 'concluido', '2026-07-14'),
(11, 6, 'confirmado', '2026-07-15');

-- Inserts para agendamento_servicos
-- Assumindo a estrutura: id, id_agendamento, id_servico, created_at
INSERT INTO agendamento_servicos (id_agendamento, id_servico) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 2),
(6, 5),
(7, 1),
(8, 6),
(9, 3),
(10, 7),
(11, 4),
(12, 8),
(13, 2),
(14, 5),
(15, 6);
