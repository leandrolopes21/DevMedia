-- Criar usuário para acesso remoto
CREATE USER 'leandro@%' IDENTIFIED BY '*Leandro21';

-- Todas as permissões para gerenciar os bancos
GRANT ALL PRIVILEGES ON *.* TO 'leandro@%';

-- Atualiza as permissões do MySQL
FLUSH PRIVILEGES;