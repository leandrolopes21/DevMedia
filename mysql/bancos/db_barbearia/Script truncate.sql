-- MySQL: desabilita checagem de FK, trunca a tabela (reseta AUTO_INCREMENT) e reabilita as checagens
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE clientes;
SET FOREIGN_KEY_CHECKS = 1;