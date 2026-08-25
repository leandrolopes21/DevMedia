CREATE TABLE IF NOT EXISTS db_barbearia.atendimentos (
  id INT NOT NULL AUTO_INCREMENT,
  id_atendente INT NOT NULL,
  id_cliente INT NOT NULL,
  id_agendamento INT NULL,
  data_atendimento DATETIME NOT NULL,
  data_criacao TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  
  -- Relacionamentos (Chaves Estrangeiras)
  CONSTRAINT fk_atendimentos_atendente
    FOREIGN KEY (id_atendente)
    REFERENCES db_barbearia.atendentes (id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
    
  CONSTRAINT fk_atendimentos_cliente
    FOREIGN KEY (id_cliente)
    REFERENCES db_barbearia.clientes (id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
    
  CONSTRAINT fk_atendimentos_agendamento
    FOREIGN KEY (id_agendamento)
    REFERENCES db_barbearia.agendamentos (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;