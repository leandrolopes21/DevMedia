CREATE TABLE IF NOT EXISTS agendamentos (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_cliente INT,
    id_atendente INT,
    status_agendamento VARCHAR(50) NOT NULL,
    data_agendamento DATE NOT NULL,

    CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    CONSTRAINT fk_atendente FOREIGN KEY (id_atendente) REFERENCES atendentes(id)
);

CREATE TABLE IF NOT EXISTS agendamento_servicos (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_agendamento INT,
    id_servico INT,

    CONSTRAINT fk_agendamento FOREIGN KEY (id_agendamento) REFERENCES agendamentos(id),
    CONSTRAINT fk_servico FOREIGN KEY (id_servico) REFERENCES servicos(id)
);